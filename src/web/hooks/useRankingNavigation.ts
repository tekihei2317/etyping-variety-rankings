import { useState } from "react";

type UseRankingNavigationInput = {
  totalPages: number;
  setCurrentPage: (page: number) => void;
  setCurrentSearch: (search: string) => void;
};

export function useRankingNavigation({
  totalPages,
  setCurrentPage,
  setCurrentSearch,
}: UseRankingNavigationInput) {
  const [searchQuery, setSearchQuery] = useState("");
  const [pageInput, setPageInput] = useState("");

  // ページ変更
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // 検索ハンドラー
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      setCurrentSearch(trimmedQuery);
      setCurrentPage(1);
    } else {
      // 空の検索 = 検索クリア
      setCurrentSearch("");
      setCurrentPage(1);
    }
  };

  // 検索クリアハンドラー
  const handleClearSearch = () => {
    setSearchQuery("");
    setCurrentSearch("");
    setCurrentPage(1);
  };

  // ページジャンプハンドラー
  const handlePageJump = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNumber = parseInt(pageInput);
    if (!isNaN(pageNumber)) {
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
