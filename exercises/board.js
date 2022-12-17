const size = 8;

for (let i = 0; i < size; i++) {
  let line = "";
  for (let j = 0; j < size; j++) {
    if (i % 2 === 0) {
      line += j % 2 === 0 ? " " : "#";
    } else {
      line += j % 2 === 0 ? "#" : " ";
    }
  }
  console.log(line);
}

for (let i = 0; i < size; i++) {
  let line = "";
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      line += "#";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
