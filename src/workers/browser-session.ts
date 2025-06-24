import puppeteer, { Browser } from "@cloudflare/puppeteer";

// Browser Workerのセッションを再利用する
// https://developers.cloudflare.com/browser-rendering/workers-binding-api/reuse-sessions/

/**
 * 利用可能なランダムなセッションIDを取得する
 */
async function getRandomSession(
  browserFetcher: Fetcher
): Promise<string | null> {
  const sessions = await puppeteer.sessions(browserFetcher);
  console.log(`Found ${sessions.length} existing sessions`);

  // ワーカーと接続していないセッションのみをフィルタリング
  const availableSessionIds = sessions
    .filter((v) => {
      return !v.connectionId; // ワーカーと接続しているセッションを除外
    })
    .map((v) => {
      return v.sessionId;
    });

  console.log(`Found ${availableSessionIds.length} available sessions`);

  if (availableSessionIds.length === 0) {
    return null;
  }

  // ランダムにセッションを選択
  const randomIndex = Math.floor(Math.random() * availableSessionIds.length);
  const sessionId = availableSessionIds[randomIndex];
  console.log(`Selected session: ${sessionId}`);

  return sessionId;
}

/**
 * ブラウザインスタンスを取得する（セッション再利用を考慮）
 * 既存のセッションがあれば接続し、なければ新規作成する
 */
export async function getBrowser(browserFetcher: Fetcher): Promise<Browser> {
  // 既存セッションの取得を試行
  const sessionId = await getRandomSession(browserFetcher);

  if (sessionId) {
    try {
      console.log(`Attempting to connect to existing session: ${sessionId}`);
      const browser = await puppeteer.connect(browserFetcher, sessionId);
      console.log("Successfully connected to existing session");
      return browser;
    } catch (error) {
      console.log(`Failed to connect to session ${sessionId}:`, error);
      // 接続に失敗した場合は新規セッションを作成
    }
  }

  // 新規ブラウザセッションを作成
  console.log("Launching new browser session");
  const browser = await puppeteer.launch(browserFetcher);
  console.log("New browser session created");
  return browser;
}
