import { useState, useEffect } from "react";
import { hc } from "hono/client";
import type { AppType } from "../../workers/index";
import type { ScoreUpdate } from "../types/score-updates";

const client = hc<AppType>("/");

export function useScoreUpdates(limit: number = 20) {
  const [updates, setUpdates] = useState<ScoreUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUpdates = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await client.api["score-updates"].$get({
        query: { limit: limit.toString() },
      });

      if (response.ok) {
        const data = await response.json();
        setUpdates(data.updates);
      } else {
        setError("更新履歴の取得に失敗しました");
      }
    } catch (err) {
      setError("ネットワークエラーが発生しました");
      console.error("Error fetching score updates:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUpdates();
  }, [limit]);

  return {
    updates,
    loading,
    error,
    refetch: fetchUpdates,
  };
}
