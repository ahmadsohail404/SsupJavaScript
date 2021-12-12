var testArray = [2, 3, 5, 6, 7, 1, 4, 9];
// console.log(testArray.fill("h", 0));
// output ->
// [
// 'h', 'h', 'h', 'h',
// 'h', 'h', 'h', 'h'
// ]

var testArray = [2, 3, 5, 6, 7, 1, 4, 9];
// console.log(testArray.fill("empty"));   // 2 is inclusive, 5 is exclusive.

const myNumber = [24, 65, 56, 33, 66, 74, 86];
var result = myNumber.filter((num) => num > 56);
// console.log(result);


// Slice
var users = ["Sohail", "Manjit", "Ankur", "Tushar", "Siddheshya", "Panda Bear", "Rabby Catty"];
console.log(users.slice(2, 5));  // the start is inclusive and end is exclusive.
console.log(users.slice(4));  // removes all the elements before 4


// Splice
users.splice(2, 3, "Hi", "Bye") // 1 -> start position and 2 -> count.
// start from 1 and till count exchange the element with the given argument.
console.log(users);