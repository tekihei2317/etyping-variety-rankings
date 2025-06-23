import { RankingData, RankingEntry, VARIETY_CATEGORIES } from "./types.js";

// JSONデータを動的にインポートする関数
export async function loadAllRankingData(): Promise<RankingData[]> {
  const allRankings: RankingData[] = [];
  
  for (const category of VARIETY_CATEGORIES) {
    try {
      // 最新のランキングデータファイルを読み込み
      const today = new Date().toISOString().split("T")[0];
      const filename = `../data/${category.id}-ranking-${today}.json`;
      
      // 動的インポートでJSONを読み込み
      const response = await fetch(`/data/${category.id}-ranking-${today}.json`);
      if (response.ok) {
        const rankingData: RankingData = await response.json();
        allRankings.push(rankingData);
      } else {
        console.warn(`Could not load ranking data for ${category.name}`);
      }
    } catch (error) {
      console.error(`Error loading ranking data for ${category.name}:`, error);
    }
  }
  
  return allRankings;
}

// 合計スコアを計算してランキングを作成
export interface TotalRankingEntry {
  username: string;
  totalScore: number;
  categoryScores: Record<string, number>;
  categoriesPlayed: number;
}

export function calculateTotalRanking(allRankings: RankingData[]): TotalRankingEntry[] {
  const userScores = new Map<string, TotalRankingEntry>();
  
  // 各カテゴリのランキングを処理
  allRankings.forEach((ranking) => {
    ranking.entries.forEach((entry) => {
      const existingUser = userScores.get(entry.username);
      
      if (existingUser) {
        // 既存ユーザーの場合、スコアを追加
        existingUser.totalScore += entry.score;
        existingUser.categoryScores[ranking.category] = entry.score;
        existingUser.categoriesPlayed++;
      } else {
        // 新しいユーザーの場合、エントリを作成
        userScores.set(entry.username, {
          username: entry.username,
          totalScore: entry.score,
          categoryScores: { [ranking.category]: entry.score },
          categoriesPlayed: 1,
        });
      }
    });
  });
  
  // 合計スコア順にソートして返す
  return Array.from(userScores.values())
    .sort((a, b) => b.totalScore - a.totalScore);
}

// ページネーション用のヘルパー関数
export function paginateRanking(
  ranking: TotalRankingEntry[],
  page: number,
  pageSize: number = 50
): {
  data: TotalRankingEntry[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
} {
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
}