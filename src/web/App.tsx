import { useState, useEffect } from "react";
import { hc } from "hono/client";
import type { AppType } from "../workers/index";
import "./App.css";

const client = hc<AppType>("http://localhost:5174");

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
    return (
      <div className="container">
        <h1>e-typing バラエティ ランキング</h1>
        <p>読み込み中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <h1>e-typing バラエティ 総合ランキング</h1>
        <p className="error">エラー: {error}</p>
        <button onClick={() => fetchRanking(currentPage)}>再読み込み</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>e-typing バラエティ 総合ランキング</h1>
      <p>バラエティ全13種目の合計スコアランキング</p>

      <div className="ranking-info">
        <p>全 {totalCount} 名のユーザー | ページ {currentPage} / {totalPages}</p>
      </div>

      <table className="ranking-table">
        <thead>
          <tr>
            <th>順位</th>
            <th>ユーザー名</th>
            <th>合計スコア</th>
            <th>参加種目数</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((entry) => {
            return (
              <tr key={entry.username}>
                <td>{entry.rank}</td>
                <td>{entry.username}</td>
                <td>{entry.totalScore.toLocaleString()}</td>
                <td>{entry.categoriesPlayed}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* ページネーション */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          前のページ
        </button>

        <span className="page-info">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          次のページ
        </button>
      </div>

      <div className="footer">
        <p>
          データ取得元:{" "}
          <a
            href="https://www.e-typing.ne.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            e-typing
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
