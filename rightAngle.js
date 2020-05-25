function triangle(lenofTriangle) {
  for (let i = 0; i < lenofTriangle; i++) {
    for (let i2 = i; i2 >= 0; i2--) {
      console.log("#");
    }
    console.log("\n");
  }
}
triangle(4);
