const express = require("express");

const app = express(); // net.createServer()

app.get("/", (req, res) => {
  console.log(req.headers);
  console.log(req.url); //path
  console.log(req.path);
  console.log(req.query); //querystring
  console.log(req.body);
  console.log(req.protocol);
  res.end("now testing express server");
});

app.get("/test", (req, res) => {
  res.end("now testing express server");
});

app.listen(3000, () => {
  console.log("express server open of 3000 port");
}); // server.listen(port, ip, callbackFunction)

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("now testing http createServer");
// });

// server.listen(3000, () => {
//   console.log("http server open of 3080 port");
// });
