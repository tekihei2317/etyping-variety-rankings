import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { apiClient } from "../libs/api-client";

interface UserCategory {
  id: string;
  name: string;
  score: number | null;
  theme: string | null;
  fetchedAt: string | null;
}

interface UserDetails {
  username: string;
  totalScore: number;
  categoriesPlayed: number;
  categories: UserCategory[];
}

function getCategoryUrl(categoryId: string): string {
  const categoryUrls: Record<string, string> = {
    business: "https://www.e-typing.ne.jp/roma/variety/business.asp",
    study: "https://www.e-typing.ne.jp/roma/variety/study.asp",
    life: "https://www.e-typing.ne.jp/roma/variety/life.asp",
    travel: "https://www.e-typing.ne.jp/roma/variety/travel.asp",
    sports: "https://www.e-typing.ne.jp/roma/variety/sports.asp",
    what: "https://www.e-typing.ne.jp/roma/variety/what.asp",
    brain: "https://www.e-typing.ne.jp/roma/variety/brain.asp",
    dialect: "https://www.e-typing.ne.jp/roma/variety/dialect.asp",
    long: "https://www.e-typing.ne.jp/roma/variety/long.asp",
    tenkey: "https://www.e-typing.ne.jp/roma/variety/tenkey.asp",
    hyakunin: "https://www.e-typing.ne.jp/roma/variety/hyakunin.asp",
    siritori: "https://www.e-typing.ne.jp/roma/variety/siritori.asp",
    medical: "https://www.e-typing.ne.jp/roma/variety/medical.asp",
  };
  return categoryUrls[categoryId] || "https://www.e-typing.ne.jp/";
}

export const Route = createFileRoute("/user/$username")({
  component: RouteComponent,
});

function RouteComponent() {
  const { username } = Route.useParams();
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setLoading(true);
        const encodedUsername = encodeURIComponent(username);
        const response = await apiClient.api.user[":username"].$get({
          param: { username: encodedUsername },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data = await response.json();
        setUserDetails(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [username]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-5 text-left">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-5 text-left">
        <div className="text-red-600 bg-red-50 px-2.5 py-2.5 rounded border border-red-200">
          Error: {error}
        </div>
      </div>
    );
  }

  if (!userDetails) {
    return (
      <div className="max-w-4xl mx-auto px-5 text-left">
        <div className="text-center">User not found</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-5 text-left">
      <div>
        <h1 className="text-2xl font-bold mb-4">
          {userDetails.username} のスコア詳細
        </h1>
        <div className="my-5 px-2.5 py-2.5 bg-gray-100 rounded text-sm flex justify-around text-center dark:bg-gray-800 dark:text-white">
          <div>
            <div className="text-xl font-bold">{userDetails.totalScore}</div>
            <div>総合スコア</div>
          </div>
          <div>
            <div className="text-xl font-bold">
              {userDetails.categoriesPlayed}
            </div>
            <div>プレイ種目数</div>
          </div>
          <div>
            <div className="text-xl font-bold">
              {13 - userDetails.categoriesPlayed}
            </div>
            <div>未プレイ種目数</div>
          </div>
        </div>
      </div>

      <table className="w-full border-collapse my-5 text-sm">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left border-b border-gray-300 bg-gray-100 font-semibold sticky top-0 z-10 dark:bg-gray-700 dark:text-white dark:border-gray-600">
              種目
            </th>
            <th className="px-4 py-3 text-left border-b border-gray-300 bg-gray-100 font-semibold sticky top-0 z-10 dark:bg-gray-700 dark:text-white dark:border-gray-600">
              お題
            </th>
            <th className="px-4 py-3 text-left border-b border-gray-300 bg-gray-100 font-semibold sticky top-0 z-10 dark:bg-gray-700 dark:text-white dark:border-gray-600">
              スコア
            </th>
          </tr>
        </thead>
        <tbody>
          {userDetails.categories.map((category, index) => (
            <tr
              key={category.id}
              className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 dark:${index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"} dark:hover:bg-gray-700`}
            >
              <td className="px-4 py-3 border-b border-gray-300 dark:border-gray-600">
                <a
                  href={getCategoryUrl(category.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 no-underline font-medium transition-colors duration-200 hover:text-purple-800 hover:underline dark:text-purple-400 dark:hover:text-purple-300"
                >
                  {category.name}
                </a>
              </td>
              <td className="px-4 py-3 border-b border-gray-300 dark:border-gray-600">
                {category.theme || "-"}
              </td>
              <td className="px-4 py-3 border-b border-gray-300 text-right dark:border-gray-600">
                {category.score ? (
                  <span className="font-semibold">{category.score}</span>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
