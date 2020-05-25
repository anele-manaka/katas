var arr = ["the", "quick", "brown", "fox", "ate", "my", "chickens"];
var lgth = 0;
var longest = 0;
function longestStr(arr) {
  for (var index = 0; index < arr.length; index++) {
    if (arr[index].length > lgth) {
      lgth = arr[index].length;
      longest = arr[index];
    }
  }
  return longest;
}
console.log(longestStr(arr));
