import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { apiClient } from "../libs/api-client";

// e-typingバラエティの種目一覧
const categories = [
  { id: "business", name: "ビジネス" },
  { id: "study", name: "スタディ" },
  { id: "life", name: "ライフ" },
  { id: "travel", name: "トラベル" },
  { id: "sports", name: "スポーツ" },
  { id: "what", name: "なんだろな？" },
  { id: "brain", name: "脳トレ" },
  { id: "dialect", name: "方言" },
  { id: "long", name: "長文" },
  { id: "tenkey", name: "テンキー" },
  { id: "hyakunin", name: "百人一首" },
  { id: "siritori", name: "しりとり" },
  { id: "medical", name: "医療介護" },
];

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [username, setUsername] = useState("");
  const [score, setScore] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCategory || !username || !score) {
      setMessage("すべての項目を入力してください");
      return;
    }

    const scoreNum = parseInt(score);
    if (isNaN(scoreNum) || scoreNum <= 0) {
      setMessage("スコアは正の整数を入力してください");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await apiClient.api["register-score"].$post({
        json: {
          categoryId: selectedCategory,
          username: username,
          score: scoreNum,
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setMessage(`✅ ${result.message} ユーザーページに移動します...`);
        setIsRedirecting(true);

        // 2秒後にユーザーページに遷移
        setTimeout(() => {
          navigate({
            to: "/user/$username",
            params: { username: encodeURIComponent(username) },
          });
        }, 2000);
      } else {
        // 400エラーなどのAPIエラーの場合
        setMessage(`❌ ${result.message || "登録に失敗しました"}`);
      }
    } catch (error) {
      console.error("Score registration error:", error);
      // ネットワークエラーやその他の予期しないエラー
      setMessage(
        "❌ サーバーエラーが発生しました。しばらく時間をおいてから再度お試しください。"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-5 text-left">
      <div className="mt-2 mb-6 px-4 py-4 bg-primary-50 rounded border border-primary-200">
        <h2 className="text-lg font-semibold mb-2">スコア登録について</h2>
        <ul className="text-sm space-y-1">
          <li>• e-typingのランキングに登録されているスコアのみ登録できます</li>
          <li>• ユーザー名とスコアが完全に一致する必要があります</li>
          <li>• 同じスコアが既に登録済みの場合は更新されません</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-2">
            種目 <span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          >
            <option value="">種目を選択してください</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="username" className="block text-sm font-medium mb-2">
            e-typing登録名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="e-typingで使用している登録名を入力"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="score" className="block text-sm font-medium mb-2">
            スコア <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="獲得したスコアを入力"
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>

        {message && (
          <div
            className={`px-4 py-3 rounded-md ${
              message.includes("❌") ||
              message.includes("エラー") ||
              message.includes("入力してください")
                ? "bg-red-50 text-red-700 border border-red-200"
                : "bg-green-50 text-green-700 border border-green-200"
            }`}
          >
            {message}
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={isLoading || isRedirecting}
            className="w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>e-typingで確認中...</span>
              </div>
            ) : isRedirecting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>ユーザーページに移動中...</span>
              </div>
            ) : (
              "スコアを登録"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
