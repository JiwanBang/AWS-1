let arr = [1, 2, 3];
//js에서 배열은 []로 만든다

console.log(arr[1]);
//순서에 대한 숫자를 index라고 부른다

for (let i = 0; i < 3; i++) {
  console.log(arr[i]);
}

const obj = {
  name: "이정배",
  age: 23,
};

console.log(obj.name);
Math.random();

const students = [];
const ljb = {
  name: "이정배",
  age: 23,
  hobby: "운동",
};
console.log(students.length);
students.push(ljb);
console.log(students.length);
console.log(students[0].hobby);
console.log(ljb.hobby);
students[0].hobby = "음악";
console.log(ljb.hobby);
students.push({
  name: "박성민", //프로퍼티
  age: 34,
  hobby: "운동",
});
console.log(students);

const arr1 = [1, "2", [1, 2, 3], {}, true, undefined, null];

// scope => {}
// for(){스코프}
// if(){스코프}
// while(){스코프}
// {}
// 블록 스코프
{
  let arr = [3, 2, 1];
  // 위에서 선언, 할당, 초기화한 놈과 다른 놈이다
}
for (let i = 0; i < 10; i++) {
  console.log(i);
} //
i = 10; //전역 변수
for (; i < 10; i++) {
  console.log(i);
} //지역변수, 값이 없으면 올라가서 전역 변수를 찾음

const allstu = []; //먼저 배열을 만들고, 배열 안에 객체를 넣기
const jiwan = {
  name: "방지완",
  age: 29,
  hobby: "게임",
};

allstu.push(jiwan);

allstu.push({
  name: "정구진",
  age: 24,
  hobby: "운동",
});

allstu.push({
  name: "이동찬",
  age: 29,
  hobby: "게임",
});

allstu.push({
  name: "이승배",
  age: 27,
  hobby: "게임",
});

allstu.push({
  name: "이정배",
  age: 25,
  hobby: "운동",
});

allstu.push({
  name: "손민복",
  age: 29,
  hobby: "뒹굴",
});

allstu.push({
  name: "노가민",
  age: 31,
  hobby: "게임",
});

allstu.push({
  name: "김강문",
  age: 28,
  hobby: "게임",
});

allstu.push({
  name: "박성민",
  age: 34,
  hobby: "운동",
});

console.log(allstu);

//" 저는 몇 살의 박성민 입니다. 취미는 운동입니다 "
// 23, 2000년생 => 저는 00년생 이정배입니다
for (let i = 0; i < 9; i++) {
  console.log(
    "저는 " +
      allstu[i].age +
      "살의 " +
      allstu[i].name +
      "입니다. 취미는 " +
      allstu[i].hobby +
      "입니다"
  );
  let age = (2023 - allstu[i].age).toString();
  //for{} 안에 지역변수로 age를 재선언(밖에 있는 전역변수 age와는 별개)
  console.log("저는 " + age[2] + age[3] + "년생" + allstu[i].name + "입니다");
}

// 객체에서의 {}는 객체 리터럴

{
  const arr = [1, 2, 3, 4, 5, 6];
  arr.push(7); //배열의 마지막에 더하기
  console.log(arr.toString());
  arr.pop(); //배열에서 맨 뒤 빼기
  console.log(arr.toString());
  arr.shift(); //맨 앞 빼기
  console.log(arr.toString());
  arr.unshift(0); //맨 앞에 붙여주기
  console.log(arr.toString());
  arr.reverse(); //뒤집기
  console.log(arr.toString());
  arr.sort(); //정렬
  console.log(arr.toString());
  const arr1 = arr.slice(0, 3);
  console.log(arr1.toString());
  console.log(arr.join(" - "));
  // console.log(arr.find(()=>{}))
  console.log(arr.indexOf(3));
}
{
  const obj = {};
  obj.a = 1;
  console.log(obj);
  obj.allstu = allstu;
  console.log(obj);
}

//심화
{
  const obj = { a: 1 };
  console.log(obj.a);
  console.log(obj["a"]);

  obj[0] = 1;
  obj[1] = 2;
  obj[2] = 3;
  console.log(obj[1]);
  const arr = [1, 2, 3];
  //   arr == obj 인걸까?
  // 배열도 결국 객체다!
  // prototype이 가지고있는 method가 다를 뿐
}

//심화 2
{
  const arr = [1, 2];
  const obj = { arr };
  //위에서 선언한 변수를 통째로 바로 넣을 수도 있음
  console.log(obj);
  const obj2 = { arr1: [1, 2, 3] };
  const { arr1, arr2 } = obj2; // 구조분해할당
  console.log(arr1);
  console.log(arr2);
  const [a, b] = arr;
  console.log(a);
  console.log(b);
  //게임으로 치면 str, int 같은 스테이터스 참조할때 씀 or
  //좋아요 싫어요 등 배열 형태에서 여러가지 수를 한꺼번에
  //   const [c, d] = arr1;
  //   console.log(c);
  //   console.log(d);
  const [c, ...d] = arr1; //... : 스프레드 연산자(d의 이후에 몇개에 붙었건 전부 d로 함)
  console.log(c);
  console.log(d);
  //보통 구조분해할당은 const로 씀(이름을 가져올수 없어서)
}

//내일은 즐거운 함수~

let a = "안녕하세요";
console.log("안녕하세요".slice(0, 2));
