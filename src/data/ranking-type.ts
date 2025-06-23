export interface RankingEntry {
  rank: number;
  username: string;
  score: number;
}

export interface RankingData {
  category: string;
  entries: RankingEntry[];
  fetchedAt: string;
  totalPages?: number;
  currentPage?: number;
}
