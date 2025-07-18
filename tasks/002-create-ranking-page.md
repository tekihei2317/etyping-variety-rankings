# ランキングページを作成する

取得したスコアのデータを元に、ランキングを表示するページを作成します。

使うライブラリなるべくシンプルに、React + Hono（あとでAPIを作るので）にします。最初はランキングページだけなのでルーティングライブラリも不要です。

## タスク一覧

- [x] 必要なライブラリをインストールする。HonoでAPIを作成し、そのAPIにReactで作ったページからアクセスする。
- [x] ランキングのデータにアクセスできるように、JSONのランキングをTypeScriptの配列に変換するスクリプトを書く。コードからインポートして使う。
- [x] 合計点のランキングを計算する処理を書く
- [x] ランキングページを作成し、計算したランキングを表示する
- [x] ページングを実装する

## 完了の条件

- [x] バラエティの合計点のランキングが計算できていること
- [x] ランキングページがあり、バラエティの合計点のランキングが閲覧できること
- [x] ランキングが見やすいようにページングされていること
