const process = () => {
  const progressLineConvenientTime = document.getElementById(
    "progressLineConvenientTime"
  );
  const progressLineInsomnia = document.getElementById("progressLineInsomnia");
  const progressLinePlans = document.getElementById("progressLinePlans");
  const progressLineAfter = document.getElementById("progressLineAfter");
  const progressLineBirth = document.getElementById("progressLineBirth");

  let width = 1;
  let idConvenientTime = setInterval(progressConvenientTime, 70);
  function progressConvenientTime() {
    if (width >= 20) {
      clearInterval(idConvenientTime);
    } else {
      width++;
      progressLineConvenientTime.style.width = width + "%";
    }
  }

  let idInsomnia = setInterval(progressInsomnia, 70);
  function progressInsomnia() {
    if (width >= 40) {
      clearInterval(idInsomnia);
    } else {
      width++;
      progressLineInsomnia.style.width = width + "%";
    }
  }

  let idPlans = setInterval(progressPlans, 70);
  function progressPlans() {
    if (width >= 60) {
      clearInterval(idPlans);
    } else {
      width++;
      progressLinePlans.style.width = width + "%";
    }
  }

  let idAfter = setInterval(progressAfter, 70);
  function progressAfter() {
    if (width >= 80) {
      clearInterval(idAfter);
    } else {
      width++;
      progressLineAfter.style.width = width + "%";
    }
  }

  let idBirth = setInterval(progressBirth, 70);
  function progressBirth() {
    if (width >= 100) {
      clearInterval(idBirth);
    } else {
      width++;
      progressLineBirth.style.width = width + "%";
    }
  }
};

process();
