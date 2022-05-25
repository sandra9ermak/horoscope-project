const birthNumberSelect = document.querySelector("#birthNumberSelect");

for (let index = 1; index <= 31; index++) {
  const markupNumber = `<option value=${index}>${index}</option>`;

  birthNumberSelect.insertAdjacentHTML("beforeend", markupNumber);
}

const birthYearSelect = document.querySelector("#birthYearSelect");

for (let index = 1990; index <= 2022; index++) {
  const markupYear = `<option value=${index}>${index}</option>`;

  birthYearSelect.insertAdjacentHTML("beforeend", markupYear);
}

const birthMonthSelect = document.querySelector("#birthMonthSelect");

for (let index = 1; index <= 12; index++) {
  const markupMonth = `<option value=${index}>${index}</option>`;

  birthMonthSelect.insertAdjacentHTML("beforeend", markupMonth);
}

/*----------------------------------------------------------------*/

const qustionForm = document.querySelector(".question__form");
const questionFormButton = document.querySelector(
  ".question__form--buttonLink"
);

const changeSelect = () => {
  const errorMessage = document.querySelector(".errorMessageContainer");

  birthNumberSelect.addEventListener("change", () => {
    birthNumberSelect.classList.add("option-change");

    if (birthNumberSelect.value === "Day") {
      errorMessage.classList.add("error-visible");
    } else {
      errorMessage.classList.remove("error-visible");
    }

    birthMonthSelect.addEventListener("change", () => {
      birthMonthSelect.classList.add("option-change");

      if (birthMonthSelect.value === "Month") {
        errorMessage.classList.add("error-visible");
      } else {
        errorMessage.classList.remove("error-visible");
      }

      birthYearSelect.addEventListener("change", () => {
        birthYearSelect.classList.add("option-change");
        questionFormButton.classList.add("btn-enabled");

        zodiac(birthNumberSelect.value, birthMonthSelect.value);

        if (birthYearSelect.value === "Year") {
          errorMessage.classList.add("error-visible");
        } else {
          errorMessage.classList.remove("error-visible");
        }
      });
    });
  });
};

const capricornImage = document.querySelector(".capricornImage");
const piscesImage = document.querySelector(".piscesImage");
const ariesImage = document.querySelector(".ariesImage");
const aquaImage = document.querySelector(".aquaImage");
const taurusImage = document.querySelector(".taurusImage");
const geminiImage = document.querySelector(".geminiImage");
const cancerImage = document.querySelector(".cancerImage");
const leoImage = document.querySelector(".leoImage");
const virgoImage = document.querySelector(".virgoImage");
const libraImage = document.querySelector(".libraImage");
const scorpioImage = document.querySelector(".scorpioImage");
const sagittariusImage = document.querySelector(".sagittariusImage");

const zodiacSignName = document.querySelector(".zodiacSignName");

