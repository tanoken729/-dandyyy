// expressを読み込む
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// テストとしてpackage.jsonからのデータを表示させる
const package = require("../package.json");

// ポート番号を読み込む（環境変数から読み取る or デフォルトとして5000を設定）
const port = process.env.port || process.env.PORT || 5000;
// api routerを設定
const apiRoot = "/api";

// expressオブジェクトのインスタンスを作成（初期化）
const app = express();

// configure app
// ユーザーがサーバーに送信した情報を読み取る
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// apiとクライアントアプリのホスティング環境が別々の場所にあっても読み出し可能にする
app.use(cors({ origin: /http: \/\/localhost/ }));
app.options("*", cors());

// sample db
const db = {
  test: {
    user: "test",
    currency: "$",
    description: `Test account`,
    balance: 75,
    transactions: [
      { id: "1", date: "2020-10-01", object: "Pocket money", amount: 50 },
      { id: "2", date: "2020-10-03", object: "Book", amount: -10 },
      { id: "3", date: "2020-10-04", object: "Sandwich", amount: -5 },
    ],
  },
};

// configure routes
const router = express.Router();
router.get("/", (req, res) => {
  // テストとしてpackage.jsonからのデータを表示させる
  res.send(`${package.description} - v${package.version}`);
});

router.get("/accounts/:user", (req, res) => {
  const user = req.params.user;
  const account = db[user];

  if (!account) {
    return res.status(404).json({ error: "User does not exist" });
  }
  return res.json(account);
});

// register all our routes
app.use(apiRoot, router);

// イベントハンドラを設定（port番号をここでリッスンさせる）
// サーバが起動した時に
app.listen(port, () => {
  console.log("server api!!");
});
