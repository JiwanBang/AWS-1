//javascript는 어떤 자료구조를 기반으로 두고 있을까?
//ProtoType을 기반으로 언어가 만들어졌다.

const date = new Date("2000.02.24");
//Date 같은 놈들을 class라고 부름

console.log(date);
console.log(date.getMonth());

// class

function createPerson(name, age) {
  return { name, age };
}

function createStudent(name, age) {
  let className = "웹 4기";
  return { name, age };
}

function Student() {
  this.class = "웹 4기";
}
const student = new Student();
console.log(student);
console.log({ class: "웹 4기" });

function WebClass(name, age) {
  this.name = name;
  this.age = age;
  this.intro = function () {};
}

function GameClass(name, age) {
  this.name = name;
  this.age = age;
  this.class = "게임";
}
WebClass.prototype = student;
const smb = new WebClass("손민복", 29);
console.log(smb);
console.log(smb.class);
// const arr = [
//   { name: "이정배", age: 23 },
//   { name: "박성민", age: 34 },
//   { name: "방지완", age: 29 },
//   { name: "정구진", age: 24 },
//   { name: "이동찬", age: 29 },
//   { name: "이승배", age: 27 },
//   { name: "손민복", age: 29 },
//   { name: "김강문", age: 27 },
// ];
student.class = "웹 5기";
const arr = [
  new WebClass("이정배", 23),
  new WebClass("박성민", 34),
  new WebClass("방지완", 29),
];

console.log(arr);

class WebClass2 {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
// 60 ~ 69 이렇게 만들어쓰는게 중요!!

// const ldc = new WebClass2("이동찬", 29);
// console.log(ldc);

// class Student2 extends WebClass2 {
//   class = "웹 4기";
//   constructor(name, age, classname) {}
// }

// const ljb = new Student2("이정배", 23);
// console.log(ljb);

//class는 매서드 안에 매개변수를 넣음

// new
let num = 1;
console.log(num.toString);
num = new Number(1);
console.log(num);
num = new String(num);
console.log(num);
num = "1";
console.log(num);
let arr1 = new Array();
console.log(arr1);
console.log(arr);

class Array2 {
  #count = 0;
  length = this.#count;
  push(value) {
    this[this.#count] = value;
    this.#count += 1;
    this.length = this.#count;
  }
  pop() {
    this.#count -= 1;
    const temp = this[this.#count];
    this[this.#count] = undefined;
    this.length = this.#count;
    return temp;
  }

  forEach(func) {
    for (let i = 0; i < this.#count; i++) {
      func(this[i]);
    }
  }

  map(func) {
    const temp = new Array2();
    for (let i = 0; i < this.#count; i++) {
      temp.push(func(this[i]));
    }
    return temp;
  }
}

const tempArr = new Array2();
tempArr.push(11);
console.log(tempArr[0]);
console.log(tempArr.length);
console.log(tempArr.pop());
console.log(tempArr[0]);
console.log(tempArr.length);

tempArr.push(1);
tempArr.push(2);
tempArr.push(3);
tempArr.push(4);
tempArr.push(5);
tempArr.forEach(function (item) {
  console.log(item + 10);
});

const tempArr3 = [];
tempArr3.push(1);
tempArr3.push(2);
tempArr3.push(3);
tempArr3.push(4);
tempArr3.push(5);
tempArr3.forEach(function (item) {
  console.log(item + 10);
});

const tempFunc = (item) => {
  console.log(item);
};
tempArr3.forEach(tempFunc);
tempArr3.forEach(console.log);

tempArr.map(function (item) {
  return item ** 2;
});

//클래스 과제
// class 예약어를 사용하여 취미 목록을 만들어보자
// 취미는 이름과 방법, 소요 시간(분), 소요 비용(천원단위)로 저장
// toString 호출 시 아래와 같이 출력
// '이름' 은/는 '소요비용'만원을 사용하여 '소요시간'동안 즐길 수 있다.

class Hobby {
  name;
  how;
  time;
  cost;
  constructor(name, how, time, cost) {
    this.name = name;
    this.how = how;
    this.time = time;
    this.cost = cost / 1000;
  }
  toString() {
    return (
      this.name +
      "은/는 약" +
      this.cost / 10 +
      "만원을 사용하여" +
      this.time +
      "분 동안 즐길 수 있다"
    );
  }
}

const palworld = new Hobby(
  "펠월드",
  "스팀에서 펠월드를 사서 실행한다, 그리고 즐긴다",
  40 * 60,
  32000
);

console.log(palworld.toString());
// add / minus / multi / divide
// minus (add(, divide(multi(2,3), 4)) - 5
