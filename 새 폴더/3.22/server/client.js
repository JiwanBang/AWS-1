// 브라우저의 일을 대신한대 => client.js로 요청을 보낸다

const net = require("net");

const socket = net.connect({ port: 3000, host: "127.0.0.1" });

socket.on("connect", () => {
  console.log("서버랑 연결됐어");
  const now = new Date().toLocaleString();
  socket.write("시작 : " + now);
});

socket.on("data", (data) => {
  console.log(data.toString() + "에 요청 받았어.");

  //   socket.end();
});
