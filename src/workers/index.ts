/**
 * Hono-based API for e-typing ranking
 * ランキングページ用のAPI
 */

import { Hono } from "hono";
import { cors } from "hono/cors";

// 型定義をインポート
interface RankingEntry {
  rank: number;
  username: string;
  score: number;
}

interface RankingData {
  category: string;
  entries: RankingEntry[];
  fetchedAt: string;
  totalPages?: number;
}

interface TotalRankingEntry {
  username: string;
  totalScore: number;
  categoryScores: Record<string, number>;
  categoriesPlayed: number;
}

interface Env {
  MYBROWSER?: Fetcher;
}

const app = new Hono<{ Bindings: Env }>();

// CORS設定
app.use("*", cors());

// ダミーデータ（実際のJSONファイルの代替）
const getDummyRankingData = (): RankingData[] => [
  {
    category: "business",
    entries: [
      { rank: 1, username: "ビジネスマスター", score: 450 },
      { rank: 2, username: "オフィスワーカー", score: 420 },
      { rank: 3, username: "営業エース", score: 390 },
    ],
    fetchedAt: new Date().toISOString(),
  },
  {
    category: "study",
    entries: [
      { rank: 1, username: "学習王", score: 628 },
      { rank: 2, username: "勉強家", score: 521 },
      { rank: 3, username: "知識人", score: 506 },
    ],
    fetchedAt: new Date().toISOString(),
  },
  {
    category: "life",
    entries: [
      { rank: 1, username: "生活達人", score: 380 },
      { rank: 2, username: "日常プロ", score: 350 },
      { rank: 3, username: "ライフマスター", score: 320 },
    ],
    fetchedAt: new Date().toISOString(),
  },
];

// 合計ランキング計算関数
const calculateTotalRanking = (
  allRankings: RankingData[]
): TotalRankingEntry[] => {
  const userScores = new Map<string, TotalRankingEntry>();

  allRankings.forEach((ranking) => {
    ranking.entries.forEach((entry) => {
      const existingUser = userScores.get(entry.username);

      if (existingUser) {
        existingUser.totalScore += entry.score;
        existingUser.categoryScores[ranking.category] = entry.score;
        existingUser.categoriesPlayed++;
      } else {
        userScores.set(entry.username, {
          username: entry.username,
          totalScore: entry.score,
          categoryScores: { [ranking.category]: entry.score },
          categoriesPlayed: 1,
        });
      }
    });
  });

  return Array.from(userScores.values()).sort(
    (a, b) => b.totalScore - a.totalScore
  );
};

// ページネーション関数
const paginateRanking = (
  ranking: TotalRankingEntry[],
  page: number,
  pageSize: number = 50
) => {
  const totalCount = ranking.length;
  const totalPages = Math.ceil(totalCount / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const data = ranking.slice(startIndex, endIndex);

  return {
    data,
    totalPages,
    currentPage: page,
    totalCount,
  };
};

// API routes
const route = app
  .get("/", (c) =>
    c.json({
      message: "e-typing Ranking API",
      endpoints: {
        "/api/total-ranking": "バラエティ合計ランキングを取得",
        "/api/categories": "カテゴリ一覧を取得",
      },
    })
  )
  .get("/api/ranking", (c) => {
    //   const page = parseInt(c.req.query("page") ?? "1");
    //   const pageSize = parseInt(c.req.query("pageSize") ?? "50");

    //   // 実際の実装では、ここでJSONファイルを読み込む
    //   const allRankings = getDummyRankingData();
    //   const totalRanking = calculateTotalRanking(allRankings);
    //   const paginatedResult = paginateRanking(totalRanking, page, pageSize);

    //   return c.json({
    //     success: true,
    //     ...paginatedResult,
    //     message: `${paginatedResult.data.length}件のランキングデータを取得しました`,
    //   });
    // })
    return c.json({ message: "Hello, world!!" });
  })
  .get("/api/categories", (c) => {
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

    return c.json({ categories });
  });

export type AppType = typeof route;
export default app;
