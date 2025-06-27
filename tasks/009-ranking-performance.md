# ランキングのパフォーマンス改善

ランキングを毎回データベースから取得して計算しているため、キャッシュして高速化しようと思います。

## タスク一覧

- [ ] 各処理でどれくらい時間がかかっているか確認する
  - データベースからの取得、ランキングの計算、計算の3つ
- [ ] 改善方法を考えて、実行する
  - 登録があるまでランキングは同じなので、スコアテーブルの件数をキーにしてキャッシュすればいいと思う

## メモ

```text
GET https://etyping-variety-rankings.tekihei2317.workers.dev/api/ranking?page=1 - Ok @ 2025/6/27 22:18:56
  (log) Database query time: 49ms
  (log) Ranking calculation time: 0ms
  (log) Total ranking processing time: 49ms
  (log) Records processed: 4574, Users: 2244
  (log) Filtering time: 0ms
  (log) Total API request time: 49ms
GET https://etyping-variety-rankings.tekihei2317.workers.dev/api/score-updates?limit=15 - Ok @ 2025/6/27 22:18:56
GET https://etyping-variety-rankings.tekihei2317.workers.dev/api/ranking?page=1&search=%E3%81%82 - Ok @ 2025/6/27 22:19:14
  (log) Database query time: 51ms
  (log) Ranking calculation time: 0ms
  (log) Total ranking processing time: 51ms
  (log) Records processed: 4574, Users: 2244
  (log) Filtering time: 0ms
  (log) Total API request time: 51ms
GET https://etyping-variety-rankings.tekihei2317.workers.dev/api/ranking?page=1&search=%E3%81%84 - Ok @ 2025/6/27 22:19:19
  (log) Database query time: 55ms
  (log) Ranking calculation time: 0ms
  (log) Total ranking processing time: 55ms
  (log) Records processed: 4574, Users: 2244
  (log) Filtering time: 0ms
  (log) Total API request time: 55ms
```
