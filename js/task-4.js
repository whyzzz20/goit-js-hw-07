
//Посилання на форму та добавляння прослуховувача
const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSuccess);


//Функція обробки форми
function onFormSuccess(e) {
  //Скидуємо стандартні налаштування
  e.preventDefault();
  //Валідація форми
  if (
    e.target.elements.password.value.trim() === "" ||
    e.target.elements.email.value.trim() === ""
  ) {
    alert("All form fields must be filled in");
    return;
  }
  //Збір заповнених полей
  const data = {};

  [...e.target.elements].forEach((element) => {
    if (element.nodeName === "INPUT") {
      data[element.name] = element.value.trim();
    }
  });
  //Виведення результату та скидання форми
  console.log(data);
  formEl.reset();
}
