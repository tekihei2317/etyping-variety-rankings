# メモ

開発中にわからなかったことを書いて、調べていく。

- 動的ページのスクレイピングは何のライブラリを使えばできるのか
- Cloudflare Workersのnodejs_compatって何
- HonoでAPIを作るにはどうすればいいか
- Honoで作成したAPIを、クライアント（React）からアクセスするにはどうすればいいか
- HonoのRPCのドキュメント見てるけど、複数のエンドポイントある場合の書き方が分からない
- Cloudflare D1の基本的な使い方を調べる。マイグレーションを本番DBに反映する方法とか覚えてない。
- Tanstack Routerで`src/routes`じゃなくて`src/web/routes`にしたい場合は？
- Cloudflare Workersにデプロイしているけれど、Cloudflare Pagesとの違いを知りたい
- Cloudflare Workers Buildsで自動デプロイしたい

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

### Tanstack Routerで`src/routes`じゃなくて`src/web/routes`にしたい場合は？

`routesDirectory`っていうオプションがあったから指定した。ドキュメントは読んでない。

### トップページ以外のページでリロードする404になる

```txt
ユーザーは正しく指摘している。問題を整理してみよう：

1. / (ルートページ) はリロードしても正常に動作する
2. /user/nrf などの他のページはリロードすると404になる

これは明らかにSPAの典型的な問題だ。

リクエストの流れを考えてみよう：

開発環境 (Vite dev server):
1. ブラウザが /user/nrf に直接アクセス
2. Vite dev serverが /user/nrf というファイルを探そうとする
3. そんなファイルは存在しないので404を返す

本番環境 (Cloudflare Workers):
1. ブラウザが /user/nrf に直接アクセス
2. Workersがルートマッチングを試行
3. /api/* にマッチしないので、static assets処理に移行
4. wrangler.tomlの not_found_handling = "single-page-application" によりindex.htmlが返される

つまり、開発環境での問題だ。

Viteでの正しい設定方法を考えよう：

1. vite.config.ts の server.open または server.middlewareMode
2. カスタムミドルウェア
3. proxy設定

しかし、現在のWorkerのコードを見ると、実は問題は別のところにあるかもしれない。

現在のWorkerは：
const app = new Hono().route("/api", apiApp);

つまり、/api/* 以外のルートは何も処理されていない。

開発環境特有の課題として、SPAのルーティングを適切に処理する必要がある。Vite dev
serverは静的ファイルが存在しないルートに対して、常にindex.htmlを返すように設定を調整すべきだ。具体的には、historyFallback機能を利
用して、全てのルートでindex.htmlを返すことで、クライアントサイドルーティングを正しくサポートできる。

プロキシ設定を活用し、APIリクエスト以外のすべてのリクエストを適切にハンドリングする方法が最もシンプルで効果的なアプローチとなる。

Vite環境でSPAのルーティングを実現するには、カスタムミドルウェアやプラグインを使用することで、フロントエンドアプリケーションの柔軟
なナビゲーションを実現できる。

代替手段として、Viteの組み込み機能や専用プラグインを探索することで、より簡潔な解決策が見つかる可能性がある。特にカスタムミドルウ
ェアは、リクエストのリダイレクトを簡単に制御できる柔軟な方法を提供する。
```

試しに`vite.config.ts`の`cloudflare()`をコメントアウトすると、正しくルーティングされた。プラグインがルーティングの邪魔をしている？

---

現状を整理してみよう。

- "/"はindex.htmlが返るので正しく動く
- "/api/*"は、ルーティングが定義されているのでWorkerが処理する
- "/user/<user_name>"は、Worker側に処理が飛んでいるがルーティングが定義されていないのでNot Foundになる

どうやって解決するべきか、そもそもこのルーティングはSPAのパスで、このルーティングはAPIのパスだ、という設定をしないといけない気がする。とりあえず、Cloudflare WorkersのSPAのドキュメントを読んでみることにしよう。

