// expressを読み込む
const express = require("express");
// ポート番号を読み込む（環境変数から読み取る or デフォルトとして5000を設定）
const port = process.env.port || process.env.PORT || 5000;
// expressオブジェクトのインスタンスを作成（初期化）
const app = express();

// イベントハンドラを設定（port番号をここでリッスンさせる）
// サーバが起動した時に
app.listen(port, () => {
  console.log("server api!!");
});
