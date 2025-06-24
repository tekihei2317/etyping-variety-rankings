import { useState, useEffect } from "react";
import { hc } from "hono/client";
import { Link } from "@tanstack/react-router";
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
}

function App() {
  const [ranking, setRanking] = useState<TotalRankingEntry[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ランキングデータを取得
  const fetchRanking = async (page: number) => {
    try {
      setLoading(true);
      setError(null);

      const response = await client.api.ranking.$get({
        query: {
          page: page.toString(),
        },
      });

      if (response.ok) {
        const data: RankingResponse = await response.json();
        setRanking(data.totalRanking);
        setCurrentPage(data.pagination.currentPage);
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

  // 初回読み込み
  useEffect(() => {
    fetchRanking(1);
  }, []);

  // ページ変更
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      fetchRanking(page);
    }
  };

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
          onClick={() => fetchRanking(currentPage)}
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
      <div className="flex justify-center items-center gap-5 my-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="px-4 py-2 border border-gray-300 bg-white text-gray-700 cursor-pointer rounded transition-colors duration-200 hover:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:disabled:bg-gray-700 dark:disabled:text-gray-500"
        >
          前のページ
        </button>

        <span className="font-medium min-w-20 text-center">
          {currentPage} / {totalPages}
        </span>

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
