import type { Rankings } from "../data/ranking";

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
