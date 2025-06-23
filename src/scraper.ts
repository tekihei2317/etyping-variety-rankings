import puppeteer, { Browser, Page } from "puppeteer";
import { load } from "cheerio";
import { writeFileSync } from "fs";
import { RankingData, RankingEntry, VARIETY_CATEGORIES } from "./types.js";

/**
 * HTMLからランキングデータを解析
 */
function parseRankingHtml(categoryId: string, html: string): RankingData {
  const $ = load(html);
  const entries: RankingEntry[] = [];

  // ul.ranking内のli要素を処理
  $("ul.ranking li").each((index, element) => {
    const $li = $(element);

    // ヘッダー行はスキップ
    if ($li.hasClass("head")) return;

    const rankText = $li.find(".rank").text().trim();
    const username = $li.find(".user").text().trim();
    const scoreText = $li.find(".score").text().trim();

    if (rankText && username && scoreText) {
      // ランクから数字を抽出（"1位" -> 1）
      const rankNumber = parseInt(rankText.replace(/[^\d]/g, ""));
      // スコアから数字を抽出
      const score = parseInt(scoreText.replace(/[^\d]/g, ""));

      if (!isNaN(rankNumber) && !isNaN(score)) {
        entries.push({
          rank: rankNumber,
          username: username,
          score: score,
        });
      }
    }
  });

  console.log(`Parsed ${entries.length} ranking entries for ${categoryId}`);

  return {
    category: categoryId,
    entries: entries,
    fetchedAt: new Date(),
  };
}

/**
 * 指定ページのランキングデータを取得
 */
async function scrapeSinglePage(
  page: Page,
  categoryId: string,
  pageNumber: number
): Promise<RankingEntry[]> {
  if (pageNumber > 1) {
    // 2ページ目以降の場合、ps_page_move()を実行
    await page.evaluate((pageNum) => {
      (window as any).ps_page_move(pageNum);
    }, pageNumber);

    // ページ遷移を待つ
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const content = await page.content();
  const result = parseRankingHtml(categoryId, content);
  return result.entries;
}

/**
 * 全ページのランキングデータを取得
 */
async function scrapeAllPages(
  browser: Browser,
  categoryId: string,
  rankingUrl: string
): Promise<RankingData> {
  const startTime = Date.now();
  console.log(`Fetching all ranking data from: ${rankingUrl}`);

  const page = await browser.newPage();
  try {
    const gotoStartTime = Date.now();
    await page.goto(rankingUrl, { waitUntil: "domcontentloaded" });
    console.log(`Ranking page loaded in ${Date.now() - gotoStartTime}ms`);

    // JavaScriptが実行されるまで少し待つ
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // 最大ページ数を取得
    const maxPages = await page.evaluate(() => {
      return (window as any).ps_page_max || 1;
    });

    console.log(`Found ${maxPages} pages to scrape`);

    const allEntries: RankingEntry[] = [];

    // 各ページを順次取得
    for (let pageNum = 1; pageNum <= maxPages; pageNum++) {
      console.log(`Scraping page ${pageNum}/${maxPages}...`);
      const pageStartTime = Date.now();

      const entries = await scrapeSinglePage(page, categoryId, pageNum);
      allEntries.push(...entries);

      console.log(
        `Page ${pageNum} completed in ${Date.now() - pageStartTime}ms (${
          entries.length
        } entries)`
      );
    }

    console.log(`Total entries collected: ${allEntries.length}`);

    return {
      category: categoryId,
      entries: allEntries,
      fetchedAt: new Date(),
      totalPages: maxPages,
    };
  } catch (error) {
    console.error(`Error scraping ranking for ${categoryId}:`, error);
    return {
      category: categoryId,
      entries: [],
      fetchedAt: new Date(),
    };
  } finally {
    await page.close();
    console.log(`scrapeAllPages completed in ${Date.now() - startTime}ms`);
  }
}

/**
 * 指定されたカテゴリのランキングURLを生成
 */
function generateRankingUrl(categoryId: string): string {
  return `https://www.e-typing.ne.jp/ranking/index.asp?im=0&sc=variety&ct=${categoryId}`;
}

/**
 * 指定されたカテゴリのランキングを取得
 */
async function scrapeCategoryRanking(
  browser: Browser,
  categoryId: string
): Promise<RankingData> {
  const rankingUrl = generateRankingUrl(categoryId);
  return await scrapeAllPages(browser, categoryId, rankingUrl);
}

/**
 * 全種目のランキングを取得
 */
async function scrapeAllCategories(browser: Browser): Promise<RankingData[]> {
  const allResults: RankingData[] = [];

  console.log(`Starting to scrape ${VARIETY_CATEGORIES.length} categories...`);

  for (const category of VARIETY_CATEGORIES) {
    console.log(`\n=== Scraping ${category.name} (${category.id}) ===`);
    const categoryStartTime = Date.now();

    try {
      const result = await scrapeCategoryRanking(browser, category.id);
      allResults.push(result);

      console.log(
        `✅ ${category.name} completed in ${Date.now() - categoryStartTime}ms`
      );
      console.log(
        `   - ${result.entries.length} entries across ${
          result.totalPages || 1
        } pages`
      );

      // カテゴリ間で少し待機（e-typingサーバーに負荷をかけすぎないため）
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(`❌ Error scraping ${category.name}:`, error);
      // エラーが発生しても他のカテゴリの処理を続行
      allResults.push({
        category: category.id,
        entries: [],
        fetchedAt: new Date(),
      });
    }
  }

  console.log(`\n🎉 All categories completed!`);
  console.log(
    `Total entries collected: ${allResults.reduce(
      (sum, result) => sum + result.entries.length,
      0
    )}`
  );

  return allResults;
}

// メイン実行部分
async function main() {
  const totalStartTime = Date.now();
  console.log("Starting e-typing ranking scraper...");

  const browserStartTime = Date.now();
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  console.log(`Browser launched in ${Date.now() - browserStartTime}ms`);

  try {
    // 全種目のランキングを取得
    const scrapeStartTime = Date.now();
    const allRankings = await scrapeAllCategories(browser);
    console.log(`All rankings scraped in ${Date.now() - scrapeStartTime}ms`);

    // 各カテゴリごとにJSONファイルに保存
    const today = new Date().toISOString().split("T")[0];
    allRankings.forEach((ranking) => {
      const filename = `data/${ranking.category}-ranking-${today}.json`;
      writeFileSync(filename, JSON.stringify(ranking, null, 2));
      console.log(
        `${ranking.category} data saved to: ${filename} (${ranking.entries.length} entries)`
      );
    });

    // 統計情報を表示
    console.log("\n📊 Summary:");
    allRankings.forEach((ranking) => {
      const categoryInfo = VARIETY_CATEGORIES.find(
        (cat) => cat.id === ranking.category
      );
      const categoryName = categoryInfo?.name || ranking.category;
      console.log(`${categoryName}: ${ranking.entries.length} entries`);
    });
  } catch (error) {
    console.error("Error:", error);
  } finally {
    const closeStartTime = Date.now();
    await browser.close();
    console.log(`Browser closed in ${Date.now() - closeStartTime}ms`);
    console.log(`Total execution time: ${Date.now() - totalStartTime}ms`);
  }
}

// スクリプトが直接実行された場合のみmainを実行
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