const zodiac = (birthNumber, birthMonth) => {
  if (
    (birthMonth === "1" && birthNumber >= "19") ||
    (birthMonth === "2" && birthNumber <= "18")
  ) {
    aquaImage.classList.add("zodiacSignImage-visible");
    zodiacSignName.innerHTML = "Aquarius";

    piscesImage.classList.remove("zodiacSignImage-visible");
    ariesImage.classList.remove("zodiacSignImage-visible");
    taurusImage.classList.remove("zodiacSignImage-visible");
    geminiImage.classList.remove("zodiacSignImage-visible");
    cancerImage.classList.remove("zodiacSignImage-visible");
    leoImage.classList.remove("zodiacSignImage-visible");
    virgoImage.classList.remove("zodiacSignImage-visible");
    libraImage.classList.remove("zodiacSignImage-visible");
    scorpioImage.classList.remove("zodiacSignImage-visible");
    sagittariusImage.classList.remove("zodiacSignImage-visible");
    capricornImage.classList.remove("zodiacSignImage-visible");
  } else if (
    (birthMonth == "2" && birthNumber >= "19") ||
    (birthMonth == "3" && birthNumber <= "20")
  ) {
    piscesImage.classList.add("zodiacSignImage-visible");
    zodiacSignName.innerHTML = "Pisces";

    aquaImage.classList.remove("zodiacSignImage-visible");
    ariesImage.classList.remove("zodiacSignImage-visible");
    taurusImage.classList.remove("zodiacSignImage-visible");
    geminiImage.classList.remove("zodiacSignImage-visible");
    cancerImage.classList.remove("zodiacSignImage-visible");
    leoImage.classList.remove("zodiacSignImage-visible");
    virgoImage.classList.remove("zodiacSignImage-visible");
    libraImage.classList.remove("zodiacSignImage-visible");
    scorpioImage.classList.remove("zodiacSignImage-visible");
    sagittariusImage.classList.remove("zodiacSignImage-visible");
    capricornImage.classList.remove("zodiacSignImage-visible");
  } else if (
    (birthMonth == "3" && birthNumber >= "21") ||
    (birthMonth == "4" && birthNumber <= "19")
  ) {
    ariesImage.classList.add("zodiacSignImage-visible");
    zodiacSignName.innerHTML = "Aries";

    piscesImage.classList.remove("zodiacSignImage-visible");
    aquaImage.classList.remove("zodiacSignImage-visible");
    taurusImage.classList.remove("zodiacSignImage-visible");
    geminiImage.classList.remove("zodiacSignImage-visible");
    cancerImage.classList.remove("zodiacSignImage-visible");
    leoImage.classList.remove("zodiacSignImage-visible");
    virgoImage.classList.remove("zodiacSignImage-visible");
    libraImage.classList.remove("zodiacSignImage-visible");
    scorpioImage.classList.remove("zodiacSignImage-visible");
    sagittariusImage.classList.remove("zodiacSignImage-visible");
    capricornImage.classList.remove("zodiacSignImage-visible");
  } else if (
    (birthMonth == "4" && birthNumber >= "20") ||
    (birthMonth == "5" && birthNumber <= "20")
  ) {
    taurusImage.classList.add("zodiacSignImage-visible");
    zodiacSignName.innerHTML = "Taurus";

    piscesImage.classList.remove("zodiacSignImage-visible");
    aquaImage.classList.remove("zodiacSignImage-visible");
    ariesImage.classList.remove("zodiacSignImage-visible");
    geminiImage.classList.remove("zodiacSignImage-visible");
    cancerImage.classList.remove("zodiacSignImage-visible");
    leoImage.classList.remove("zodiacSignImage-visible");
    virgoImage.classList.remove("zodiacSignImage-visible");
    libraImage.classList.remove("zodiacSignImage-visible");
    scorpioImage.classList.remove("zodiacSignImage-visible");
    sagittariusImage.classList.remove("zodiacSignImage-visible");
    capricornImage.classList.remove("zodiacSignImage-visible");
  } else if (
    (birthMonth == "5" && birthNumber >= "21") ||
    (birthMonth == "6" && birthNumber <= "21")
  ) {
    geminiImage.classList.add("zodiacSignImage-visible");
    zodiacSignName.innerHTML = "Gemini";

    piscesImage.classList.remove("zodiacSignImage-visible");
    aquaImage.classList.remove("zodiacSignImage-visible");
    taurusImage.classList.remove("zodiacSignImage-visible");
    ariesImage.classList.remove("zodiacSignImage-visible");
    cancerImage.classList.remove("zodiacSignImage-visible");
    leoImage.classList.remove("zodiacSignImage-visible");
    virgoImage.classList.remove("zodiacSignImage-visible");
    libraImage.classList.remove("zodiacSignImage-visible");
    scorpioImage.classList.remove("zodiacSignImage-visible");
    sagittariusImage.classList.remove("zodiacSignImage-visible");
    capricornImage.classList.remove("zodiacSignImage-visible");
  } else if (
    (birthMonth == "6" && birthNumber >= "22") ||
    (birthMonth == "7" && birthNumber <= "22")
  ) {
    cancerImage.classList.add("zodiacSignImage-visible");
    zodiacSignName.innerHTML = "Cancer";

    piscesImage.classList.remove("zodiacSignImage-visible");
    aquaImage.classList.remove("zodiacSignImage-visible");
    taurusImage.classList.remove("zodiacSignImage-visible");
    ariesImage.classList.remove("zodiacSignImage-visible");
    geminiImage.classList.remove("zodiacSignImage-visible");
    leoImage.classList.remove("zodiacSignImage-visible");
    virgoImage.classList.remove("zodiacSignImage-visible");
    libraImage.classList.remove("zodiacSignImage-visible");
    scorpioImage.classList.remove("zodiacSignImage-visible");
    sagittariusImage.classList.remove("zodiacSignImage-visible");
    capricornImage.classList.remove("zodiacSignImage-visible");
  } else if (
    (birthMonth == "7" && birthNumber >= "23") ||
    (birthMonth == "8" && birthNumber <= "22")
  ) {
    leoImage.classList.add("zodiacSignImage-visible");
    zodiacSignName.innerHTML = "Leo";

    piscesImage.classList.remove("zodiacSignImage-visible");
    aquaImage.classList.remove("zodiacSignImage-visible");
    taurusImage.classList.remove("zodiacSignImage-visible");
    ariesImage.classList.remove("zodiacSignImage-visible");
    cancerImage.classList.remove("zodiacSignImage-visible");
    geminiImage.classList.remove("zodiacSignImage-visible");
    virgoImage.classList.remove("zodiacSignImage-visible");
    libraImage.classList.remove("zodiacSignImage-visible");
    scorpioImage.classList.remove("zodiacSignImage-visible");
    sagittariusImage.classList.remove("zodiacSignImage-visible");
    capricornImage.classList.remove("zodiacSignImage-visible");
  } else if (
    (birthMonth == "8" && birthNumber >= "23") ||
    (birthMonth == "9" && birthNumber <= "22")
  ) {
    virgoImage.classList.add("zodiacSignImage-visible");
    zodiacSignName.innerHTML = "Virgo";

    piscesImage.classList.remove("zodiacSignImage-visible");
    aquaImage.classList.remove("zodiacSignImage-visible");
    taurusImage.classList.remove("zodiacSignImage-visible");
    ariesImage.classList.remove("zodiacSignImage-visible");
    cancerImage.classList.remove("zodiacSignImage-visible");
    geminiImage.classList.remove("zodiacSignImage-visible");
    leoImage.classList.remove("zodiacSignImage-visible");
    libraImage.classList.remove("zodiacSignImage-visible");
    scorpioImage.classList.remove("zodiacSignImage-visible");
    sagittariusImage.classList.remove("zodiacSignImage-visible");
    capricornImage.classList.remove("zodiacSignImage-visible");
  } else if (
    (birthMonth == "9" && birthNumber >= "23") ||
    (birthMonth == "10" && birthNumber <= "22")
  ) {
    libraImage.classList.add("zodiacSignImage-visible");
    zodiacSignName.innerHTML = "Libra";

    piscesImage.classList.remove("zodiacSignImage-visible");
    aquaImage.classList.remove("zodiacSignImage-visible");
    taurusImage.classList.remove("zodiacSignImage-visible");
    ariesImage.classList.remove("zodiacSignImage-visible");
    cancerImage.classList.remove("zodiacSignImage-visible");
    geminiImage.classList.remove("zodiacSignImage-visible");
    leoImage.classList.remove("zodiacSignImage-visible");
    virgoImage.classList.remove("zodiacSignImage-visible");
    scorpioImage.classList.remove("zodiacSignImage-visible");
    sagittariusImage.classList.remove("zodiacSignImage-visible");
    capricornImage.classList.remove("zodiacSignImage-visible");
  } else if (
    (birthMonth == "10" && birthNumber >= "23") ||
    (birthMonth == "11" && birthNumber <= "21")
  ) {
    scorpioImage.classList.add("zodiacSignImage-visible");
    zodiacSignName.innerHTML = "Scorpio";

    piscesImage.classList.remove("zodiacSignImage-visible");
    aquaImage.classList.remove("zodiacSignImage-visible");
    taurusImage.classList.remove("zodiacSignImage-visible");
    ariesImage.classList.remove("zodiacSignImage-visible");
    cancerImage.classList.remove("zodiacSignImage-visible");
    geminiImage.classList.remove("zodiacSignImage-visible");
    leoImage.classList.remove("zodiacSignImage-visible");
    virgoImage.classList.remove("zodiacSignImage-visible");
    libraImage.classList.remove("zodiacSignImage-visible");
    sagittariusImage.classList.remove("zodiacSignImage-visible");
    capricornImage.classList.remove("zodiacSignImage-visible");
  } else if (
    (birthMonth == "11" && birthNumber >= "22") ||
    (birthMonth == "12" && birthNumber <= "21")
  ) {
    sagittariusImage.classList.add("zodiacSignImage-visible");
    zodiacSignName.innerHTML = "Sagittarius";

    piscesImage.classList.remove("zodiacSignImage-visible");
    aquaImage.classList.remove("zodiacSignImage-visible");
    taurusImage.classList.remove("zodiacSignImage-visible");
    ariesImage.classList.remove("zodiacSignImage-visible");
    cancerImage.classList.remove("zodiacSignImage-visible");
    geminiImage.classList.remove("zodiacSignImage-visible");
    leoImage.classList.remove("zodiacSignImage-visible");
    virgoImage.classList.remove("zodiacSignImage-visible");
    libraImage.classList.remove("zodiacSignImage-visible");
    scorpioImage.classList.remove("zodiacSignImage-visible");
    capricornImage.classList.remove("zodiacSignImage-visible");
  } else if (
    (birthMonth == "12" && birthNumber >= "22") ||
    (birthMonth == "1" && birthNumber <= "19")
  ) {
    capricornImage.classList.add("zodiacSignImage-visible");
    zodiacSignName.innerHTML = "Capricorn";

    piscesImage.classList.remove("zodiacSignImage-visible");
    aquaImage.classList.remove("zodiacSignImage-visible");
    taurusImage.classList.remove("zodiacSignImage-visible");
    ariesImage.classList.remove("zodiacSignImage-visible");
    cancerImage.classList.remove("zodiacSignImage-visible");
    geminiImage.classList.remove("zodiacSignImage-visible");
    leoImage.classList.remove("zodiacSignImage-visible");
    virgoImage.classList.remove("zodiacSignImage-visible");
    libraImage.classList.remove("zodiacSignImage-visible");
    scorpioImage.classList.remove("zodiacSignImage-visible");
    sagittariusImage.classList.remove("zodiacSignImage-visible");
  }
};
