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

キャッシュがある時でも10秒くらいしか早くなってない。あと、キャッシュするのに3秒くらいかかってかなり遅くなってしまっている。

```
GET https://etyping-variety-rankings.tekihei2317.workers.dev/api/ranking?page=1 - Ok @ 2025/6/27 23:15:39
  (log) Cache miss. Cache check took 392ms
  (log) Database query time: 227ms
  (log) Ranking calculation time: 0ms
  (log) Total ranking processing time: 1100ms
  (log) Records processed: 4574, Users: 2244
  (log) Cached ranking data in KV (2947ms)
  (log) Data size: 259267 bytes
  (log) Filtering time: 0ms
  (log) Total API request time: 4047ms
GET https://etyping-variety-rankings.tekihei2317.workers.dev/api/score-updates?limit=15 - Ok @ 2025/6/27 23:15:43
GET https://etyping-variety-rankings.tekihei2317.workers.dev/api/ranking?page=1 - Ok @ 2025/6/27 23:16:28
  (log) Cache hit! Retrieved from KV in 5ms
  (log) Total ranking processing time (cached): 38ms
  (log) Filtering time: 0ms
  (log) Total API request time: 38ms
GET https://etyping-variety-rankings.tekihei2317.workers.dev/api/score-updates?limit=15 - Ok @ 2025/6/27 23:16:29
GET https://etyping-variety-rankings.tekihei2317.workers.dev/api/ranking?page=1 - Ok @ 2025/6/27 23:16:37
  (log) Cache miss. Cache check took 402ms
  (log) Database query time: 52ms
  (log) Ranking calculation time: 0ms
  (log) Total ranking processing time: 498ms
  (log) Records processed: 4574, Users: 2244
  (log) Cached ranking data in KV (2314ms)
  (log) Data size: 259267 bytes
  (log) Filtering time: 0ms
  (log) Total API request time: 2812ms
```
