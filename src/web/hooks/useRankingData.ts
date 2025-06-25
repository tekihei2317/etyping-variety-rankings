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
    totalPages: number;
    totalCount: number;
    pageSize: number;
  };
}

type UseRankingDataInput = {
  currentPage: number;
  currentSearch: string;
};

export function useRankingData({
  currentPage,
  currentSearch,
}: UseRankingDataInput) {
  const [ranking, setRanking] = useState<TotalRankingEntry[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRanking = async (page: number, search?: string) => {
    try {
      setLoading(true);
      setError(null);

      const queryParams: { page: string; search?: string } = {
        page: page.toString(),
      };

      if (search && search.trim()) {
        queryParams.search = search;
      }

      const response = await client.api.ranking.$get({
        query: queryParams,
      });

      if (response.ok) {
        const data: RankingResponse = await response.json();
        setRanking(data.totalRanking);
        setTotalPages(data.pagination.totalPages);
        setTotalCount(data.pagination.totalCount);
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

  useEffect(() => {
    fetchRanking(currentPage, currentSearch || undefined);
  }, [currentPage, currentSearch]);

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
