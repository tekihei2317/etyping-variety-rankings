import {
  hasEtypingScoreInPage,
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
  categoryId,
}: {
  browserPage: Page;
  categoryId: string;
}): FetchRankingByPage {
  return async (page: number): Promise<RankingEntry[]> => {
    console.log(
      `[EtypingFetcher] Moving to page ${page} for category: ${categoryId}`
    );

    const currentPage = await browserPage.evaluate(
      () => (window as any).ps_page_target
    );

    if (page !== currentPage) {
      await browserPage.evaluate((pageNum) => {
        (window as any).ps_page_move(pageNum);
      }, page);

      console.log(
        `[EtypingFetcher] Waiting for page transition from ${currentPage} to ${page}`
      );
      await browserPage.waitForFunction(
        () => {
          return document.querySelector("ul.ranking li:not(.head)") !== null;
        },
        { timeout: 5000 }
      );
      console.log(`[EtypingFetcher] Page transition completed: ${page}`);
    } else {
      console.log(`[EtypingFetcher] Already on target page: ${page}`);
    }

    const rankings = await browserPage.evaluate(parseRankingData);
    console.log(
      `[EtypingFetcher] Fetched ${rankings.length} entries from page ${page} (${categoryId})`
    );
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
  console.log(
    `[EtypingChecker] Starting score existence check for ${userData.userName} (${userData.score}) in ${categoryId}`
  );

  const puppeteerBrowser = await getBrowser(browser);
  const page = await puppeteerBrowser.newPage();
  console.log(
    `[EtypingChecker] Browser page created for category: ${categoryId}`
  );

  const baseUrl = CATEGORY_URLS[categoryId];
  console.log(`[EtypingChecker] Navigating to e-typing page: ${baseUrl}`);
  await page.goto(baseUrl, {
    waitUntil: "domcontentloaded",
  });
  console.log(`[EtypingChecker] Navigation completed for ${categoryId}`);

  console.log(`[EtypingChecker] Waiting for JavaScript functions to load...`);
  await page.waitForFunction(
    () => {
      return (
        typeof (window as any).ps_page_max !== "undefined" &&
        typeof (window as any).ps_page_move === "function"
      );
    },
    { timeout: 5000 }
  );
  console.log(`[EtypingChecker] JavaScript functions loaded successfully`);

  const pageCount = await page.evaluate(() => (window as any).ps_page_max);
  console.log(
    `[EtypingChecker] Found ${pageCount} total pages for ${categoryId}`
  );

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

  console.log(
    `[EtypingChecker] Score existence check completed: ${found ? "FOUND" : "NOT_FOUND"} for ${userData.userName} (${userData.score}) in ${categoryId}`
  );

  puppeteerBrowser.disconnect();
  console.log(`[EtypingChecker] Browser connection closed for ${categoryId}`);

  return found;
}

type RankingCheckResult =
  | {
      type: "page_number_too_large";
      maxPages: number;
    }
  | {
      type: "user_data_does_not_exist";
      pageNumber: number;
    }
  | {
      type: "user_data_found_in_page";
    };

/**
 * ランキングの指定のページに、ユーザーの情報が登録されているかを確認する
 */
export async function checkIfScoreExistsInSpecificPage({
  browser,
  categoryId,
  userData,
  pageNumber,
}: {
  browser: Fetcher;
  categoryId: string;
  userData: { userName: string; score: number };
  pageNumber: number;
}): Promise<RankingCheckResult> {
  console.log(
    `[EtypingPageChecker] Starting specific page check for ${userData.userName} (${userData.score}) on page ${pageNumber} in ${categoryId}`
  );

  const puppeteerBrowser = await getBrowser(browser);
  const page = await puppeteerBrowser.newPage();
  console.log(`[EtypingPageChecker] Browser page created for ${categoryId}`);

  const baseUrl = CATEGORY_URLS[categoryId];
  console.log(`[EtypingPageChecker] Navigating to: ${baseUrl}`);
  await page.goto(baseUrl, {
    waitUntil: "domcontentloaded",
  });

  console.log(
    `[EtypingPageChecker] Waiting for JavaScript functions to load...`
  );
  await page.waitForFunction(
    () => {
      return (
        typeof (window as any).ps_page_max !== "undefined" &&
        typeof (window as any).ps_page_move === "function"
      );
    },
    { timeout: 5000 }
  );

  const pageCount = await page.evaluate(() => (window as any).ps_page_max);
  console.log(
    `[EtypingPageChecker] Total pages available: ${pageCount}, requested page: ${pageNumber}`
  );

  // ページ番号が大きすぎる場合
  if (pageNumber > pageCount) {
    console.log(
      `[EtypingPageChecker] Page number too large: ${pageNumber} > ${pageCount}`
    );
    puppeteerBrowser.disconnect();
    return { type: "page_number_too_large", maxPages: pageCount };
  }

  // ランキングに存在するか確認する
  const fetchRankingByPage = createEtypingFetcher({
    browserPage: page,
    categoryId,
  });
  const found = await hasEtypingScoreInPage({
    userData,
    fetchRankingByPage,
    pageNumber,
  });

  console.log(
    `[EtypingPageChecker] Score check result on page ${pageNumber}: ${found ? "FOUND" : "NOT_FOUND"} for ${userData.userName} (${userData.score})`
  );

  puppeteerBrowser.disconnect();
  console.log(`[EtypingPageChecker] Browser connection closed`);

  if (found) return { type: "user_data_found_in_page" };
  else return { type: "user_data_does_not_exist", pageNumber };
}
