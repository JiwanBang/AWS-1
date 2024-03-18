const comSel = []; //교수님 코드
while (comSel.length < 3) {
  // 숫자가 세 개가 될때까지(배열의 길이 조건)
  const temp = parseInt(Math.random() * 8 + 1); //파스인트(정수) math.random(0과 1 사이의 소수*8 + 1)
  if (comSel.indexOf(temp) == -1) {
    //조건문(랜덤 난수가 배열에 없다면 해당 수를 추가)
    comSel.push(temp);
  }
}

console.log(comSel);

let result = [0, 0, 0];
let isEnd = false; //
while (result[0] != 3 && !isEnd) {
  //거짓의 부정은 참
  result = [0, 0, 0];
  const userSel = [];
  while (userSel.length < 3) {
    let temp = prompt("1~9 중 1번째 숫자를 입력해주세요.");
    if (temp == "끝") {
      isEnd = true;
      break;
    }
    userSel.push(+temp);
  }
  if (isEnd) {
    console.log("강제 종료");
    break;
  }

  for (let i = 0; i < userSel.length; i++) {
    const temp = comSel.indexOf(userSel[i]);
    if (temp == -1) {
      result[2] += 1;
    } else if (comSel[temp] == userSel[temp]) {
      result[0] += 1;
    } else {
      result[1] += 1;
    }
  }
  console.log("유저 입력 : " + userSel.join(""));
  console.log("S : " + result[0] + ", B : " + result[1] + ", O : " + result[2]);
}

console.log("컴퓨터의 숫자는 " + comSel.join("") + "이었습니다~");
