# ランキングの定期更新

1週間に1回程度でランキング更新をしたいので、Cloudflare Workersの[Cron Triggers](https://developers.cloudflare.com/workers/configuration/cron-triggers/)を使って実装します。

## タスク一覧

- [ ] e-typingからランキングのデータを取得するAPIを作成する。カテゴリと実際に登録するかどうか（dryRun）をパラメータで指定できるようにする
- [ ] 新しいユーザーのデータまたは、スコアが更新された場合にDBに登録する
  - [ ] ranking_scoresとscore_update_historyに登録する
- [ ] 上記のAPIを、Cron Triggersで実行するように変更する

## メモ

とりあえず今日は手動実行でも問題ない。全てのページの情報を取得して、更新されている場合にのみ登録する必要がある。

まずは、新しい情報がどの程度登録されているのかを確認してみたい。ランキング情報（名前とスコアのペアの配列）を取得して、既存のランキングと比較して、存在しなかったら登録、みたいな感じになるかな。

cron triggersにパラメータを渡すことはできるんだろうか。できなさそう。

デバッグのために、差分を表示するだけで登録しないオプションを用意したり、特定のカテゴリのランキングだけを取得できるようにしてみたい。

とりあえず最初は、APIを用意してパラメータで挙動を制御できるようにするといいのではないだろうか。（`categoryId`、`dryRun`などのパラメータを渡す）

ランキングの取得は時間がかかりそうだけどWorkersの制約には引っかからないだろうか。

```text
[RankingUpdater] Starting ranking update for tenkey (dryRun: true)
Found 0 existing sessions
Found 0 available sessions
Launching new browser session
New browser session created
[RankingUpdater] Starting full ranking fetch for tenkey
[RankingUpdater] Found 6 pages for tenkey
[RankingUpdater] Fetching page 1/6 for tenkey
[EtypingFetcher] Moving to page 1 for category: tenkey
[EtypingFetcher] Already on target page: 1
[EtypingFetcher] Fetched 30 entries from page 1 (tenkey)
[RankingUpdater] Fetching page 2/6 for tenkey
[EtypingFetcher] Moving to page 2 for category: tenkey
[EtypingFetcher] Waiting for page transition from 1 to 2
[EtypingFetcher] Page transition completed: 2
[EtypingFetcher] Fetched 30 entries from page 2 (tenkey)
[RankingUpdater] Fetching page 3/6 for tenkey
[EtypingFetcher] Moving to page 3 for category: tenkey
[EtypingFetcher] Waiting for page transition from 2 to 3
[EtypingFetcher] Page transition completed: 3
[EtypingFetcher] Fetched 30 entries from page 3 (tenkey)
[RankingUpdater] Fetching page 4/6 for tenkey
[EtypingFetcher] Moving to page 4 for category: tenkey
[EtypingFetcher] Waiting for page transition from 3 to 4
[EtypingFetcher] Page transition completed: 4
[EtypingFetcher] Fetched 30 entries from page 4 (tenkey)
[RankingUpdater] Fetching page 5/6 for tenkey
[EtypingFetcher] Moving to page 5 for category: tenkey
[EtypingFetcher] Waiting for page transition from 4 to 5
[EtypingFetcher] Page transition completed: 5
[EtypingFetcher] Fetched 30 entries from page 5 (tenkey)
[RankingUpdater] Fetching page 6/6 for tenkey
[EtypingFetcher] Moving to page 6 for category: tenkey
[EtypingFetcher] Waiting for page transition from 5 to 6
[EtypingFetcher] Page transition completed: 6
[EtypingFetcher] Fetched 3 entries from page 6 (tenkey)
[RankingUpdater] Completed fetching 153 total entries for tenkey
[UpdateCategoryRanking] Score update for pecico 185 → 245
[UpdateCategoryRanking] New user ヒダリテンキー with score 181
[wrangler:info] POST /api/update-rankings 200 OK (9732ms)
[UpdateCategoryRanking] New user たらたら with score 181
[UpdateCategoryRanking] Score update for hideppe 168 → 173
[UpdateCategoryRanking] Score update for d 130 → 163
[UpdateCategoryRanking] New user Skull mask with score 89
```
