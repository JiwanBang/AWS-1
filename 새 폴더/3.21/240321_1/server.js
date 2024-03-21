const net = require("net"); //net이라는 코드를 만든 적 없으므로 NodeJS 안 모듈에서 찾아옴
const req = require("./req");
const res = require("./res"); // req/res 만듬

const html = `<html>
  <head>
    <meta charset="UTF-8" />
    <title>Post 실험체</title>
  </head>
  <body>
    <form action="./test" method="post">
        <input type="text" name="id"/>
        <input type="text" name="pw"/>
        <button>보내기~</button>
    </form>
    <button id="get">받아오기</button>
    <script>
      const test = async () => {
        const data = JSON.parse(await(await fetch('./get')).text());
        console.log(data)
      }
      document.getElementById('get').onclick = test;
    </script>
  </body>
</html>`;

const users = [];

const server = net.createServer((client) => {
  // 서버 만듬-client라는 콜백 함수가 요청을 받아 처리
  client.on("data", (data) => {
    //"data"라는 이벤트가 발생했을 때 진행할 코드(data) 입력
    const tempReq = req.makeReq(data);
    // 우리가 만들어놓은(req)에서 makeReq라는 method 가져와서 data라는 인자로 결과값=>console.log(tempReq)
    // maekreq는 요청에 대한 파싱
    console.log(tempReq);
    //data를 우리가 보기 편한 걸로 바꿔줘야한다 => 객체 -> request -> req
    //우리가 보내주는 것은 String -> response -> res
    if (tempReq.path == "/") {
      client.write(res.makeResponse("text/html", html));
      //res에서 makeResponse method 가져옴
    } else if (tempReq.path == "/test") {
      users.push(tempReq.body);
      client.write(res.makeResponse("text/html", html));
    } else if (tempReq.path == "/get") {
      client.write(res.makeResponse("text/text", JSON.stringify(users)));
    }
    client.end();
    //데이터 요청에 대한 응답 종료
  });
});

server.on("error", (err) => {
  console.log("err :" + err);
});
//서버에 문제가 생길 것에 대해 에러

server.listen(3000, "127.0.0.1", () => {
  console.log("open server");
});

// 포트 번호/ip주소(로컬), 서버 오픈 시 오픈 서버
