export type RankingEntry = { userName: string; score: number };

export type FetchRankingByPage = (page: number) => Promise<RankingEntry[]>;

type HasEtypingScoreInput = {
  userData: { userName: string; score: number };
  fetchRankingByPage: FetchRankingByPage;
  pageCount: number;
};

/**
 * そのスコアの記録が存在する可能性がある、最初のページを取得する
 */
async function findPageByScore({
  score,
  fetchRankingByPage,
  pageCount: pageNum,
}: {
  score: number;
  fetchRankingByPage: FetchRankingByPage;
  pageCount: number;
}): Promise<number> {
  // min(pageのスコア) <= scoreとなる最小のpageを求める
  // 1-indexed
  let ok = pageNum + 1;
  let ng = 0;
  while (ok - ng > 1) {
    const mid = Math.floor((ng + ok) / 2);

    const entries = await fetchRankingByPage(mid);
    const minScore = Math.min(...entries.map((entry) => entry.score));

    if (minScore <= score) ok = mid;
    else ng = mid;
  }
  return ok;
}

/**
 * ランキングの配列に、定のユーザーのデータが存在するか判定する
 */
function userDataExists(
  userData: { userName: string; score: number },
  entries: RankingEntry[]
): boolean {
  const usersEntry = entries.find(
    (entry) =>
      entry.score === userData.score && entry.userName === userData.userName
  );
  return usersEntry !== undefined;
}

/**
 * e-typingにスコアが存在するかどうかを判定する
 */
export async function hasEtypingScore({
  userData,
  fetchRankingByPage,
  pageCount,
}: HasEtypingScoreInput): Promise<boolean> {
  const page = await findPageByScore({
    score: userData.score,
    fetchRankingByPage,
    pageCount,
  });
  if (page === pageCount + 1) {
    // ランキングにあるスコアの最小値より小さい値を指定した場合
    return false;
  }

  const entries = await fetchRankingByPage(page);
  if (userDataExists(userData, entries)) return true;

  // ユーザーのスコアが対象のページのスコア最小値と同じ場合、次のページにある可能性もあるので探す
  const minScore = Math.min(...entries.map((entry) => entry.score));
  if (userData.score === minScore && page < pageCount) {
    const entries = await fetchRankingByPage(page + 1);
    if (userDataExists(userData, entries)) return true;
  }

  return false;
}
