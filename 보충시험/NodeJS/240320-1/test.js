// 계산기 가져와서 사용해보자

// const calc = require("./calc");

// console.log(calc.add(1, 2)); //3
// console.log(calc.minus(1, 2)); //-1
// console.log(calc.multiple(1, 2)); //2
// console.log(calc.divide(1, 2)); //0.5

const { add, minus, devide, multiple } = require("./calc");

console.log(add(1, 2));
console.log(minus(1, 2));
console.log(multiple(1, 2));
console.log(devide(1, 2));

//구조분해할당
