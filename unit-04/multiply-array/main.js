function multiplyArray(n) {
  if (!Array.isArray(n)) return "This is not an array";
  if (n.length < 1) return "This is an empty array";

  if (
    !n.every((element) => {
      return typeof element === "number";
    })
  )
    return "This array has an element that is not a number";

  let returnVal = 1;

  n.forEach((number) => {
    returnVal *= number;
  });
  return returnVal;
}

console.log(multiplyArray([2, 3]));
console.log(multiplyArray([2, 3, 5]));
console.log(multiplyArray([1, 1, 1, 1]));
console.log(multiplyArray([1, 0, 3, 4]));
console.log(multiplyArray([2, 3]));
console.log(multiplyArray("[2, 3]"));
console.log(multiplyArray(["hello", 3]));
console.log(multiplyArray({ h: 1 }));
console.log(multiplyArray());
console.log(multiplyArray([]));
console.log(multiplyArray());
