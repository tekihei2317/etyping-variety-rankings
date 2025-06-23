# メモ

開発中にわからなかったことを書いて、調べていく。

- 動的ページのスクレイピングは何のライブラリを使えばできるのか
- Cloudflare Workersのnodejs_compatって何
- HonoでAPIを作るにはどうすればいいか
- Honoで作成したAPIを、クライアント（React）からアクセスするにはどうすればいいか
- HonoのRPCのドキュメント見てるけど、複数のエンドポイントある場合の書き方が分からない

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

### その他

[Wrangler · Browser Rendering docs](https://developers.cloudflare.com/browser-rendering/platform/wrangler/)
