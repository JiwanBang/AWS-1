const count = function (n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(n);
      resolve(n);
      reject("에러났어");
    }, 1000);
  });
};

count(1).then((data) => {
  return count(data + 1);
  //   console.log("완료");
});

count(2).catch((err) => {
  console.log(err);
});

const asyncCount = async () => {
  try {
    // Promise의 상태:
    // Pending - 코드가 실행되고 있는 상태, 결과가 나오지 않은 상태
    // fulfilled : 성공(resolve)
    // Rejected : 실패(reject)
    let nowCount = 1;
    await count(nowCount);
    nowCount++;
    await count(nowCount);
    nowCount++;
    await count(nowCount);
    nowCount++;
  } catch (err) {
    console.log(err);
  }
};

asyncCount(); // == promise 인스턴스 객체와 같다
