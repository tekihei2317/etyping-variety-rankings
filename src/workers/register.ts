import { checkIfScoreExistsInEtyping } from "./etyping-fetcher";

/**
 * データベースで既存のスコアをチェックする
 */
async function checkExistingScore(
  db: D1Database,
  username: string,
  categoryId: string
): Promise<number | null> {
  const stmt = db
    .prepare(
      `SELECT score FROM ranking_scores
      WHERE etyping_name = ? AND category = ?
      ORDER BY score DESC LIMIT 1`
    )
    .bind(username, getCategoryJapaneseName(categoryId));

  const result = await stmt.first<{ score: number }>();
  return result?.score || null;
}

/**
 * カテゴリIDから日本語名に変換
 */
function getCategoryJapaneseName(categoryId: string): string {
  const categoryMap: Record<string, string> = {
    business: "ビジネス",
    study: "スタディ",
    life: "ライフ",
    travel: "トラベル",
    sports: "スポーツ",
    what: "なんだろな？",
    brain: "脳トレ",
    dialect: "方言",
    long: "長文",
    tenkey: "テンキー",
    hyakunin: "百人一首",
    siritori: "しりとり",
    medical: "医療介護",
  };
  return categoryMap[categoryId] || categoryId;
}

/**
 * スコア登録処理のメイン関数
 */
export interface RegisterScoreInput {
  browser: Fetcher;
  db: D1Database;
  categoryId: string;
  userData: { userName: string; score: number };
}

export async function registerUserScore({
  browser,
  db,
  categoryId,
  userData,
}: RegisterScoreInput): Promise<{
  success: boolean;
  message: string;
  statusCode: 201 | 400 | 500;
}> {
  // 送信されたデータ以上のスコアが登録されている場合は、処理を中断する
  const existingScore = await checkExistingScore(
    db,
    userData.userName,
    categoryId
  );
  if (existingScore && existingScore >= userData.score) {
    return {
      success: false,
      message: `既により高いスコア（${existingScore}点）が登録されています`,
      statusCode: 400,
    };
  }

  // e-typingにデータが登録されているか確認する
  const found = await checkIfScoreExistsInEtyping({
    browser,
    categoryId,
    userData,
  });

  if (!found) {
    return {
      success: false,
      message:
        "指定されたユーザー名とスコアの組み合わせがe-typingのランキングに見つかりませんでした",
      statusCode: 400,
    };
  }

  // データベースにデータを登録する
  const categoryJapaneseName = getCategoryJapaneseName(categoryId);
  const stmt = db
    .prepare(
      `INSERT INTO ranking_scores (etyping_name, category, score, created_at, updated_at)
        VALUES (?, ?, ?, datetime('now'), datetime('now'))`
    )
    .bind(userData.userName, categoryJapaneseName, userData.score);
  await stmt.run();

  return {
    success: true,
    message: `スコア（${userData.score}点）を正常に登録しました`,
    statusCode: 201,
  };
}
