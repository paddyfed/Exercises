function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

// Select the elements we'll be working with
const para1 = document.querySelector("#para1");
const para2 = document.querySelector("#para2");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const deleteOkButton = document.querySelector("#deleteOkButton");
const dialog = document.querySelector("#deleteConfirm");
const container = document.querySelector("#container");
const paragraphs = document.querySelectorAll("p#para1,p#para2");

// Create a function to change the text color of a paragraph
function changeColor(paragraph) {
  paragraph.style.color = `rgb(${random(255)} ${random(255)} ${random(255)})`;
}

// Add an event listener to btn1 that changes the text color of para1 when clicked
btn1.addEventListener("click", () => {
  changeColor(para1);
});

// Add an event listener to btn2 that changes the text color of para2 when clicked
btn2.addEventListener("click", () => {
  changeColor(para2);
});

// Create a new paragraph element and add it to the container
const newPara = document.createElement("p");
newPara.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quaerat vero doloribus unde architecto non quam. Delectus tempora dolorum quisquam ratione corporis fugit eligendi illum! Vel repudiandae dolorum magnam obcaecati!";
container.appendChild(newPara);

// Add an event listener to para1 that changes the background color to yellow when clicked
para1.addEventListener("click", () => {
  para1.style.backgroundColor = "yellow";
});

// Add a "highlight" class to para2 when the user hovers over it, and remove the class when the user stops hovering
para2.addEventListener("mouseover", () => {
  para2.classList.add("highlight");
});
para2.addEventListener("mouseout", () => {
  para2.classList.remove("highlight");
});

// Add a "Delete" button after each paragraph that, when clicked, removes the paragraph from the DOM

paragraphs.forEach((paragraph) => {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  paragraph.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    dialog.showModal();
    deleteOkButton.addEventListener("click", () => {
      paragraph.remove();
    });
  });
});

// return result;
