// 가위바위보
// scissors rock cloth

const SRC = {
  scissors: 0,
  rock: 1,
  cloth: 2,
  0: "scissors",
  1: "rock",
  2: "cloth",
};

// 바위 > 가위 => 1 - 0 => (1 + 3) % 3
// 보 > 바위 => 2 - 1 => (1 + 3) % 3
// 가위 > 보 => 0 - 2 => (-2 + 3) % 3

const resultElem = document.getElementById("result");
const comSelElem = document.getElementById("com-sel");
const userSelElem = document.getElementById("user-sel");
const userSciElem = userSelElem.getElementsByClassName("scissors")[0];
const userRocElem = userSelElem.getElementsByClassName("rock")[0];
const userCloElem = userSelElem.getElementsByClassName("cloth")[0];

const play = (userSel) => {
  const comSel = Math.floor(Math.random() * 3);
  console.log(comSel);
  comSelElem.className = "";
  comSelElem.classList.add(SRC[comSel]);
  userSelElem.className = "";
  userSelElem.classList.add(SRC[userSel]);

  //   const userSel = 1;
  let result = (userSel - comSel + 3) % 3;
  if (result == 1) {
    result = "WIN";
  } else if (result == 2) {
    result = "Lose";
  } else {
    result = "Draw";
  }
  return result;
};

userSciElem.onclick = () => {
  resultElem.innerHTML = play(SRC.scissors);
};

userRocElem.onclick = () => {
  resultElem.innerHTML = play(SRC.rock);
};

userCloElem.onclick = () => {
  resultElem.innerHTML = play(SRC.cloth);
};
