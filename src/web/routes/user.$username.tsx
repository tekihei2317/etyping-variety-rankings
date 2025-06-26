import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { apiClient } from "../libs/api-client";
import { getCategoryUrl } from "../utils/categories";
import { ExternalLink } from "../components/ExternalLink";

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
                <ExternalLink
                  href={getCategoryUrl(category.id)}
                  className="text-primary-600 no-underline font-medium transition-colors duration-200 hover:text-primary-700 hover:underline dark:text-primary-400 dark:hover:text-primary-300"
                >
                  {category.name}
                </ExternalLink>
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
