import { useState, useEffect } from "react";
import { hc } from "hono/client";
import type { AppType } from "../../workers/index";

const client = hc<AppType>("/");

interface TotalRankingEntry {
  rank: number;
  username: string;
  totalScore: number;
  categoryScores: Record<string, number>;
  categoriesPlayed: number;
}

interface RankingResponse {
  totalRanking: TotalRankingEntry[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    pageSize: number;
  };
  search: string | null;
}

export function useRankingData() {
  const [ranking, setRanking] = useState<TotalRankingEntry[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSearch, setCurrentSearch] = useState<string | null>(null);

  const fetchRanking = async (page: number, search?: string) => {
    try {
      setLoading(true);
      setError(null);

      const queryParams: { page: string; search?: string } = {
        page: page.toString(),
      };

      if (search) {
        queryParams.search = search;
      }

      const response = await client.api.ranking.$get({
        query: queryParams,
      });

      if (response.ok) {
        const data: RankingResponse = await response.json();
        setRanking(data.totalRanking);
        setCurrentPage(data.pagination.currentPage);
        setTotalPages(data.pagination.totalPages);
        setTotalCount(data.pagination.totalCount);
        setCurrentSearch(data.search);
      } else {
        setError("ランキングデータの取得に失敗しました");
      }
    } catch (err) {
      setError("ネットワークエラーが発生しました");
      console.error("Error fetching ranking:", err);
    } finally {
      setLoading(false);
    }
  };

  // 初回読み込み
  useEffect(() => {
    fetchRanking(1);
  }, []);

  return {
    ranking,
    currentPage,
    totalPages,
    totalCount,
    loading,
    error,
    currentSearch,
    fetchRanking,
  };
}