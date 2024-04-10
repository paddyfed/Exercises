function randomAverage(n) {
  if (typeof n !== "number") return "A number must be passed";
  let returnVal = 0;

  for (let i = 0; i < n; i++) {
    returnVal += Math.random();
  }

  return returnVal / n;
}

console.log(randomAverage(10));
console.log(randomAverage(100));
console.log(randomAverage(1000));
console.log(randomAverage(10000));
console.log(randomAverage(100000));
console.log(randomAverage(1000000));
console.log(randomAverage("a"));
console.log(randomAverage());
