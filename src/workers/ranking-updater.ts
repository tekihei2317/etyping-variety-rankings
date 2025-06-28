import { getBrowser } from "./browser-session";
import { createEtypingFetcher } from "./etyping-fetcher";
import { CATEGORY_URLS } from "./scraping";
import { Page } from "@cloudflare/puppeteer";
import { RankingEntry } from "./score-registration";
import { getCategoryJapaneseName } from "../web/utils/categories";

export interface RankingUpdateRequest {
  categoryId?: string;
  dryRun?: boolean;
}

export interface RankingUpdateResult {
  categoryId: string;
  newEntries: number;
  updatedEntries: number;
  totalScanned: number;
  dryRun: boolean;
  details: {
    newRecords: Array<{ userName: string; score: number; rank: number }>;
    updatedRecords: Array<{
      userName: string;
      previousScore: number;
      newScore: number;
      rank: number;
    }>;
  };
}

/**
 * 特定のカテゴリの全ページからランキングデータを取得
 */
async function fetchFullRankingData({
  browserPage,
  categoryId,
}: {
  browserPage: Page;
  categoryId: string;
}): Promise<Array<RankingEntry & { rank: number }>> {
  console.log(`[RankingUpdater] Starting full ranking fetch for ${categoryId}`);

  const baseUrl = CATEGORY_URLS[categoryId];
  await browserPage.goto(baseUrl, {
    waitUntil: "domcontentloaded",
  });

  await browserPage.waitForFunction(
    () => {
      return (
        typeof (window as any).ps_page_max !== "undefined" &&
        typeof (window as any).ps_page_move === "function"
      );
    },
    { timeout: 5000 }
  );

  const pageCount = await browserPage.evaluate(
    () => (window as any).ps_page_max
  );
  console.log(`[RankingUpdater] Found ${pageCount} pages for ${categoryId}`);

  const fetchRankingByPage = createEtypingFetcher({
    browserPage,
    categoryId,
  });

  const allEntries: Array<RankingEntry & { rank: number }> = [];
  let currentRank = 1;

  for (let page = 1; page <= pageCount; page++) {
    console.log(
      `[RankingUpdater] Fetching page ${page}/${pageCount} for ${categoryId}`
    );

    const pageEntries = await fetchRankingByPage(page);

    for (const entry of pageEntries) {
      allEntries.push({
        ...entry,
        rank: currentRank++,
      });
    }

    // ページ間での適切な待機
    if (page < pageCount) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }

  console.log(
    `[RankingUpdater] Completed fetching ${allEntries.length} total entries for ${categoryId}`
  );
  return allEntries;
}

/**
 * データベースから既存のランキングデータを取得
 */
async function getExistingRankingData(
  db: D1Database,
  categoryId: string
): Promise<Map<string, number>> {
  const categoryJapaneseName = getCategoryJapaneseName(categoryId);

  const stmt = db
    .prepare(
      `SELECT etyping_name, max(score) as max_score
      FROM ranking_scores
      WHERE category = ?
      GROUP BY etyping_name`
    )
    .bind(categoryJapaneseName);

  const results = await stmt.all<{
    etyping_name: string;
    max_score: number;
  }>();

  const existingData = new Map<string, number>();

  console.log(results.results);

  if (results.results) {
    for (const row of results.results) {
      existingData.set(row.etyping_name, row.max_score);
    }
  }
  console.log({
    existing: new Array(existingData.entries())
      .map(([username, score]) => `${username} ${score}`)
      .join("\n"),
  });

  return existingData;
}

/**
 * カテゴリIDから対応するお題を取得
 */
function getCategoryTheme(categoryId: string): string {
  const categoryThemeMap: Record<string, string> = {
    business: "プレゼンの基本",
    study: "元素名",
    life: "天気のことば",
    travel: "世界遺産",
    sports: "歴代名力士",
    what: "缶コーヒーのコピー",
    brain: "なんけた1",
    dialect: "北海道",
    long: "世界の童話2",
    tenkey: "漢数字",
    hyakunin: "歌人名",
    siritori: "植物",
    medical: "医療介護関係の仕事",
  };
  return categoryThemeMap[categoryId] || "不明";
}

/**
 * ユーザーのスコアをデータベースに登録
 */
