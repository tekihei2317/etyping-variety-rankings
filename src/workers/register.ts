import { checkIfScoreExistsInEtyping } from "./etyping-fetcher";

/**
 * スコア登録処理のメイン関数
 */
export interface RegisterScoreInput {
  browser: Fetcher;
  categoryId: string;
  userData: { userName: string; score: number };
}

export async function registerUserScore({
  browser,
  categoryId,
  userData,
}: RegisterScoreInput): Promise<{
  success: boolean;
  message: string;
  found?: boolean;
}> {
  // TODO: 送信されたデータ以上のスコアが登録されている場合は、処理を中断する

  // e-typingにデータが登録されているか確認する
  const found = await checkIfScoreExistsInEtyping({
    browser,
    categoryId,
    userData,
  });

  if (!found) {
    // FIXME: ここは400のレスポンスを返すように修正したい
    return {
      success: false,
      message:
        "指定されたユーザー名とスコアの組み合わせがe-typingのランキングに見つかりませんでした",
      found: false,
    };
  }

  // TODO: データベースにデータを登録する

  return {
    success: true,
    message: "スコアがe-typingで確認できました",
    found: true,
  };
}
