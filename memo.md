# メモ

開発中にわからなかったことを書いて、調べていく。

- 動的ページのスクレイピングは何のライブラリを使えばできるのか
- Cloudflare Workersのnodejs_compatって何
- HonoでAPIを作るにはどうすればいいか
- Honoで作成したAPIを、クライアント（React）からアクセスするにはどうすればいいか
- HonoのRPCのドキュメント見てるけど、複数のエンドポイントある場合の書き方が分からない
- Cloudflare D1の基本的な使い方を調べる。マイグレーションを本番DBに反映する方法とか覚えてない。

### Cloudflareのpuppeteerのドキュメントがあったので読もう

[Puppeteer · Browser Rendering docs](https://developers.cloudflare.com/browser-rendering/platform/puppeteer/)

> Puppeteer typically connects to a local Chrome or Chromium browser using the DevTools port. Refer to the Puppeteer API documentation on the Puppeteer.connect() method ↗ for more information.

PuppeteerはローカルのChromeに接続して動作する。Cloudflare Workers版では、WorkersのブラウザレンダリングAPIに代わりに接続するように変更されている。そして、PuppeteerのAPIが全て使えるようになっている。

DevTools Portってなんだろう。

### Cloudflare Workersのnodejs_compatって何

[Node.js compatibility · Cloudflare Workers docs](https://developers.cloudflare.com/workers/runtime-apis/nodejs/)

### HonoのRPCのドキュメント見てるけど、複数のエンドポイントある場合の書き方が分からない

[Hono Stacks - Hono](https://hono.dev/docs/concepts/stacks)

[Grouping routes for RPC - Hono](https://hono.dev/examples/grouping-routes-rpc)

examplesのところに例がいろいろ載っていて、それがドキュメントの代わりになっている感じっぽい。もっとドキュメント欲しいな...。

### Cloudflare D1の基本的な使い方を調べる。マイグレーションを本番DBに反映する方法とか覚えてない。

[Getting started · Cloudflare D1 docs](https://developers.cloudflare.com/d1/get-started/?_gl=1*kypqro*_gcl_au*MTE2NzIzMTkxNS4xNzUwNjUwNzU0*_ga*MDMzYmQzOGItZmFlNi00NDU0LWI1YTgtMGVjNWM1NmE2YzFl*_ga_SQCRB0TXZW*czE3NTA3Mjc0MjkkbzQkZzEkdDE3NTA3Mjc5NjckajU5JGwwJGgw)

```bash
# データベースを作る
wrangler d1 create <database_name>

# SQLの実行（ファイル経由）
wrangler d1 execute <database_name> --local --file=./query.sql

# SQLの実行（直接指定）
wrangler d1 execute <database_name> --local --comand="select * from customers"
```

マイグレーションについて。

```bash
# マイグレーションファイルの作成
wrangler d1 migrations create <database_name> <migration_name>

# マイグレーションの適用
wrangler d1 migrations apply <database_name> --local

# マイグレーションのリスト（実行されていないもののみ）
wrangler d1 migrations list <database_name> --local
```

### その他

[Wrangler · Browser Rendering docs](https://developers.cloudflare.com/browser-rendering/platform/wrangler/)
