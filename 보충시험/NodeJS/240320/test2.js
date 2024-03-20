console.log("test2.js 파일을 읽기 시작했어");

console.log(global.b);

let text = "이건 ES6 문법이다.";

// export default { text2: text };

module.expors = {
  consoleTest() {
    console.log(text);
  },
};
