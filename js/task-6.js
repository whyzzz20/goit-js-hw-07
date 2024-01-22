function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//Посилання на елементи
const refs = {
  input: document.querySelector("#controls>input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", makeClick);

//Змінні для розмітки
let width = 30;
let height = 30;
let markup = "";
//Добавляння розмітки
function makeClick(e) {
  if (refs.input.value > 100 || refs.input.value < 0) {
    return;
  }

  if (refs.boxes.children.length) {
    destroyBoxes();
  }

  refs.boxes.innerHTML = createBoxes(refs.input.value);
  refs.input.value = "";
}

//Створення розмітки
function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    markup += `<div style="background-color: ${getRandomHexColor()};width:${width}px;height:${height}px;"></div>`;
    width += 10;
    height += 10;
  }

  return markup;
}

//Скидання розмітки

refs.destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  width = 30;
  height = 30;
  markup = "";
}
