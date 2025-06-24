import { Hono } from "hono";
import { rankings } from "../data/ranking";
import { calculateTotalScoreRanking, calculateTotalScoreRankingFromDB } from "./ranking";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

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
});

const apiApp = new Hono<{ Bindings: Env }>()
  .get("/ranking", zValidator("query", rankingQuery), async (c) => {
    const { page } = c.req.valid("query");
    const pageSize = 50;

    try {
      const totalRanking = await calculateTotalScoreRankingFromDB(c.env.DB);
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
  });

const app = new Hono().route("/api", apiApp);
export type AppType = typeof app;

export default app;
