let numberOfStars = 0;
let outputStars = "";

while (isNaN(numberOfStars) || numberOfStars <= 0) {
  alert("You did not enter a number greater than zero");
  numberOfStars = prompt("Enter the number of stars");
}

for (let i = 0; i < numberOfStars; i++) {
  outputStars += "*";
}

alert("Outputting " + numberOfStars + " stars: " + outputStars);
