slideListElem = document.getElementById("slide-list");
textListElem = document.getElementById("textbox");

let idx = 0;

const opaChange = () => {
  if (idx == 11) idx = 0;
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[idx].classList.add("on");
  textListElem.getElementsByClassName("on")[0].classList.remove("on");
  textListElem.children[idx].classList.add("on");
};

const slideFunc = () => {
  return setInterval(() => {
    idx++;
    opaChange();
  }, 4000);
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

document.getElementById("1").onclick = () => {
  textListElem.getElementsByClassName("on")[0].classList.remove("on");
  textListElem.children[0].classList.add("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[0].classList.add("on");
  idx = 0;
};

document.getElementById("2").onclick = () => {
  textListElem.getElementsByClassName("on")[0].classList.remove("on");
  textListElem.children[1].classList.add("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[1].classList.add("on");
  idx = 1;
};

document.getElementById("3").onclick = () => {
  textListElem.getElementsByClassName("on")[0].classList.remove("on");
  textListElem.children[2].classList.add("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[2].classList.add("on");
  idx = 2;
};

document.getElementById("4").onclick = () => {
  textListElem.getElementsByClassName("on")[0].classList.remove("on");
  textListElem.children[3].classList.add("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[3].classList.add("on");
  idx = 3;
};

document.getElementById("5").onclick = () => {
  textListElem.getElementsByClassName("on")[0].classList.remove("on");
  textListElem.children[4].classList.add("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[4].classList.add("on");
  idx = 4;
};

document.getElementById("6").onclick = () => {
  textListElem.getElementsByClassName("on")[0].classList.remove("on");
  textListElem.children[5].classList.add("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[5].classList.add("on");
  idx = 5;
};

document.getElementById("7").onclick = () => {
  textListElem.getElementsByClassName("on")[0].classList.remove("on");
  textListElem.children[6].classList.add("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[6].classList.add("on");
  idx = 6;
};

document.getElementById("8").onclick = () => {
  textListElem.getElementsByClassName("on")[0].classList.remove("on");
  textListElem.children[7].classList.add("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[7].classList.add("on");
  idx = 7;
};

document.getElementById("9").onclick = () => {
  textListElem.getElementsByClassName("on")[0].classList.remove("on");
  textListElem.children[8].classList.add("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[8].classList.add("on");
  idx = 8;
};

document.getElementById("10").onclick = () => {
  textListElem.getElementsByClassName("on")[0].classList.remove("on");
  textListElem.children[9].classList.add("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[9].classList.add("on");
  idx = 9;
};

document.getElementById("11").onclick = () => {
  textListElem.getElementsByClassName("on")[0].classList.remove("on");
  textListElem.children[10].classList.add("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.children[10].classList.add("on");
  idx = 10;
};

document.getElementById("pageup-btns").onclick = () => {
  textListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  if (idx - 1 < 0) idx = 11;
  slideListElem.children[idx - 1].classList.add("on");
  textListElem.children[idx - 1].classList.add("on");
  idx--;
};

document.getElementById("pageup-btns").onclick = () => {
  textListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  if (idx - 1 < 0) idx = 11;
  slideListElem.children[idx - 1].classList.add("on");
  textListElem.children[idx - 1].classList.add("on");
  idx--;
};

document.getElementById("pagedown-btns").onclick = () => {
  textListElem.getElementsByClassName("on")[0].classList.remove("on");
  slideListElem.getElementsByClassName("on")[0].classList.remove("on");
  if (idx + 1 > 10) idx = 0;
  slideListElem.children[idx + 1].classList.add("on");
  textListElem.children[idx + 1].classList.add("on");
  idx++;
};
//오답노트

//Classname에 .onclick!!!! 하지말기(Elements 즉 복수이므로 onclick 함수 안됌)
