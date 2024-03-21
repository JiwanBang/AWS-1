const path = require("path");

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename)); //파일이름
console.log(path.dirname(__filename)); //경로
console.log(path.extname(__filename)); //확장명
// console.log(path.join(__dirname, "public", ".."));
