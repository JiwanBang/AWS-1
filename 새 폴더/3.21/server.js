const net = require("net");

const body = `<html lang="ko">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
<div>잘받았다<div>;
</body>
</html>`;

const response = `HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: ${body.length}

${body}`;

// TCP Socket 서버
// 다음주 월요일까지 하는 건 TCP Socket 서버를 사용해서
// TCP => OSI 7계층에서의 4계층
// HTTP => OSI 7 계층에서 7계층
// HTTP를 구현할거다.
// 5계층에 Session 계층, 연결을 유지하는 계층
// 연결이 끊어졌을 때

const server = net.createServer((client) => {
  client.on("data", (data) => {
    console.log("hi");
    client.setEncoding("utf8");
    console.log(new Date());
    console.log(data);
    console.log(data.toString());
    console.log(data.toString().split("\r\n")[0].split(" "));

    client.write(response);
    client.end();
  });
});

server.on("error", (err) => {
  console.log("err :" + err);
});
// event가 발생했을 때 on

server.listen(3000, "127.0.0.1", () => {
  console.log("server open");
});
