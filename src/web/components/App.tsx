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

  // 初回ローディング時のみページ全体のローディングを表示
  if (loading && ranking.length === 0) {
    return <p>読み込み中...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-5 text-left">
      {/* 更新情報 */}
      <div className="bg-gray-50 rounded-lg p-4 text-sm mb-5">
        <div className="flex flex-wrap items-center gap-4 text-gray-600">
          <span>📅 最終更新: 2025年6月23日</span>
          <span>🔄 更新頻度: 週1回（日曜日）</span>
          <span>
            <Link
              to="/register"
              className="text-primary-600 hover:text-primary-700 hover:underline ml-1"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
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
          <div className="mt-3 text-sm text-gray-600">
            "{currentSearch}" の検索結果: {totalCount}件
          </div>
        )}
      </div>

      {/* エラー表示 */}
      {error && (
        <div className="text-center my-8">
          <p className="text-red-600 bg-red-50 px-2.5 py-2.5 rounded border border-red-200 mb-4">
            エラー: {error}
          </p>
          <button
            onClick={() =>
              fetchRanking(currentPage, currentSearch || undefined)
            }
            className="px-4 py-2 border border-gray-300 bg-white text-gray-700 cursor-pointer rounded transition-colors duration-200 hover:bg-gray-50"
          >
            再読み込み
          </button>
        </div>
      )}

      {/* ランキング表示エリア */}
      {!error && (
        <>
          <div className="my-5 px-2.5 py-2.5 bg-gray-100 rounded text-sm">
            <p>
              全 {totalCount} 名のユーザー | ページ {currentPage} / {totalPages}
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-gray-600">
                  読み込み中...
                </span>
              </div>
            </div>
          ) : (
            <table className="w-full border-collapse my-5 text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left border-b border-gray-300 bg-gray-100 font-semibold sticky top-0 z-10">
                    順位
                  </th>
                  <th className="px-4 py-3 text-left border-b border-gray-300 bg-gray-100 font-semibold sticky top-0 z-10">
                    ユーザー名
                  </th>
                  <th className="px-4 py-3 text-left border-b border-gray-300 bg-gray-100 font-semibold sticky top-0 z-10">
                    合計スコア
                  </th>
                  <th className="px-4 py-3 text-left border-b border-gray-300 bg-gray-100 font-semibold sticky top-0 z-10">
                    参加種目数
                  </th>
                </tr>
              </thead>
              <tbody>
                {ranking.map((entry, index) => {
                  return (
                    <tr
                      key={entry.username}
                      className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
                    >
                      <td className="px-4 py-3 border-b border-gray-300 font-semibold text-center w-20">
                        {entry.rank}
                      </td>
                      <td className="px-4 py-3 border-b border-gray-300">
                        <Link
                          to="/user/$username"
                          params={{ username: entry.username }}
                          className="text-primary-600 no-underline font-medium transition-colors duration-200 hover:text-primary-700 hover:underline"
                        >
                          {entry.username}
                        </Link>
                      </td>
                      <td className="px-4 py-3 border-b border-gray-300 text-right">
                        {entry.totalScore.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 border-b border-gray-300 text-right">
                        {entry.categoriesPlayed}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}

          {/* ページネーション */}
          {!loading && (
            <div className="flex justify-center items-center gap-6 my-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className="px-4 py-2 border border-gray-300 bg-white text-gray-700 cursor-pointer rounded transition-colors duration-200 hover:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100"
              >
                前のページ
              </button>

              {/* ページ番号直接入力フォーム */}
              <form
                onSubmit={handlePageJump}
                className="flex items-center gap-2"
              >
                <input
                  type="number"
                  value={pageInput}
                  onChange={(e) => setPageInput(e.target.value)}
                  placeholder={currentPage.toString()}
                  min="1"
                  max={totalPages}
                  className="w-16 px-2 py-1 border border-gray-300 rounded text-center text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <span className="text-sm text-gray-600">
                  / {totalPages}
                </span>
                <button
                  type="submit"
                  className="px-3 py-1 bg-primary-600 text-white text-sm rounded hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  移動
                </button>
              </form>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="px-4 py-2 border border-gray-300 bg-white text-gray-700 cursor-pointer rounded transition-colors duration-200 hover:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100"
              >
                次のページ
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
