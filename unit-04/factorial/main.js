const fac = (num) => {
  let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac *= i;
  }
  return fac;
};

function factorial() {
  let number = 0;
  let output = "";

  number = parseInt(prompt("Enter a number between 1 and 20:"));

  while (isNaN(number) || number < 1 || number >= 20) {
    number = parseInt(prompt("Please enter a number between 1 and 20:"));
  }

  output = "Factorials up to " + number + ": ";

  for (let j = number; j >= 1; j--) {
    output += j + "! = " + fac(j) + ", ";
  }

  alert(output);
}

factorial();
