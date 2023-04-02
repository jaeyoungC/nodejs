const express = require("express");
const app = express();
const port = 3000;

// http 메소드(라우팅, 콜백함수{
// })
// 콜백함수>   함수(끝나고 실행할 함수)
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/dog", function (req, res) {
  res.json({'sound':'멍멍'});
});

app.get("/cat", function (req, res) {
  res.json({'sound':'야옹'});
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port${port}`);
});

//난 3000 포트를 열고 있어!
