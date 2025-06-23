import { Hono } from "hono";
import { rankings } from "../data/ranking";
import { calculateTotalScoreRanking } from "./ranking";

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

const apiApp = new Hono<{ Bindings: Env }>()
  .get("/ranking", (c) => {
    const totalRanking = calculateTotalScoreRanking(rankings);
    return c.json({ totalRanking: totalRanking.slice(0, 200) });
  })
  .get("/categories", (c) => {
    return c.json({ categories });
  });

const app = new Hono().route("/api", apiApp);
export type AppType = typeof app;

export default app;
