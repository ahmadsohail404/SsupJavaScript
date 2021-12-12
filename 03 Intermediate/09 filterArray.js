var testArray = [2, 3, 5, 6, 7, 1, 4, 9];
console.log(testArray.fill("h", 0));
// output ->
// [
// 'h', 'h', 'h', 'h',
// 'h', 'h', 'h', 'h'
// ]

var testArray = [2, 3, 5, 6, 7, 1, 4, 9];
console.log(testArray.fill("empty"));   // 2 is inclusive, 5 is exclusive.

const myNumber = [24, 65, 56, 33, 66, 74, 86];

var result = myNumber.filter((num) => num > 56);

console.log(result);