async function insertUserScore(
  db: D1Database,
  categoryId: string,
  entry: RankingEntry & { rank: number },
  updateType: "new_record" | "score_update",
  previousScore?: number
): Promise<void> {
  const categoryJapaneseName = getCategoryJapaneseName(categoryId);
  const categoryTheme = getCategoryTheme(categoryId);
  const currentDateTime = new Date().toISOString();

  const insertScoreStmt = db
    .prepare(
      `INSERT INTO ranking_scores (fetched_at, category, theme, etyping_name, score)
      VALUES (?, ?, ?, ?, ?)`
    )
    .bind(
      currentDateTime,
      categoryJapaneseName,
      categoryTheme,
      entry.userName,
      entry.score
    );

  const insertHistoryStmt = db
    .prepare(
      `INSERT INTO score_update_history (username, category, previous_score, new_score, update_type, created_at)
      VALUES (?, ?, ?, ?, ?, datetime('now'))`
    )
    .bind(
      entry.userName,
      categoryJapaneseName,
      previousScore || null,
      entry.score,
      updateType
    );

  await db.batch([insertScoreStmt, insertHistoryStmt]);

  if (updateType === "new_record") {
    console.log(
      `[RankingUpdater] Inserted new user: ${entry.userName} (${entry.score}) in ${categoryJapaneseName}`
    );
  } else {
    console.log(
      `[RankingUpdater] Updated user score: ${entry.userName} ${previousScore} → ${entry.score} in ${categoryJapaneseName}`
    );
  }
}

/**
 * 単一カテゴリのランキングを更新
 */
export async function updateCategoryRanking({
  browser,
  db,
  categoryId,
  dryRun = false,
}: {
  browser: Fetcher;
  db: D1Database;
  categoryId: string;
  dryRun?: boolean;
}): Promise<RankingUpdateResult> {
  console.log(
    `[RankingUpdater] Starting ranking update for ${categoryId} (dryRun: ${dryRun})`
  );

  const puppeteerBrowser = await getBrowser(browser);
  const page = await puppeteerBrowser.newPage();

  try {
    // 全ランキングデータを取得
    const currentRankingData = await fetchFullRankingData({
      browserPage: page,
      categoryId,
    });

    // 既存データを取得
    const existingData = await getExistingRankingData(db, categoryId);

    const result: RankingUpdateResult = {
      categoryId,
      newEntries: 0,
      updatedEntries: 0,
      totalScanned: currentRankingData.length,
      dryRun,
      details: {
        newRecords: [],
        updatedRecords: [],
      },
    };

    // データの比較と更新処理
    for (const entry of currentRankingData) {
      const existingScore = existingData.get(entry.userName);

      // 既存のユーザーで、既にそれ以上のスコアが登録されている場合は登録しない
      if (existingScore !== undefined && entry.score <= existingScore) continue;

      if (existingScore) {
        // スコア更新
        result.updatedEntries++;
        result.details.updatedRecords.push({
          userName: entry.userName,
          previousScore: existingScore,
          newScore: entry.score,
          rank: entry.rank,
        });

        console.log(
          `[UpdateCategoryRanking] Score update for ${entry.userName} ${existingScore} → ${entry.score}`
        );

        if (!dryRun) {
          await insertUserScore(
            db,
            categoryId,
            entry,
            "score_update",
            existingScore
          );
        }
      } else {
        // 新規ユーザー
        result.newEntries++;
        result.details.newRecords.push({
          userName: entry.userName,
          score: entry.score,
          rank: entry.rank,
        });

        console.log(
          `[UpdateCategoryRanking] New user ${entry.userName} with score ${entry.score}`
        );

        if (!dryRun) {
          await insertUserScore(db, categoryId, entry, "new_record");
        }
      }
    }

    return result;
  } finally {
    puppeteerBrowser.disconnect();
  }
}

/**
 * 全カテゴリのランキングを更新
 */
export async function updateAllCategoryRankings({
  browser,
  db,
  dryRun = false,
}: {
  browser: Fetcher;
  db: D1Database;
  dryRun?: boolean;
}): Promise<RankingUpdateResult[]> {
  const categories = Object.keys(CATEGORY_URLS);
  const results: RankingUpdateResult[] = [];

  for (const categoryId of categories) {
    try {
      const result = await updateCategoryRanking({
        browser,
        db,
        categoryId,
        dryRun,
      });
      results.push(result);
    } catch (error) {
      console.error(`[RankingUpdater] Failed to update ${categoryId}:`, error);
      // エラーが発生しても他のカテゴリの処理は続行
    }
  }

  return results;
}
