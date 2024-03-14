const slideListElem = document.getElementById("slide-list");
const textItemElem = document.getElementById("textbox");

let idx = 0;
let isChanging = false; // 바뀔 때 버튼 비활성화하게

const opaChange = () => {
  if (idx == 4) idx = 0;
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[idx].classList.add("on");
  textItemElem.getElementsByClassName("on")[0].classList.remove("on");
  textItemElem.children[idx].classList.add("on");
  console.log(idx);

  //   textItemElem.getElementsByClassName("on")[0].classList.remove("on");
  //   textItemElem.children[idx].classList.add("on");
};
const slideFunc = () => {
  return setInterval(() => {
    idx++;
    opaChange();
  }, 2000);
};

let interval = slideFunc();

const playBtnsElem = document.getElementById("play-btns");

document.getElementById("pause").onclick = () => {
  playBtnsElem.classList.remove("on");
  clearInterval(interval);
};

document.getElementById("play").onclick = () => {
  playBtnsElem.classList.add("on");
  interval = slideFunc();
};

document.getElementById("first").onclick = () => {
  textItemElem.getElementsByClassName("on")[0].classList.remove("on");
  textItemElem.children[0].classList.add("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[0].classList.add("on");
  idx = 0;
};

document.getElementById("second").onclick = () => {
  textItemElem.getElementsByClassName("on")[0].classList.remove("on");
  textItemElem.children[1].classList.add("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[1].classList.add("on");
  idx = 1;
};

document.getElementById("third").onclick = () => {
  textItemElem.getElementsByClassName("on")[0].classList.remove("on");
  textItemElem.children[2].classList.add("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[2].classList.add("on");
  idx = 2;
};

document.getElementById("forth").onclick = () => {
  textItemElem.getElementsByClassName("on")[0].classList.remove("on");
  textItemElem.children[3].classList.add("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[3].classList.add("on");
  idx = 3;
};

// const createInterval = () => {
//   return;
// };

// 1. 어디에서 뭐로 실행하는가(실행 기반 함수 어디?)
// 2. 아래 2개의 코드에서 [0], [idx] 의미
// slideListElem.getElementsByClassName("on")[0].classList.remove("on");
// slideListElem.children[idx].classList.add("on");
//
// 3. JS에서 opacity를 바꾸기 위해 쓰는 명령어??(위치값 이동은 translateX 였는데)
// 4. 상기 코드가 작동하지 않는 이유
