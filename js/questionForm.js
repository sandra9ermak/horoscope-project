const questionFormInputAll = document.querySelectorAll('input[type="radio"]');
const questionFormButton = document.querySelector(
  ".question__form--buttonLink"
);

for (let i = 0; i < questionFormInputAll.length; i++) {
  questionFormInputAll[i].addEventListener("click", () => {
    questionFormButton.classList.add("btn-enabled");
  });
}
