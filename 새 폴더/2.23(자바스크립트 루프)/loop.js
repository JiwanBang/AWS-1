// let go = 1;
// while(true){
//     console.log(new Date());
//     // if(++go == 11) break;
// //     go += 1;
// //     if(go == 11){
// //     break;
// //     };
// }

// let go = 1;
// while(++go <= 11){
//     console.log(new Date());
// }
// while(){} << 버려라 ㅇㅅㅇ

// for(let i = 0, j = 10; i < 10 || j > -10; i++, j--){
//     console.log('i : ' + i)
//     console.log('j : ' + j)
// }

// for(let i = 2; i <= 9; i++){
//     for(let n = 1; n <= 10; n++){
//         console.log(i + 'x' + n + '=' + n * i)
//     }
// }

// for(let i = 2, j = 1; i < 10 ; j++){
//         console.log(i + 'x' + j + '=' + (i * j))
//         if (j > 8){
//             i++;
//             j = 0;
//         }
// }

// for(let i = 1; i< 72; i++){
//     console.log(parseInt(i / 9 + 2) + "x" + (i % 9 + 1) + "=" + (parseInt(i / 9 + 2) * (i % 9 + 1)));
// }

// document.write("")
// for(let i = 2; i <= 9; i++){
//     for(let j = 1; j < 10; j++){
//         document.write(i + 'x' + j + '=' + j * i + "<br>")
//     }
// }

// Array(배열)
// 연속된 순서가 있는 이름없는 데이터의 목록

const arr = ["이승배", "이정배", "박성민", "방지완", "손민복"];
console.log(arr[0]);

for(let i = 0; i <= 4; i++){
    console.log((arr[i]) + '입니다');
}

let a = 0;
// var b = 2;
{
    let a = 1;
    console.log(a)
    // console.log(b)
    // var b = 3;
}

arr[5] = "노가민";
arr.push('정구진');

const something = [];
for(let i = 0; i < 11 ; i++){
    something.push(10 - i)
}

//i => index(배열의 순서에 대해서)

console.log(something);
