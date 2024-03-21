const makeReq = (data) => {
  const tempArr = data.toString().split("\r\n"); //data를 문자로 변환 후 split(줄바꿈(\r\n)마다 잘라줌)
  const [method, path, protocol] = tempArr[0].split(" "); //첫째 줄은 띄어쓰기를 기준으로 잘라서 구조분해할당 [GET-method, favicon.ico-path, HTTP/1.1-protocol]
  const temp = { method, path, protocol }; // temp라는 객체를 만들어서 넣어줌

  let i = 1;
  for (; i < tempArr.length; ++i) {
    // 몇개가 받았는지 모르므로 length만큼 잘라서 조건 정함
    if (tempArr[i].length == 0) break; // 빈 칸(length=0)이면 멈춰라
    const tempIdx = tempArr[i].indexOf(": "); // indexOf로 ": "를 찾기
    temp[tempArr[i].slice(0, tempIdx)] = tempArr[i].slice(tempIdx + 2); //대괄호로 변수를 넣어서 슬라이스로 자르고 ": " 이후 나머지(tempIdx + 2)만큼 가져옴
  }
  console.log(tempArr[i + 1]);
  if (tempArr[i + 1].length > 0) {
    const body = {}; // 받아온 데이터를 파싱
    const bodyArr = tempArr[i + 1].split("&");
    bodyArr.forEach((item) => {
      // &로 구별되므로 &로 자름
      const tempArr = item.split("=");
      body[tempArr[0]] = decodeURI(tempArr[1]); //한글의 경우 decideURI로 incoding된 URI를 한글로 바꿔줌
    });
    temp.body = body;
  }
  return temp;
};
module.exports = { makeReq };
