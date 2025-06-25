import { Link } from "@tanstack/react-router";
import { useRankingData } from "../hooks/useRankingData";
import { useRankingNavigation } from "../hooks/useRankingNavigation";
import { ScoreUpdates } from "./ScoreUpdates";
import { useState } from "react";

function App() {
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const { ranking, totalPages, totalCount, loading, error, fetchRanking } =
    useRankingData({ currentPage, currentSearch });

  const {
    searchQuery,
    setSearchQuery,
    pageInput,
    setPageInput,
    handlePageChange,
    handleSearch,
    handleClearSearch,
    handlePageJump,
  } = useRankingNavigation({ totalPages, setCurrentSearch, setCurrentPage });

  if (loading) {
    return <p>読み込み中...</p>;
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-5 text-left">
        <h1 className="text-3xl font-bold mb-4">
          e-typing バラエティ 総合ランキング
        </h1>
        <p className="text-red-600 bg-red-50 px-2.5 py-2.5 rounded border border-red-200">
          エラー: {error}
        </p>
        <button
          onClick={() => fetchRanking(currentPage, currentSearch || undefined)}
          className="mt-4 px-4 py-2 border border-gray-300 bg-white text-gray-700 cursor-pointer rounded transition-colors duration-200 hover:bg-gray-50"
        >
          再読み込み
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-5 text-left">
      {/* 更新情報 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-sm mb-5">
        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
          <span>📅 最終更新: 2025年6月23日</span>
          <span>🔄 更新頻度: 週1回（日曜日）</span>
          <span>
            <Link
              to="/register"
              className="text-purple-600 hover:text-purple-800 hover:underline dark:text-purple-400 dark:hover:text-purple-300 ml-1"
            >
              スコアを登録する
            </Link>
            （定期更新以外でスコアを更新したい場合）
          </span>
        </div>
      </div>

      {/* スコア更新履歴 */}
      <div className="mb-6">
        <ScoreUpdates />
      </div>

      {/* ユーザー名検索 */}
      <div className="mb-6">
        <form onSubmit={handleSearch} className="flex gap-3 items-center">
          <div className="flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ユーザー名で検索..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
          >
            検索
          </button>
          {currentSearch && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
            >
              クリア
            </button>
          )}
        </form>

        {/* 検索結果表示 */}
        {currentSearch && (
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            "{currentSearch}" の検索結果: {totalCount}件
          </div>
        )}
      </div>

      <div className="my-5 px-2.5 py-2.5 bg-gray-100 rounded text-sm dark:bg-gray-800 dark:text-white">
        <p>
          全 {totalCount} 名のユーザー | ページ {currentPage} / {totalPages}
        </p>
      </div>

      <table className="w-full border-collapse my-5 text-sm">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left border-b border-gray-300 bg-gray-100 font-semibold sticky top-0 z-10 dark:bg-gray-700 dark:text-white dark:border-gray-600">
              順位
            </th>
            <th className="px-4 py-3 text-left border-b border-gray-300 bg-gray-100 font-semibold sticky top-0 z-10 dark:bg-gray-700 dark:text-white dark:border-gray-600">
              ユーザー名
            </th>
            <th className="px-4 py-3 text-left border-b border-gray-300 bg-gray-100 font-semibold sticky top-0 z-10 dark:bg-gray-700 dark:text-white dark:border-gray-600">
              合計スコア
            </th>
            <th className="px-4 py-3 text-left border-b border-gray-300 bg-gray-100 font-semibold sticky top-0 z-10 dark:bg-gray-700 dark:text-white dark:border-gray-600">
              参加種目数
            </th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((entry, index) => {
            return (
              <tr
                key={entry.username}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 dark:${index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"} dark:hover:bg-gray-700`}
              >
                <td className="px-4 py-3 border-b border-gray-300 font-semibold text-center w-20 dark:border-gray-600">
                  {entry.rank}
                </td>
                <td className="px-4 py-3 border-b border-gray-300 dark:border-gray-600">
                  <Link
                    to="/user/$username"
                    params={{ username: entry.username }}
                    className="text-purple-600 no-underline font-medium transition-colors duration-200 hover:text-purple-800 hover:underline dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    {entry.username}
                  </Link>
                </td>
                <td className="px-4 py-3 border-b border-gray-300 text-right dark:border-gray-600">
                  {entry.totalScore.toLocaleString()}
                </td>
                <td className="px-4 py-3 border-b border-gray-300 text-right dark:border-gray-600">
                  {entry.categoriesPlayed}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* ページネーション */}
      <div className="flex justify-center items-center gap-6 my-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="px-4 py-2 border border-gray-300 bg-white text-gray-700 cursor-pointer rounded transition-colors duration-200 hover:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:disabled:bg-gray-700 dark:disabled:text-gray-500"
        >
          前のページ
        </button>

        {/* ページ番号直接入力フォーム */}
        <form onSubmit={handlePageJump} className="flex items-center gap-2">
          <input
            type="number"
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value)}
            placeholder={currentPage.toString()}
            min="1"
            max={totalPages}
            className="w-16 px-2 py-1 border border-gray-300 rounded text-center text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            / {totalPages}
          </span>
          <button
            type="submit"
            className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
          >
            移動
          </button>
        </form>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="px-4 py-2 border border-gray-300 bg-white text-gray-700 cursor-pointer rounded transition-colors duration-200 hover:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:disabled:bg-gray-700 dark:disabled:text-gray-500"
        >
          次のページ
        </button>
      </div>
    </div>
  );
}

export default App;
