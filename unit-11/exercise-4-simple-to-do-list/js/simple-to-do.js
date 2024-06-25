(() => {
  // globals
  const toDoListForm = document.querySelector("#to-do-list-form");
  const submitButton = toDoListForm.querySelector('input[type="submit"]');
  const toDoListBody = document.querySelector("#to-do-list tbody");

  function getData() {
    const newRow = document.createElement("tr");

    let formData = new FormData(toDoListForm);
    for (const [key, value] of formData) {
      if (value === "") {
        throw new Error(`${key} is required`);
      }

      document.querySelector("#errorMessage").textContent = "";
      const newData = document.createElement("td");
      newData.textContent = value;
      newRow.appendChild(newData);

      console.log(key, value);
    }
    console.log(toDoListBody);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn-delete");
    newRow.appendChild(deleteButton);
    toDoListBody.appendChild(newRow);
    deleteButton.addEventListener("click", (event) => {
      newRow.remove();
    });
  }
  function init() {
    window.addEventListener("load", (event) => {
      submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        try {
          getData();
        } catch (e) {
          console.error(e);
          document.querySelector("#errorMessage").textContent = e;
        }
        console.log(event);
      });
    });
  }

  init();
})();
