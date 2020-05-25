function hello(name) {
  console.log("Hello" + " " + name);
  return name;
}
hello("Tshepo");

function evenOrodd(integer) {
  if (integer % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
  return integer;
}
evenOrodd(2);

function square(lensquare) {
  for (let i = 0; i < lensquare; i++) {
    for (let i2 = 0; i2 < lensquare; i2++) {
      console.log("#");
    }
    console.log("\n");
  }
}
square(4);

function triangle(lenofTriangle) {
  for (let i = 0; i < lenofTriangle; i++) {
    for (let i2 = i; i2 >= 0; i2--) {
      console.log("#");
    }
    console.log("\n");
  }
}
triangle(4);

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

function longestStr(arr) {
  var lgth = 0;
  var longest = 0;  
  for (var index = 0; index < arr.length; index++) {
    if (arr[index].length > lgth) {
      lgth = arr[index].length;
      longest = arr[index];
    }
  }
  return longest;
}
var arr = ["the", "quick", "brown", "fox", "ate", "my", "chickens"];
console.log(longestStr(arr));

function newList(arr1, arr2) {
  let lengthSum = arr1.length + arr2.length;
  let empArr = [];
  let i2 = 0,
    i3 = 0;
  for (let index = 0; index < lengthSum; index++) {
    if (index % 2 == 0) {
      empArr[index] = arr1[i2++];
    } else {
      empArr[index] = arr2[i3++];
    }
  }
  return empArr;
}
let arr1 = [11, 22, 33];
let arr2 = [1, 2, 3];
console.log(newList(arr1, arr2));

function frame(strings){
  longest = strings[0];
  lgth = longest.length;
  border = "****";
  for(y =0; y<lgth; y++){
      border = border + "*";
  }
  console.log(border);
  for ( let x =  0; x < lgth; x++){
      console.log("*" + " " + strings[x]+ "\t" + "*")
  }
  console.log(border)
}
frame(["Write", "good", "code", "every", "day"]);