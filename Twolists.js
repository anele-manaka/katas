let arr1 = [11, 22, 33];
let arr2 = [1, 2, 3];
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
console.log(newList(arr1, arr2));
