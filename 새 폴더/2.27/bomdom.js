console.log(window);
console.log(location);
console.log(history);
// window.open("http://naver.com");
// open();
// window.location
// window.history
// window.console.log()
// a = 0;
// console.log(window.a);
// window.a = 1;

// function a() {}
// const b = () => {};

// console.log(window.a);
// console.log(window.b); //undifined

document.getElementById("test").style.color = "blue";
document.getElementById("test").innerHTML =
  "정배야 <span> 넌 찾아서 알고있었지?</span>";
document.getElementsByTagName("span")[0].style.color = "red";
const temp = document.getElementsByTagName("span");
for (let i = 0; i < temp.length; i++) {
  temp[i].style.fontSize = "32px";
}

document.getElementById("test").onclick = function (e) {
  //   open("http://naver.com", "_blank");
  console.log(e);
};

// window.onclick = (e) => {
//   console.log(e);
// };

//Event
// Handler | Listener  | on
// Handler << 이벤트 발생 시 실행되는 함수
// Listener << 이벤트 발생을 받는 객체
// on << 이벤트 발생 시 실행되는 함수

//onclick = () => {}
// '() => {}' handler
//Listener VS on
//Listener는 통합 관리 시스템 | on은 하나하나가 갖고 있는 실행 함수

// 클릭했을 때 --> onclick();

[...document.getElementsByClassName("test")].forEach((item) => {
  item.innerHTML = "이정배";
  item.onclick = (e) => {
    alert("정배야, 총대를 메라");
  };
});

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

// document.getElementsByTagName("tbody").innerHTML = "<td></td>";

// for (i = 0; i < 9; i++) {
//   data.push(arr[i]);
// }

//arr 기준으로 테이블에 목록 띄우기
// 번호, 이름, 나이 누르면 항목별로 정렬하기
const tbodyElem = document.getElementById("student-list");
tbodyElem.innerHTML = "";
arr.forEach((item, i) => {
  item.num = i + 1;
  tbodyElem.innerHTML += `<tr>
    <td>${item.num}</td>
    <td>${item.name}</td>
    <td>${item.age}</td>
    </tr>`;
  // 템플릿 리터럴(`)=백틱(텍스트를 만듬) 백틱이 다 끝날때까지 String으로 취급(줄바꿈 등)
});

const drawlist = (sortFunc) => {
  tbodyElem.innerHTML = "";
  arr.sort(sortFunc);
  arr.forEach(({ num, name, age }) => {
    tbodyElem.innerHTML += `<tr>
          <td>${num}</td>
          <td>${name}</td>
          <td>${age}</td>
          </tr>`;
  });
};

document.getElementById("num").onclick = () => {
  drawlist((a, b) => a.num - b.num);
};

document.getElementById("name").onclick = () => {
  drawlist((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
};
document.getElementById("age").onclick = () => {
  drawlist((a, b) => a.age - b.age);
};

// 계산기 0 ~ 9 누를 수 있고 사칙 연산이 간으하며 결과를 웹페이지에 출력하도록(alert X)

//다음 시간에 풀이 후 심화 및 가위바위보 게임 만들기(HTML 클릭 버전) << 월요일 풀이
//내일 10시 디코 "AWS 온라인" 음성채팅방에
