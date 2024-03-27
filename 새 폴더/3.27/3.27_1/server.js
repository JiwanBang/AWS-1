const express = require("./lib/express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.headers);
  console.log(req.url);
  console.log(req.path);
  console.log(req.query);
  console.log(req.body);
  console.log(req.protocol);
  res.end("get pass / in express server");
});

app.get("/test", (req, res) => {
  res.end("now testing express server");
});

app.get("/test1", (req, res) => {
  res.end("now test1ing express server");
});

app.listen(3001, () => {
  console.log("express server open of 3001 port");
});
