(() => {
  const ageCalculatorForm = document.querySelector("#ageCalculatorForm");
  const submitButton = ageCalculatorForm.querySelector("#submit");
  const resultMessage = document.querySelector("#ageResultMessage");

  function getData() {
    let thisIsTheFormData = new FormData(ageCalculatorForm, submitButton);
    let dateOfBirth;
    for (const [key, value] of thisIsTheFormData) {
      if (key === "ageInput") dateOfBirth = new Date(value);
    }
    resultMessage.innerHTML = `You are ${calculateAgeInYearsAndDays(
      dateOfBirth
    )}`;
  }

  window.addEventListener("load", (event) => {
    ageCalculatorForm.addEventListener("submit", (event) => {
      event.preventDefault();
      getData();
    });
  });
})();
