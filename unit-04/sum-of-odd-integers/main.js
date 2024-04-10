function sumNumbersInArray(arrayOfNumbers) {
  let returnVal = 0;
  for (let index = 0; index < arrayOfNumbers.length; index++) {
    returnVal += arrayOfNumbers[index];
  }

  return returnVal;
}

function sumOfFirstXOddIntegers(x) {
  // gather all odd numbers in an array
  const oddNumbers = [];
  let count = 0;
  while (oddNumbers.length < x) {
    if (count % 2 != 0) {
      oddNumbers.push(count);
    }
    count++;
  }

  // pass the array to a sum function and return
  return sumNumbersInArray(oddNumbers);
}

console.log(sumOfFirstXOddIntegers(4));
console.log(sumOfFirstXOddIntegers(6));
console.log(sumOfFirstXOddIntegers(20));
console.log(sumOfFirstXOddIntegers(14));
console.log(sumOfFirstXOddIntegers(10));
