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
    console.log("get existing ranking data");
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
        console.log(
          `[UpdateCategoryRanking] Score update for ${entry.userName} ${existingScore} → ${entry.score}`
        );
      } else {
        console.log(
          `[UpdateCategoryRanking] New user ${entry.userName} with score ${entry.score}`
        );
      }

      if (!dryRun) {
        // TODO:
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
