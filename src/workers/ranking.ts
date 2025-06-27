import type { Rankings } from "../data/ranking";
import { getCachedRanking, setCachedRanking, generateCacheKey } from "./cache";

interface RankingScoreRecord {
  id: number;
  fetched_at: string;
  category: string;
  theme: string;
  etyping_name: string;
  score: number;
  created_at: string;
}

interface TotalRankingEntry {
  username: string;
  totalScore: number;
  categoryScores: Record<string, number>;
  categoriesPlayed: number;
}

interface TotalRankingEntryWithRank {
  rank: number;
  username: string;
  totalScore: number;
  categoryScores: Record<string, number>;
  categoriesPlayed: number;
}

export function calculateTotalScoreRanking(
  rankings: Rankings
): TotalRankingEntryWithRank[] {
  const userScores = new Map<string, TotalRankingEntry>();

  // Aggregate scores for each user across all categories
  Object.entries(rankings).forEach(([category, ranking]) => {
    ranking.entries.forEach((entry) => {
      const existing = userScores.get(entry.username);
      if (existing) {
        existing.totalScore += entry.score;
        existing.categoryScores[category] = entry.score;
        existing.categoriesPlayed += 1;
      } else {
        userScores.set(entry.username, {
          username: entry.username,
          totalScore: entry.score,
          categoryScores: { [category]: entry.score },
          categoriesPlayed: 1,
        });
      }
    });
  });

  // Convert to array and sort by total score (descending)
  const sortedUsers = Array.from(userScores.values()).sort(
    (a, b) => b.totalScore - a.totalScore
  );

  // Add ranks, handling ties
  const rankedUsers: TotalRankingEntryWithRank[] = [];
  let currentRank = 1;

  for (let i = 0; i < sortedUsers.length; i++) {
    const user = sortedUsers[i];
    const prevUser = sortedUsers[i - 1];

    // If this user has the same score as the previous user, use the same rank
    if (prevUser && user.totalScore === prevUser.totalScore) {
      // Keep the same rank as previous user
    } else {
      currentRank = i + 1;
    }

    rankedUsers.push({
      ...user,
      rank: currentRank,
    });
  }

  return rankedUsers;
}

export async function calculateTotalScoreRankingFromDB(
  db: D1Database,
  kv: KVNamespace
): Promise<TotalRankingEntryWithRank[]> {
  const startTime = performance.now();

  // レコード数を取得してキャッシュキーを生成
  const cacheKey = await generateCacheKey(db);

  // キャッシュが利用可能な場合はキャッシュを確認
  const cachedRanking = await getCachedRanking(kv, cacheKey);
  if (cachedRanking) {
    const totalTime = performance.now() - startTime;
    console.log(`Total ranking processing time (cached): ${totalTime}ms`);
    return cachedRanking;
  }

  // データベースから各ユーザー・カテゴリごとの最高スコアを取得
  const dbQueryStart = performance.now();
  const stmt = db.prepare(`
    SELECT
      etyping_name,
      category,
      MAX(score) as score
    FROM ranking_scores
    GROUP BY etyping_name, category
    ORDER BY etyping_name, category
  `);

  const result =
    await stmt.all<
      Pick<RankingScoreRecord, "etyping_name" | "category" | "score">
    >();
  const dbQueryEnd = performance.now();
  console.log(`Database query time: ${dbQueryEnd - dbQueryStart}ms`);

  if (!result.success) {
    throw new Error("Failed to fetch ranking data from database");
  }

  const userScores = new Map<string, TotalRankingEntry>();

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

  // ユーザーごとにスコアを集計（各カテゴリの最高スコアのみ）
  const calculationStart = performance.now();
  result.results.forEach((record) => {
    const categoryId = categoryIdMap[record.category] || record.category;
    const existing = userScores.get(record.etyping_name);

    if (existing) {
      existing.totalScore += record.score;
      existing.categoryScores[categoryId] = record.score;
      existing.categoriesPlayed += 1;
    } else {
      userScores.set(record.etyping_name, {
        username: record.etyping_name,
        totalScore: record.score,
        categoryScores: { [categoryId]: record.score },
        categoriesPlayed: 1,
      });
    }
  });

  // 配列に変換してトータルスコアで降順ソート
  const sortedUsers = Array.from(userScores.values()).sort(
    (a, b) => b.totalScore - a.totalScore
  );

  // ランクを追加（同順位の処理を含む）
  const rankedUsers: TotalRankingEntryWithRank[] = [];
  let currentRank = 1;

  for (let i = 0; i < sortedUsers.length; i++) {
    const user = sortedUsers[i];
    const prevUser = sortedUsers[i - 1];

    // 前のユーザーと同じスコアの場合は同じランクを使用
    if (prevUser && user.totalScore === prevUser.totalScore) {
      // Keep the same rank as previous user
    } else {
      currentRank = i + 1;
    }

    rankedUsers.push({
      ...user,
      rank: currentRank,
    });
  }
  const calculationEnd = performance.now();
  console.log(
    `Ranking calculation time: ${calculationEnd - calculationStart}ms`
  );

  const totalTime = performance.now() - startTime;
  console.log(`Total ranking processing time: ${totalTime}ms`);
  console.log(
    `Records processed: ${result.results.length}, Users: ${rankedUsers.length}`
  );

  // ランキングをキャッシュに保存する
  await setCachedRanking(kv, cacheKey, rankedUsers);

  return rankedUsers;
}
