import { useScoreUpdates } from "../hooks/useScoreUpdates";
import { Link } from "@tanstack/react-router";
import {
  getCategoryIdFromJapaneseName,
  getCategoryUrl,
} from "../utils/categories";
import type { ScoreUpdate } from "../types/score-updates";
import { ExternalLink } from "./ExternalLink";

function ScoreUpdateItem({ update }: { update: ScoreUpdate }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString + "Z"); // ZでUTCとして明示的に解釈
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
    const categoryId = getCategoryIdFromJapaneseName(update.category);
    const categoryUrl = categoryId ? getCategoryUrl(categoryId) : null;

    const categoryElement = categoryUrl ? (
      <ExternalLink
        href={categoryUrl}
        className="font-medium text-primary-600 hover:text-primary-700 hover:underline transition-colors duration-200"
      >
        {update.category}
      </ExternalLink>
    ) : (
      <span className="font-medium text-gray-700">
        {update.category}
      </span>
    );

    if (update.update_type === "new_record") {
      return (
        <>
          <Link
            to="/user/$username"
            params={{ username: update.username }}
            className="font-medium text-primary-600 hover:text-primary-700 hover:underline transition-colors duration-200"
          >
            {update.username}
          </Link>
          さんが {categoryElement}で{" "}
          <span className="font-bold text-gray-900">
            スコア{update.new_score}を記録しました！
          </span>
        </>
      );
    } else {
      return (
        <>
          <Link
            to="/user/$username"
            params={{ username: update.username }}
            className="font-medium text-primary-600 hover:text-primary-700 hover:underline transition-colors duration-200"
          >
            {update.username}
          </Link>
          さんが {categoryElement}で{" "}
          <span className="font-bold text-gray-700">
            スコアを{update.previous_score}→{update.new_score}に更新しました！
          </span>
        </>
      );
    }
  };

  return (
    <div className="flex items-center gap-3 py-1">
      <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full"></div>
      <div className="flex flex-1 min-w-0">
        <p className="text-sm text-gray-800">
          {getMessage()}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {formatDate(update.created_at)}
        </p>
      </div>
    </div>
  );
}

export function ScoreUpdates() {
  const { updates, loading, error } = useScoreUpdates(15);

  const inner = (() => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-8">
          <div className="text-sm text-gray-500">
            読み込み中...
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-sm text-red-600 text-center py-4">
          {error}
        </div>
      );
    }

    if (updates.length === 0) {
      return (
        <div className="text-sm text-gray-500 text-center py-8">
          まだ記録更新がありません
        </div>
      );
    }

    return (
      <div className="space-y-0">
        {updates.map((update, index) => (
          <ScoreUpdateItem
            key={`${update.username}-${update.created_at}-${index}`}
            update={update}
          />
        ))}
      </div>
    );
  })();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        最新の記録更新
      </h2>
      {inner}
    </div>
  );
}
