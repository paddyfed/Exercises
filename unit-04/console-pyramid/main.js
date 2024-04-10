function drawConsolePyramid(height) {
  const pyramid = createPyramidArray(height);

  pyramid.forEach((row) => {
    // console.log(row);
    row.forEach((element) => {
      // console.log(element);
      for (let i = 0; i < element; i++) {
        console.log(printStars(element) + "\n");
      }
    });
  });
}

function printStars(number) {
  let numStars = "*";

  for (let i = 1; i < number; i++) {
    numStars += "**";
  }

  return numStars;
}

function createPyramidArray(height) {
  const arrayPyramid = [];
  let num = 1;
  let spacer = height - 1;

  for (let i = 0; i < height; i++) {
    arrayPyramid.push([spacer, num]);
    num += 2;
    spacer--;
  }

  return arrayPyramid;
}

drawConsolePyramid(2);
// drawConsolePyramid(4);
// drawConsolePyramid(5);
// drawConsolePyramid(7);
// drawConsolePyramid(8);
// drawConsolePyramid(2);
