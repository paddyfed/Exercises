function drawConsolePyramid(height) {
  let num = "*";
  let spacerCount = height - 1;

  for (let i = 0; i < height; i++) {
    let spacer = "";
    for (let j = 0; j < spacerCount; j++) {
      spacer += ` `;
    }
    console.log(`${spacer}${num}`);
    num += "**";
    spacerCount--;
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
