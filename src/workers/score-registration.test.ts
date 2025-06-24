import { describe, it, expect } from "vitest";
import {
  hasEtypingScore,
  type RankingEntry,
  type FetchRankingByPage,
} from "./score-registration";

const dummyRankings: RankingEntry[][] = [
  [
    { userName: "a", score: 350 },
    { userName: "b", score: 330 },
    { userName: "c", score: 200 },
  ],
  [
    { userName: "d", score: 200 },
    { userName: "e", score: 150 },
    { userName: "f", score: 120 },
  ],
  [
    { userName: "g", score: 100 },
    { userName: "h", score: 100 },
    { userName: "i", score: 90 },
  ],
  [
    { userName: "j", score: 90 },
    { userName: "k", score: 90 },
    { userName: "l", score: 80 },
  ],
  [
    { userName: "n", score: 70 },
    { userName: "m", score: 60 },
    { userName: "o", score: 60 },
  ],
];
const pageNum = dummyRankings.length;

const fetchRankingByPageDummy: FetchRankingByPage = async (page: number) => {
  if (page <= 0 || pageNum < page) {
    throw new Error(`ページが範囲外です: ${page}`);
  }
  return dummyRankings[page - 1];
};

type UserData = { userName: string; score: number };

describe("hasEtypingScore", () => {
  it("ユーザーのスコアがe-typingに存在する場合はtrueを返す", async () => {
    const userData: UserData = { userName: "b", score: 330 };
    const result = await hasEtypingScore({
      userData,
      fetchRankingByPage: fetchRankingByPageDummy,
      pageNum,
    });

    expect(result).toBe(true);
  });

  it("同じスコアでも違うユーザー名の場合はfalseを返す", async () => {
    const userData: UserData = { userName: "differentUser", score: 330 };
    const result = await hasEtypingScore({
      userData,
      fetchRankingByPage: fetchRankingByPageDummy,
      pageNum,
    });

    expect(result).toBe(false);
  });

  it("スコアがランキングの最小値より小さい場合はfalseを返す", async () => {
    const userData: UserData = { userName: "testUser", score: 50 }; // 最小値60より小さい
    const result = await hasEtypingScore({
      userData,
      fetchRankingByPage: fetchRankingByPageDummy,
      pageNum,
    });

    expect(result).toBe(false);
  });

  it("スコアがランキングの最大値より大きい場合はfalseを返す", async () => {
    const userData: UserData = { userName: "testUser", score: 400 }; // 最小値350より大きい
    const result = await hasEtypingScore({
      userData,
      fetchRankingByPage: fetchRankingByPageDummy,
      pageNum,
    });

    expect(result).toBe(false);
  });

  it("同じスコアがページを跨いでいる場合、最初のページのデータが見つかること", async () => {
    const userData: UserData = { userName: "c", score: 200 };
    const result = await hasEtypingScore({
      userData,
      fetchRankingByPage: fetchRankingByPageDummy,
      pageNum,
    });

    const userData2: UserData = { userName: "i", score: 90 };
    const result2 = await hasEtypingScore({
      userData: userData2,
      fetchRankingByPage: fetchRankingByPageDummy,
      pageNum,
    });

    expect(result).toBe(true);
    expect(result2).toBe(true);
  });

  it("同じスコアがページを跨いでいる場合、次のページのデータが見つかること", async () => {
    const userData: UserData = { userName: "d", score: 200 };
    const result = await hasEtypingScore({
      userData,
      fetchRankingByPage: fetchRankingByPageDummy,
      pageNum,
    });

    const userData2: UserData = { userName: "j", score: 90 };
    const userData3: UserData = { userName: "k", score: 90 };

    const result2 = await hasEtypingScore({
      userData: userData2,
      fetchRankingByPage: fetchRankingByPageDummy,
      pageNum,
    });
    const result3 = await hasEtypingScore({
      userData: userData3,
      fetchRankingByPage: fetchRankingByPageDummy,
      pageNum,
    });

    expect(result).toBe(true);
    expect(result2).toBe(true);
    expect(result3).toBe(true);
  });
});
