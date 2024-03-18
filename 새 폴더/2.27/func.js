function a() {
  console.log("a 함수를 실행했다.");
}
// a();

console.log(a);

function add(a, b) {
  console.log(a + b);
  return a + b; //반환 요청 << 함수의 코드를 멈춰준다.
  //   console.log(a); 위에서 return해서 무의미한 코드가 되었다.
}
let result = add(1, 2);
console.log(result); //undefiend - > 3

// 함수의 선언식
// function 이름(매개변수) {실행코드}
// 호출할 때 - > 함수이름(인자);
// 함수도 결국 무엇이다? 값이다

const plus = add;
plus(2, 3);

// 표현식

const minus = function (a, b) {
  return a - b;
};

console.log(minus(2, 3));

//익명함수(이름이 없는 함수)
//function (a, b) {
// return a * b;
// };

//표현식 = 변수 선언 + 익명함수 할당

//즉시실행함수
(function (a, b) {
  console.log(a * b);
  return a * b;
})(4, 5); // 솔직히 별로 쓸일이 없긴함

const tempFunc = function (a, b) {
  a(b);
};

tempFunc(console.log, "내용을 확인중");
// 함수를 인자로 전달할 때 콜백함수 라고 부른다

const arr = [
  { name: "이정배", age: 23 },
  { name: "박성민", age: 34 },
  { name: "방지완", age: 29 },
  { name: "정구진", age: 24 },
  { name: "이동찬", age: 29 },
  { name: "이승배", age: 27 },
  { name: "손민복", age: 29 },
  { name: "김강문", age: 27 },
];

const temp = arr.find(function (item) {
  if (item.name == "박성민") return true;
});
console.log(temp);

console.log(
  arr.filter(function (item) {
    return item.age < 29;
  })
); //반환하는 조건이 일치하는 item을 배열로 결과를 출력해줌

arr.forEach(function (item) {
  console.log(item.name);
});
//forEach는 반환이 없음

let num = 0;

console.log(
  arr.map(function (item) {
    const temp = { ...item };
    num += 1;
    temp.num = num;
    return temp;
  })
);
// 반환받은 것들 전부의 배열이 나옴
// item으로 지정하면 item이 바뀌므로 temp를 설정하고 스프레드연산자(...item)를 통해
// temp로 새로 선언(깊은복사)

console.log(arr);

console.log(
  arr.sort(function (a, b) {
    return b.age - a.age;
    // prev, curr
  })
);

// 변수명, 함수명 << 식별자
// 변수 식별자는 명사로 시작해야한다
// 함수 식별자는 동사로 시작해야한다

const tempFunc1 = () => {};
//화살표 함수

const add1 = (a, b) => {
  return a + b;
};
const add2 = (a, b) => a + b; //add1과 2는 같음. 바로 반환해줌

const getName = (item) => item.name;
console.log(arr.map(getName));

// console.log(arr.map((item) => item.name));

//화살표 함수 => function을 대체하기 위해

//보통 콜백함수가 제일 자주 쓰임(ex. 사이트에서 클릭했을 때 등)
