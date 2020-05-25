function pyramid(dimension) {
  for (let row = 1; row < dimension; row += 2) {
    for (let columnspace = 0; columnspace < 4 - row / 2; columnspace++) {
      console.log("\t");
    }
    for (let columnprint = 0; columnprint < row; columnprint++) {
      console.log("#");
    }
    console.log("");
  }
}
pyramid(6);
