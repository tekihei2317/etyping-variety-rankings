interface TotalRankingEntryWithRank {
  rank: number;
  username: string;
  totalScore: number;
  categoryScores: Record<string, number>;
  categoriesPlayed: number;
}

// キャッシュにはランキングデータのみを保存
type CachedRankingData = TotalRankingEntryWithRank[];

async function getRecordCount(db: D1Database): Promise<number> {
  const countStmt = db.prepare(`SELECT COUNT(*) as count FROM ranking_scores`);
  const countResult = await countStmt.first<{ count: number }>();

  if (countResult === null) {
    throw new Error("Failed to get record count from database");
  }

  return countResult.count;
}

export async function generateCacheKey(db: D1Database): Promise<string> {
  const recordCount = await getRecordCount(db);

  return `ranking_${recordCount}`;
}

export async function getCachedRanking(
  kv: KVNamespace,
  cacheKey: string
): Promise<TotalRankingEntryWithRank[] | null> {
  const cacheStart = performance.now();

  const cachedData = await kv.get<CachedRankingData>(cacheKey, "json");
  const cacheCheckTime = performance.now() - cacheStart;

  if (cachedData) {
    console.log(`Cache hit! Retrieved from KV in ${cacheCheckTime}ms`);
    return cachedData;
  }

  console.log(`Cache miss. Cache check took ${cacheCheckTime}ms`);
  return null;
}

export async function setCachedRanking(
  kv: KVNamespace,
  cacheKey: string,
  ranking: TotalRankingEntryWithRank[]
): Promise<void> {
  const cacheStoreStart = performance.now();

  await kv.put(cacheKey, JSON.stringify(ranking), {
    expirationTtl: 24 * 60 * 60, // 24時間
  });

  const cacheStoreTime = performance.now() - cacheStoreStart;
  console.log(`Cached ranking data in KV (${cacheStoreTime}ms)`);
  console.log(`Data size: ${JSON.stringify(ranking).length} bytes`);
}

export async function invalidateRankingCache(
  kv: KVNamespace,
  cacheKey: string
): Promise<void> {
  await kv.delete(cacheKey);
  console.log(`Invalidated cache: ${cacheKey}`);
}
