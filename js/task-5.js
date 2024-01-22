function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//Посилання
const refs = {
  body: document.querySelector("body"),
  textColor: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
};

//Прослуховувач кнопки

refs.btn.addEventListener("click", btnClick);

//Функція зміни кольору та тексту
function btnClick() {
  const randomColor = getRandomHexColor();

  refs.body.style.backgroundColor = randomColor;
  refs.textColor.textContent = randomColor;
}
