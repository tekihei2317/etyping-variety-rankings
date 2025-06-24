import {
  hasEtypingScore,
  type FetchRankingByPage,
  type RankingEntry,
} from "./score-registration";
import { CATEGORY_URLS } from "./scraping";
import { getBrowser } from "./browser-session";
import { Page } from "@cloudflare/puppeteer";

/**
 * HTMLからランキングデータを解析（Puppeteerのpage.evaluate内で使用）
 */
function parseRankingData(): RankingEntry[] {
  const rankingEntries: RankingEntry[] = [];

  // ul.ranking内のli要素を探す
  const rankingList = document.querySelector("ul.ranking");
  if (rankingList) {
    const listItems = rankingList.querySelectorAll("li");

    listItems.forEach((li) => {
      // ヘッダー行はスキップ
      if (li.classList.contains("head")) return;

      const rankElement = li.querySelector(".rank");
      const userElement = li.querySelector(".user");
      const scoreElement = li.querySelector(".score");

      if (rankElement && userElement && scoreElement) {
        const rankText = rankElement.textContent?.trim() || "";
        const userName = userElement.textContent?.trim() || "";
        const scoreText = scoreElement.textContent?.trim() || "";

        // ランクから数字を抽出（"1位" -> 1）
        const rankMatch = rankText.match(/(\d+)位/);
        // スコアから数字を抽出
        const scoreMatch = scoreText.match(/(\d+)/);

        if (rankMatch && scoreMatch && userName) {
          const rank = parseInt(rankMatch[1]);
          const score = parseInt(scoreMatch[1]);

          if (!isNaN(rank) && !isNaN(score)) {
            rankingEntries.push({ userName, score });
          }
        }
      }
    });
  }

  return rankingEntries;
}

/**
 * 特定の種目のランキングデータを取得する関数を作成する
 */
export function createEtypingFetcher({
  browserPage,
}: {
  browserPage: Page;
  categoryId: string;
}): FetchRankingByPage {
  return async (page: number): Promise<RankingEntry[]> => {
    // 指定したページに移動してから、ランキングを返す
    console.log(`Moving to page ${page}`);

    const currentPage = await browserPage.evaluate(
      () => (window as any).ps_page_target
    );

    if (page !== currentPage) {
      await browserPage.evaluate((pageNum) => {
        (window as any).ps_page_move(pageNum);
      }, page);

      // ランキングリストが表示されるまで待機
      console.log("Waiting for page transition...");
      await browserPage.waitForFunction(
        () => {
          return document.querySelector("ul.ranking li:not(.head)") !== null;
        },
        { timeout: 3000 }
      );
      console.log("Page transition completed");
    }

    const rankings = await browserPage.evaluate(parseRankingData);
    console.log(`Fetched rankings with ${rankings.length} entries.`);
    console.log("------------------------------");
    return rankings;
  };
}

/**
 * e-typingのランキングの中に、ユーザーデータが存在するか確認する
 */
export async function checkIfScoreExistsInEtyping({
  browser,
  categoryId,
  userData,
}: {
  browser: Fetcher;
  categoryId: string;
  userData: { userName: string; score: number };
}): Promise<boolean> {
  const puppeteerBrowser = await getBrowser(browser);

  // ページを作成する
  console.log("Creating new page...");
  const page = await puppeteerBrowser.newPage();
  console.log("Page created successfully");

  // e-typingページに移動
  console.log("Navigating to e-typing page...");
  const baseUrl = CATEGORY_URLS[categoryId];
  await page.goto(baseUrl, {
    waitUntil: "domcontentloaded",
  });
  console.log("Navigation completed");

  // JavaScriptが実行されるまで待つ
  console.log("Waiting for JavaScript to load...");
  await page.waitForFunction(
    () => {
      return (
        typeof (window as any).ps_page_max !== "undefined" &&
        typeof (window as any).ps_page_move === "function"
      );
    },
    { timeout: 5000 }
  );
  console.log("JavaScript functions are now available");

  // ページ数を取得する
  const pageCount = await page.evaluate(() => (window as any).ps_page_max);
  console.log(`${pageCount} pages found`);

  // ユーザーデータがランキングに存在するか確かめる
  const fetchRankingByPage = createEtypingFetcher({
    browserPage: page,
    categoryId,
  });

  const found = await hasEtypingScore({
    userData,
    fetchRankingByPage,
    pageCount,
  });

  // 接続を切る
  puppeteerBrowser.disconnect();

  return found;
}
