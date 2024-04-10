function drawConsolePyramid(height) {
  let num = "*";

  for (let i = 0; i < height; i++) {
    let spacer = "";
    for (let j = 0; j < height - i - 1; j++) {
      spacer += ` `;
    }
    console.log(`${spacer}${num}`);
    num += "**";
  }
}

drawConsolePyramid(2);
drawConsolePyramid(4);
drawConsolePyramid(5);
drawConsolePyramid(7);
drawConsolePyramid(8);
drawConsolePyramid(2);
drawConsolePyramid(15);
drawConsolePyramid(55);