[Single Page Application (SPA) · Cloudflare Workers docs](https://developers.cloudflare.com/workers/static-assets/routing/single-page-application/)

> When you configure single-page-application mode, Cloudflare provides default routing behavior that automatically serves your /index.html file for navigation requests (those with Sec-Fetch-Mode: navigate headers) which don't match any other asset. For more control over which paths invoke your Worker script, you can use advanced routing control.

Sec-Fetch-Mode: navigateが付いてて、他のアセットにマッチしない場合はindex.htmlを返す。つまり、ページ遷移したときはSec-Fetch-Mode: navigateがつくけど、リロードしたときはそうならないということかな。

> Configuring assets.not_found_handling to single-page-application overrides the default serving behavior of Workers for static assets. When an incoming request does not match a file in the assets.directory, Workers will serve the contents of the /index.html file with a 200 OK status.

この設定はしているんだけど、本番環境でも404になっていた。compapibility_dateが問題なのかもしれない。今日の日付に変えてやってみよう。

compapibility_dateを今日の日付に変えると動いた！スタイリングは崩れているのでCSSが効いていないっぽい。とりあえず先に進もう。気になってたことはここに書かれてるっぽいことがわかったのでヨシ。

### `wrangler dev --remote`って自動で反映される？

新しくAPIエンドポイントを作っても実行できずNot Foundになるので、ビルドし直さないといけないのかなと。devだから自動でビルドしてくれそうな気はするけど。

### @cloudflare/puppeteerで、Session with given id not found.

```txt
Score registration request: tsato - study - 476
Starting score registration for tsato in study
Fetching e-typing ranking for study, page 4
Navigating to: https://www.e-typing.ne.jp/ranking/index.asp?im=0&sc=variety&ct=study
Moving to page 4
Extracting ranking data...
Extracted 30 ranking entries
Fetching e-typing ranking for study, page 2
[wrangler:info] POST /api/register-score 200 OK (10308ms)
Error in registerUserScore: ProtocolError: Protocol error (Target.createTarget): Session with given id not found.
    at <instance_members_initializer> (file:///Users/tekihei2317/ghq/github.com/tekihei2317/etyping-variety-rankings/dist/etyping_rankin
```

これよく分からなかった...。複数のBrowserを立ち上げてることが原因かなと思ったけど、一つのBrowserにしても起きたり起きなかったり。ドキュメントにsessionについて書かれているところがあったので読んでみよう。

[Reuse sessions · Browser Rendering docs](https://developers.cloudflare.com/browser-rendering/workers-binding-api/reuse-sessions/)

Browser render workerのパフォーマンスを上げる一番の方法はセッションを再利用すること。端的に言えば、`browser.close()`の代わりに`browser.disconnect()`を使い、再接続する場合は`puppeteer.connect(browser, sessionId)`を使う。

この実装を参考に、今の実装を修正してみよう。

### Cloudflare Workersにデプロイしているけど、Cloudflare Pagesとの違いを知りたい

結論: Cloudflareは、Cloudflare Workersでフルスタックアプリケーションが作れるように、Cloudflare Pagesの初機能をCloudflare Workersに取り組んできた。そのおかげで今はCloudflare Workersでほとんどのことができるようになっているので、アプリはCloudflare Workersで構築することが推奨されている。PagesからWorkersへの移行ガイドも出されている。

参考: [フロントエンド、バックエンド、データベースが1つのCloudflare Workerに](https://blog.cloudflare.com/ja-jp/full-stack-development-on-cloudflare-workers/)

---

[Cloudflare Workers と Pages の違いを徹底比較（2025 年版）](https://zenn.dev/kg_lens/articles/c4d292166a8c4c)

まとめには、静的サイトならPages、APIとかならWorkers、両方あるならPages + Functionsと書かれている。

わかりやすい違いはビルドパイプラインっぽい？Cloudflare PagesはGitHubへのプッシュで自動デプロイしてくれるけれど、Workersにはそれがない感じなのかな。

ドキュメントを読んでいると"We recommend using Cloudflare Workers for new projects. For existing Pages projects, see our migration guide and compatibility matrix."と書かれてあって、Cloudflare Pagesへの移行が推奨されているみたい。これはどういう経緯があったんだろうか。

Workersでも、プレビュー環境を作ったり、mainブランチの変更で自動デプロイできるようにしたい。その設定がどうやったらできるんだろう。移行ガイドもとりあえず読んでみたい。

---

[Cloudflare PagesからWorkersへの移行](https://qlitre-dialy.ink/post/migration-to-cloudflare-workers)

HonoXっていうライブラリがあるんだ。

---

[フロントエンド、バックエンド、データベースが1つのCloudflare Workerに](https://blog.cloudflare.com/ja-jp/full-stack-development-on-cloudflare-workers/)

ここ結構気になってた情報が集まっていて良さげ。

Workersに移行する経緯としては、もともとアセットの配信はPagesでしかサポートされなくなって、2024年9月にWorkrersでのアセット配信がβサポートされた。そのおかげで単一のWorkerでフルスタックアプリケーションが作れるようになった。

今のプロジェクトは`npm create cloudflare@latest -- --template=cloudflare/templates/vite-react-template`の設定ファイルをコピーして持ってきている。ここでは`npm create cloudflare@latest my-react-app -- --framework=react`が説明されている。これは`api/`っていうディレクトリも用意されてるから、Workersのセットアップもされていそう。

シングルページアプリケーションについても書かれている。シングルページアプリケーションモードを有効化すると、ブラウザからのアクセスは全部静的アセットに流され、見つからなかった場合に`index.html`が返されるようになる。それ以外のリクエストはWorkersに流される。

> このセットアップによって、Reactでフロントエンドをレンダリングし、Workerでバックエンドの操作を処理し、Viteでこの2つをつなぎ合わせることができます。

[korinne/react-postgres-fullstack-template](https://github.com/korinne/react-postgres-fullstack-template)

`sql`タグをhonoのコンテキストに入れてるのいいな...真似したい。D1でsqlタグ使えるやつってあるのかな。smart placementの説明も書かれている。データベースが他の場所にある場合は、ワーカーをそのデータベースの近くに移動させるらしい。これって本当に速くなるのかな？

Workers Buildsっていうのがあるらしい。これがビルドを自動化するために使うやつだ。GitリポジトリをWorkerに接続して、変更があったときにデプロイできるようになる。これあとでやってみよう。

### Cloudflare Workers Buildsで自動デプロイしたい

Cloudflare Workers Buildsは現在ベータ版。

[Builds · Cloudflare Workers docs](https://developers.cloudflare.com/workers/ci-cd/builds/)

リポジトリを選択して新しいWorkerをデプロイするか、既存のワーカーにWorkers Buildsの設定をするかのどちらか。Workerの名前を変更したかったので前者でやってみようと思う。

ドキュメントを見ている感じ特に難しい概念がある訳ではなさそうだ。ダッシュボードをポチポチしてこよう。

### その他

[Wrangler · Browser Rendering docs](https://developers.cloudflare.com/browser-rendering/platform/wrangler/)
