const listElem = document.getElementById("list");

class Board {
  static #count = 1; //class 자체에서 불러오게 되는 전역(고정값, 공통값 등에 쓰임)
  #id;
  #title;
  #writer;
  #createdAt;
  #isNotice = false;

  constructor(title, writer) {
    //constructor => 직접 기입하는걸 넣는게 좋음
    this.#id = Board.#count++;
    this.#title = title;
    this.#writer = writer;
    this.#createdAt = this.#createDate();
  }

  #createDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  getId = () => this.#id;
  getTitle = () => this.#title;
  getWriter = () => this.#writer;
  getCreatedAt = () => this.#createdAt;
  getIIsNotice = () => this.#isNotice;
}

const list = [
  new Board("오늘의 점심은?", "이정배"),
  new Board("오늘의 저녁은?", "이승배"),
  new Board("오늘의 과제는?", "방지완"),
];

console.log(list);

const reRender = () => {
  listElem.innerHTML = `<li class="header">
<ul class="row">
  <li class="box-center num">번호</li>
  <li class="box-center title">제목</li>
  <li class="box-center writer">글쓴이</li>
  <li class="box-center createdAt">등록일</li>
</ul>
</li>`;

  list.forEach((item) => {
    listElem.innerHTML += `<li class="item${
      item.getIIsNotice() ? " notice" : ""
    }">
    <ul class="row">
      <li class="box-center num">${item.getId()}</li>
      <li class="box-center title">${item.getTitle()}</li>
      <li class="box-center writer">${item.getWriter()}</li>
      <li class="box-center createdAt">${item.getCreatedAt()}</li>
    </ul>
  </li>`;
  });
};

reRender();

document.getElementById("add-btn").onclick = (e) => {
  e.preventDefault();
  console.log(e.target.form);
  console.log(e.target.form.title.value);
  list.push(new Board(e.target.form.title.value, e.target.form.writer.value));

  e.target.form.title.value = e.target.form.writer.value = "";
  reRender();
};
