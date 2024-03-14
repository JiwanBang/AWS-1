const slideListElem = document.getElementById("slide-list");
const navElem = document.getElementById("nav");
slideListElem.style.transform = `translate(-1000px)`;

let idx = 1;
let isMoving = false;

const move = () => {
  isMoving = true;
  navElem.getElementsByClassName("on")[0].classList.remove("on");
  navElem.children[(idx + 3) % 4].classList.add("on");

  slideListElem.classList.add("on");
  slideListElem.style.transform = `translateX(-${idx}000px)`;
  console.log(idx);

  setTimeout(() => {
    isMoving = false;
    slideListElem.classList.remove("on");
    if (idx == 5) {
      idx = 1;
    } else if (idx == 0) {
      idx = 4;
    }
    slideListElem.style.transform = `translateX(-${idx}000px)`;
  }, 1000);
  //   if (idx == 5) {
  //     setTimeout(() => {
  //       slideListElem.classList.remove("on");
  //       idx = 1;
  //       slideListElem.style.transform = `translateX(-${idx}000px)`;
  //     }, 1900);
  //   }

  //   if (idx == 0) {
  //     setTimeout(() => {
  //       slideListElem.classList.remove("on");
  //       idx = 4;
  //       slideListElem.style.transform = `translateX(-${idx}000px)`;
  //     }, 1900);
  //   }
};

const createInterval = () => {
  return setInterval(() => {
    idx++;
    move();
  }, 2000);
};

let interval = createInterval();

const playBtnsElem = document.getElementById("play-btns");

document.getElementById("pause").onclick = () => {
  playBtnsElem.classList.remove("on");
  //   slideListElem.classList.remove("on");
  clearInterval(interval);
};

document.getElementById("play").onclick = () => {
  playBtnsElem.classList.add("on");
  //   slideListElem.classList.add("on");
  interval = createInterval();
  //   setinterval을 return(setinternal을 함수로 만들어서 쉽게 호출해줌)
};

document.getElementById("prev-btn").onclick = () => {
  if (isMoving) return;
  idx--;
  move();
};
document.getElementById("next-btn").onclick = () => {
  if (isMoving) return;
  idx++;
  move();
};

//1. settimeout 정상작동안함
//2. 1이나 5로 버튼 이동시 이상하게 이동
//
