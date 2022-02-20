// expressを読み込む
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// ポート番号を読み込む（環境変数から読み取る or デフォルトとして5000を設定）
const port = process.env.port || process.env.PORT || 5000;

// expressオブジェクトのインスタンスを作成（初期化）
const app = express();
// configure app
// ユーザーがサーバーに送信した情報を読み取る
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// apiとクライアントアプリのホスティング環境が別々の場所にあっても読み出し可能にする
app.use(cors({ origin: /http: \/\/localhost/ }));
app.options("*", cors());

// イベントハンドラを設定（port番号をここでリッスンさせる）
// サーバが起動した時に
app.listen(port, () => {
  console.log("server api!!");
});
