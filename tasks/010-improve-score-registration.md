# スコア登録の改善

現在のスコア登録は、ユーザーが入力したスコアを元にランキングページを二分探索する実装になっています。

6ページしかないテンキーで5~10秒くらい時間がかかっているので、ここを改善します。具体的には、ユーザーにページ番号を入力してもらい、そのページだけを検索するようにします。

## タスク一覧

- [ ] ページ番号を入力するフォームを作成する
- [ ] ランキング登録APIを修正し、ユーザーが指定したページのみを検索するようにする

## メモ

エラーになるのは

- 既に登録されている場合（対応済み）
- ページ番号が大きすぎる場合
  - →ページ番号が大きすぎます。1~nの数字で入力してください。
- ページにスコアが存在しない場合
  - → 指定されたユーザー名とスコアの組み合わせがe-typingのランキングに見つかりませんでした
  - ↑エラーメッセージにページ番号を含めた方が良さそう？
