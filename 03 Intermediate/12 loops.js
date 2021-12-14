// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

const myStates = [
    "Bihar",
    "Karnataka",
    "Delhi",
    1947,
    "Maharashtra",
    "Haryana",
    "Tamil Nadu"]

// for (let i = 0; i < myStates.length; i++) {
//     if (typeof myStates[i] !== 'string') continue;
//     console.log(myStates[i]);
// }
// after this scope of code in for loop,let i erases from the memory so the js engine
// has no idea what i is.


// while (i < myStates.length) {
//     console.log(myStates[i]);
//     i++;
// }

let i = 0;

do {
    console.log(myStates[i]);
    i++;
}
while (i < myStates.length)