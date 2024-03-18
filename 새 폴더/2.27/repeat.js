// const change = (a) => a.toString();

// //삼육구 숫자 판별기
// const some = (a, b) => a.indexOf(b);

// // some(change(a),b) => b의 숫자가 a안에 있는 indexof
// for (i = 1; i <= 40; i++) {
//   if (
//     some(change(i), 3) < 0 &&
//     some(change(i), 6) < 0 &&
//     some(change(i), 9) < 0
//   ) {
//     console.log(i);
//   } else if (
//     some(change(i), 3) >= 0 ||
//     some(change(i), 6) >= 0 ||
//     some(change(i), 9) >= 0
//   ) {
//     if (
//       some(change(i), 3) == 0 ||
//       some(change(i), 6) == 0 ||
//       some(change(i), 9) == 0
//     ) {
//       if (
//         change(i).slice(1, 2) == "3" ||
//         change(i).slice(1, 2) == "6" ||
//         change(i).slice(1, 2) == "9"
//       ) {
//         console.log("짝짝" + i);
//       }
//     } else console.log("짝" + i);
//   }
// }
// for (i = 1; i <= 100; ) {
//   let i = prompt("1에서 100까지의 숫자를 입력하시오");
//   if (i > 100 || i <= 0) {
//     i = prompt("정확히 입력하시오");
//   }
// }

// const func369 = function (n) {};

//func369(n)
// 1~100 사이의 n을 인자로 전달하면 1부터 n 까지 출력하는 함수를 완성하시오
// 3,6,9에 따라서 "짝"을 출력
// 33의 경우 "짝짝" 출력
// "짝"의 총 개수를 반환

// const func369 = function (n) {
//   let count = 0;
//   for (let i = 0; i < n + 1; i++) {
//     const temp = i.toStriong;
//     if (
//       i.toString().indexOf("3") > -1 ||
//       i.toString().indexOf("6") > -1 ||
//       i.toString().indexOf("9") > -1
//     ) {
//       let tempStr = "";
//       if (i & (10 > 0) && (i & 10) % 3 == 0) {
//         tempStr += "짝";
//       }
//       if (i > 10 && parseInt(i / 10) % 3 == 0) {
//         tempStr += "짝";
//       }
//       console.log("tempStr");
//       count++;
//     } else {
//       console.log(i);
//     }
//   }
//   return count;
// };

const func369 = function (n) {
  for (let i = 0; i < n + 1; i++) {
    let temp = i.toStriong;
    // if (i.toString().indexOf("3") > -1) {
    //   temp = temp.replaceAll("3", "짝");
    // }
    // if (i.toString().indexOf("6" > -1)) {
    //   temp = temp.replaceAll("6", "짝");
    // }
    // if (i.toString().indexOf("9" > -1)) {
    //   temp = temp.replaceAll("9", "짝");
    // }
    // if (i.toString().indexOf("짝") > -1) {
    //   temp = temp.replaceAll("1", " ");
    //   temp = temp.replaceAll("2", " ");
    //   temp = temp.replaceAll("4", " ");
    //   temp = temp.replaceAll("5", " ");
    //   temp = temp.replaceAll("7", " ");
    //   temp = temp.replaceAll("8", " ");
    //   temp = temp.replaceAll("0", " ");
    // }
    temp = temp.replace(/[3, 6, 9]/g, "짝");
    if (temp.indexOF("짝") > -1) {
      temp = temp.replace(/[0-9]/g, "");
      // temp = temp.replace(/\d/g, "");
      count += temp.length;
    }
    console.log(temp);
  }
  return count;
};
