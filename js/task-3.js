const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", changeName);

function changeName(e) {
  if (!e.target.value.trim().length) {
    refs.span.textContent = "Anonymous";
    return;
  }
  refs.span.textContent = e.target.value.trim();
}
