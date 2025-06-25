import { useState } from "react";

interface UseRankingNavigationProps {
  totalPages: number;
  currentSearch: string | null;
  fetchRanking: (page: number, search?: string) => Promise<void>;
}

export function useRankingNavigation({
  totalPages,
  currentSearch,
  fetchRanking,
}: UseRankingNavigationProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [pageInput, setPageInput] = useState("");

  // ページ変更
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      fetchRanking(page, currentSearch || undefined);
    }
  };

  // 検索ハンドラー
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      fetchRanking(1, trimmedQuery);
    } else {
      // 空の検索 = 検索クリア
      fetchRanking(1);
    }
  };

  // 検索クリアハンドラー
  const handleClearSearch = () => {
    setSearchQuery("");
    fetchRanking(1);
  };

  // ページジャンプハンドラー
  const handlePageJump = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNumber = parseInt(pageInput);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      handlePageChange(pageNumber);
      setPageInput(""); // 成功時のみクリア
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    pageInput,
    setPageInput,
    handlePageChange,
    handleSearch,
    handleClearSearch,
    handlePageJump,
  };
}
