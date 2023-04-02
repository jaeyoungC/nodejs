const { query } = require("express");
const express = require("express");
const app = express();
const port = 3000;

// http 메소드(라우팅, 콜백함수{
// })
// 콜백함수>   함수(끝나고 실행할 함수)
app.get("/", function (req, res) {
  res.send("Hello World");
});

//parameter
// app.get("/user/:id", function (req, res) {
//     const q = req.params
//     console.log(q.id);
// });

//query
// app.get("/user/:id", function (req, res) {
//     const q = req.query
//     console.log(q.q);
//     console.log(q.name);
//     console.log(q.age);
//     res.json({'userid':q.name});
// });


app.get("/sound/:name", function (req, res) {
    const { name } = req.params
    if (name == "dog") {
        res.json({'sound':'mungmung'});
    } else if (name == "cat") {
        res.json({'sound':'yaong'});
    } 
    else{
        res.json({'sound':'unknown'});
    }
    console.log(name);
  
});







app.listen(port, () => {
  console.log(`Example app listening on port${port}`);
});

//난 3000 포트를 열고 있어!
