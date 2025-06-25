import { useScoreUpdates } from "../hooks/useScoreUpdates";

interface ScoreUpdate {
  username: string;
  category: string;
  previous_score: number | null;
  new_score: number;
  update_type: "new_record" | "score_update";
  created_at: string;
}

function ScoreUpdateItem({ update }: { update: ScoreUpdate }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffMs / (1000 * 60));

    if (diffMinutes < 60) {
      return `${diffMinutes}分前`;
    } else if (diffHours < 24) {
      return `${diffHours}時間前`;
    } else {
      return date.toLocaleDateString("ja-JP", {
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  };

  const getMessage = () => {
    if (update.update_type === "new_record") {
      return (
        <>
          <span className="font-medium text-purple-600 dark:text-purple-400">
            {update.username}
          </span>
          さん{" "}
          <span className="font-medium text-gray-900 dark:text-white">
            {update.category}
          </span>
          で{" "}
          <span className="font-bold text-green-600 dark:text-green-400">
            スコア{update.new_score}を記録しました！
          </span>
        </>
      );
    } else {
      return (
        <>
          <span className="font-medium text-purple-600 dark:text-purple-400">
            {update.username}
          </span>
          さん{" "}
          <span className="font-medium text-gray-900 dark:text-white">
            {update.category}
          </span>
          で{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            スコアを{update.previous_score}→{update.new_score}に更新しました！
          </span>
        </>
      );
    }
  };

  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
      <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-800 dark:text-gray-200">
          {getMessage()}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {formatDate(update.created_at)}
        </p>
      </div>
    </div>
  );
}

export function ScoreUpdates() {
  const { updates, loading, error } = useScoreUpdates(15);

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          最新の記録更新
        </h2>
        <div className="flex items-center justify-center py-8">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            読み込み中...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          最新の記録更新
        </h2>
        <div className="text-sm text-red-600 dark:text-red-400 text-center py-4">
          {error}
        </div>
      </div>
    );
  }

  if (updates.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          最新の記録更新
        </h2>
        <div className="text-sm text-gray-500 dark:text-gray-400 text-center py-8">
          まだ記録更新がありません
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        最新の記録更新
      </h2>
      <div className="space-y-0">
        {updates.map((update, index) => (
          <ScoreUpdateItem
            key={`${update.username}-${update.created_at}-${index}`}
            update={update}
          />
        ))}
      </div>
    </div>
  );
}
