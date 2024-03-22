const buf1 = Buffer.from("abcdefghijklmnopqrstu");
console.log(buf1.toString()); // 61 62 63 64
console.log(buf1.length, buf1.toString().length);
const buf2 = Buffer.from("abcdefghijklmnopqrstu".toUpperCase());
console.log(buf2);
console.log(buf2.toString());
console.log(buf2.length, buf2.toString().length);

const buf3 = Buffer.from("가각간갇갈");
console.log(buf3);
console.log(buf3.length, buf3.toString().length);

console.log("ㄱ".charCodeAt().toString(16));
console.log("\u3131");

console.log(Buffer.from(' !"'));
