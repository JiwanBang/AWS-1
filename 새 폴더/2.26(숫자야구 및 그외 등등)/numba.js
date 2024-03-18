//숫자 1개 추출
//두번째 추출 이후, indexof로 비교해서 같으면 중복 숫자가 나오지 않게 다시 반복
//이후 배열이 세 개가 나올때까지(length가 3이 나올때까지)

//유저 입력값을 추출, 숫자별로 따로
//유저 입력값을 각각 indexOf로 추출해서 결과값 도출

let answer = [1, 2, 3];
// while (answer.length < 3) {
//   let some = Math.floor(Math.random() * 10);
//   if (some > 0 && answer.indexOf(some) == -1) {
//     answer.push(some);
//   }
// }

console.log(answer);
//배열의 길이가 3이 될때까지

let input = prompt("숫자를 입력하세요");
console.log(input);

for (
  let userA = [input[0], input[1], input[2]], strike = 0, ball = 0, out = 0;
  (userA[1] = answer[1]) & (userA[2] = answer[2]) & (userA[3] = answer[3]);
  strike, ball, out
) {
  let input = prompt("숫자를 입력하세요");
  if (){}
}

// 수열이 같을때까지. 1. 같지 않다면, 프롬프트(스트라이크, 볼, 아웃) 선언과 함께 입력창 다시 나옴
// 2. 스트, 볼, 아웃 값 찾기
// 3. 같으면 3s 선언
//
