const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  console.log(req.headers);
  console.log(req.url);
  console.log(req.path);
  console.log(req.query);
  console.log(req.body);
  console.log(req.protocol);
  res.send("우왕 정말 굉장한 lib야");
});

const boardRoot = path.join(__dirname, "..", "board");

app.get("/board", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.html"));
});

app.get("/board.css", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.css"));
});

app.get("/board.js", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.js"));
});

app.listen(3000, () => {
  console.log("express server open of 3000 port");
});
