const net = require("net");
const fs = require("fs");

const { makeReq } = require("./req");
const { makeResponse, redirect, sendFile } = require("./res");

const createRes = (client) => ({
  end: (data) => {
    client.write(makeResponse("text/html", data));
    client.end();
  },
});

const app = {
  funclist: [],
  add: (method, path, func) => {
    app.funclist.push({ method, path, func });
  },
  execList: (req, res) => {
    const { method, path } = req.header;
    let isRun = false;
    app.funclist.forEach((callback) => {
      if (method != callback.method) return;
      if (path != callback.path) return;
      callback.func(req, res);
      isRun = true;
    });
    return isRun;
  },
  get: (path, func) => {
    app.add("GET", path, func);
  },
};

const server = net.createServer((client) => {
  client.on("data", (data) => {
    const req = makeReq(data);
    const res = createRes(client);

    if (!app.execList(req, res)) res.end("error");
  });
});

// app.get("/", (req, res) => {
//   res.end("now testing net server");
// });

// server.listen(3001, "127.0.0.1", () => {
//   console.log("server open of 3001 port");
// });

app.listen = (port, func) => {
  server.listen(port, "127.0.0.1", func);
};

module.exports = () => {
  return app;
};
