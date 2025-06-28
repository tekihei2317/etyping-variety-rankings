import { Hono } from "hono";
import { rankings } from "../data/ranking";
import {
  calculateTotalScoreRanking,
  calculateTotalScoreRankingFromDB,
} from "./ranking";
import { getUserDetails, userParamSchema } from "./user";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { registerUserScore } from "./register";

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

const rankingQuery = z.object({
  page: z
    .string()
    .transform((val) => parseInt(val))
    .pipe(z.number().min(1))
    .optional()
    .default("1"),
  search: z.string().optional(),
});

const scoreRegistrationSchema = z.object({
  categoryId: z
    .string()
    .refine((val) => categories.some((cat) => cat.id === val), {
      message: "Invalid category ID",
    }),
  pageNumber: z.number().min(1, "Page number must be a positive number"),
  username: z.string().min(1, "Username is required"),
  score: z.number().min(1, "Score must be a positive number"),
});

const scoreUpdatesQuery = z.object({
  limit: z
    .string()
    .transform((val) => parseInt(val))
    .pipe(z.number().min(1).max(50))
    .optional()
    .default("20"),
});

interface ScoreUpdate {
  username: string;
  category: string;
  previous_score: number | null;
  new_score: number;
  update_type: "new_record" | "score_update";
  created_at: string;
}

const apiApp = new Hono<{ Bindings: Env }>()
  .get("/ranking", zValidator("query", rankingQuery), async (c) => {
    const { page, search } = c.req.valid("query");
    const pageSize = 50;

    try {
      const totalRanking = await calculateTotalScoreRankingFromDB(c.env.DB);

      // ユーザー名検索フィルタリング
      let filteredRanking = totalRanking;
      if (search) {
        const searchLower = search.toLowerCase();
        filteredRanking = totalRanking.filter((entry) =>
          entry.username.toLowerCase().includes(searchLower)
        );
      }

      const totalCount = filteredRanking.length;
      const totalPages = Math.ceil(totalCount / pageSize);

      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const pageData = filteredRanking.slice(startIndex, endIndex);

      return c.json({
        totalRanking: pageData,
        pagination: {
          currentPage: page,
          totalPages,
          totalCount,
          pageSize,
        },
        search: search || null,
      });
    } catch (error) {
      console.error("Error fetching ranking data:", error);
      return c.json({ error: "Failed to fetch ranking data" }, 500);
    }
  })
  .get("/ranking/legacy", zValidator("query", rankingQuery), (c) => {
    const { page } = c.req.valid("query");
    const pageSize = 50;

    const totalRanking = calculateTotalScoreRanking(rankings);
    const totalCount = totalRanking.length;
    const totalPages = Math.ceil(totalCount / pageSize);

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageData = totalRanking.slice(startIndex, endIndex);

    return c.json({
      totalRanking: pageData,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        pageSize,
      },
    });
  })
  .get("/categories", (c) => {
    return c.json({ categories });
  })
  .get("/user/:username", zValidator("param", userParamSchema), async (c) => {
    const { username } = c.req.valid("param");
    const decodedUsername = decodeURIComponent(username);

    try {
      const userDetails = await getUserDetails(c.env.DB, decodedUsername);
      return c.json(userDetails);
    } catch (error) {
      console.error("Error fetching user data:", error);
      return c.json({ error: "Failed to fetch user data" }, 500);
    }
  })
  .get("/register", async (c) => {
    return c.json({ message: "register" });
  })
  .get("/score-updates", zValidator("query", scoreUpdatesQuery), async (c) => {
    const { limit } = c.req.valid("query");

    try {
      const stmt = c.env.DB.prepare(
        `SELECT username, category, previous_score, new_score, update_type, created_at
        FROM score_update_history
        ORDER BY created_at DESC
        LIMIT ?`
      ).bind(limit);

      const results = await stmt.all<ScoreUpdate>();

      return c.json({
        updates: results.results || [],
        count: results.results?.length || 0,
      });
    } catch (error) {
      console.error("Error fetching score updates:", error);
      return c.json({ error: "Failed to fetch score updates" }, 500);
    }
  })
  .post(
    "/register-score",
    zValidator("json", scoreRegistrationSchema),
    async (c) => {
      const { categoryId, username, score, pageNumber } = c.req.valid("json");

      const result = await registerUserScore({
        browser: c.env.MYBROWSER,
        db: c.env.DB,
        categoryId,
        pageNumber,
        userData: { userName: username, score },
      });

      return c.json(result, result.statusCode);
    }
  );

const app = new Hono().route("/api", apiApp);

export type AppType = typeof app;

export default app;
