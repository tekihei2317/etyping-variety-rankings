import { z } from "zod";

export const userParamSchema = z.object({
  username: z.string().min(1, "Username is required"),
});

export type UserParamType = z.infer<typeof userParamSchema>;

interface UserCategoryScore {
  score: number | null;
  theme: string | null;
  fetchedAt: string | null;
}

interface UserCategory {
  id: string;
  name: string;
  score: number | null;
  theme: string | null;
  fetchedAt: string | null;
}

export interface UserDetails {
  username: string;
  totalScore: number;
  categoriesPlayed: number;
  categories: UserCategory[];
}

// カテゴリの日本語名から英語IDへのマッピング
const categoryIdMap: Record<string, string> = {
  ビジネス: "business",
  スタディ: "study",
  ライフ: "life",
  トラベル: "travel",
  スポーツ: "sports",
  "なんだろな？": "what",
  脳トレ: "brain",
  方言: "dialect",
  長文: "long",
  テンキー: "tenkey",
  百人一首: "hyakunin",
  しりとり: "siritori",
  医療介護: "medical",
};

const categories = [
  { id: "business", name: "ビジネス" },
  { id: "study", name: "スタディ" },
  { id: "life", name: "ライフ" },
  { id: "travel", name: "トラベル" },
  { id: "sports", name: "スポーツ" },
  { id: "what", name: "なんだろな？" },
  { id: "brain", name: "脳トレ" },
  { id: "dialect", name: "方言" },
  { id: "long", name: "長文" },
  { id: "tenkey", name: "テンキー" },
  { id: "hyakunin", name: "百人一首" },
  { id: "siritori", name: "しりとり" },
  { id: "medical", name: "医療介護" },
];

export async function getUserDetails(
  db: D1Database,
  username: string
): Promise<UserDetails> {
  // データベースから特定ユーザーの各カテゴリの最高スコアを取得
  const stmt = db.prepare(`
    SELECT
      category,
      MAX(score) as score,
      theme,
      fetched_at
    FROM ranking_scores
    WHERE etyping_name = ?
    GROUP BY category
    ORDER BY category
  `);

  const result = await stmt.bind(username).all();

  if (!result.success) {
    throw new Error("Failed to fetch user data from database");
  }

  // スコアデータを整理
  const categoryScores: Record<string, UserCategoryScore> = {};
  let totalScore = 0;

  result.results.forEach((record: any) => {
    const categoryId = categoryIdMap[record.category] || record.category;
    categoryScores[categoryId] = {
      score: record.score,
      theme: record.theme,
      fetchedAt: record.fetched_at,
    };
    totalScore += record.score;
  });

  // 全カテゴリの情報を含むレスポンスを作成
  return {
    username,
    totalScore,
    categoriesPlayed: Object.keys(categoryScores).length,
    categories: categories.map((category) => ({
      ...category,
      score: categoryScores[category.id]?.score || null,
      theme: categoryScores[category.id]?.theme || null,
      fetchedAt: categoryScores[category.id]?.fetchedAt || null,
    })),
  };
}
