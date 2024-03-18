// 컴퓨터가 3개의 수를 선택
// - 3개의 수가 중복되면 안됀다. 1 ~ < 10 << 0 ~ 9 << 0  <= 1
let comSel1 = Math.floor(Math.random() * 9 + 1);
let comSel2 = Math.floor(Math.random() * 9 + 1);
while (comSel1 == comSel2) {
  comSel2 = Math.floor(Math.random() * 9 + 1);
}

let comSel3 = Math.floor(Math.random() * 9 + 1);

while (comSel1 == comSel3 || comSel2 == comSel3) {
  comSel3 = Math.floor(Math.random() * 9 + 1);
}
console.log(comSel1, comSel2, comSel3);

for (let strike = 0, ball = 0; strike != 3; ) {
  //유저 선택
  (strike = 0), (ball = 0);
  const userSel1 = prompt("1 ~ 9 까지의 첫번째 숫자를 선택해주세요.");
  const userSel2 = prompt("1 ~ 9 까지의 두번째 숫자를 선택해주세요.");
  const userSel3 = prompt("1 ~ 9 까지의 세번째 숫자를 선택해주세요.");

  // // 결과 확인
  // let strike = 0;
  // let ball = 0;
  // let out = 0;

  if (userSel1 == comSel1) {
    // strike, ball, out
    strike += 1;
  } else if (userSel1 == comSel2 || userSel1 == comSel3) {
    ball += 1;
  }
  if (userSel2 == comSel2) {
    strike += 1;
  } else if (userSel2 == comSel1 || userSel2 == comSel3) {
    ball += 1;
  }

  if (userSel3 == comSel3) {
    strike += 1;
  } else if (userSel3 == comSel1 || userSel3 == comSel2) {
    ball += 1;
  }

  console.log(userSel1, userSel2, userSel3);
  console.log(strike, "스트라이크", ball, "볼", 3 - strike - ball, "아웃");
}

console.log("정답입니다");

//while을 쓴다면 strike값을 while 안에서 선언해야 하므로,
//while(true)로 하고 가장 마지막에 if(strike == 3){ break;} 선언
// 예외처리 하나도 X
//(ex. 중복 숫자 선언이나 숫자당 4개 이상 선언했거나 중간에 빠져나가거나 그외 등)
//out 값은 3 - (strike + ball)이므로 out값 삭제
