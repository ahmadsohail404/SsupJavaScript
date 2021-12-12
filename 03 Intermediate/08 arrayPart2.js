//         -----------      ARROW and CALLBACK Functions    ------------

var isEven = (element) => {       // --> arrow function.
    // if (element % 2 === 0) {
    //     return true;
    // }
    // return false;
    return element % 2 === 0;
}
// console.log(isEven(7));

// var result = [2, 3, 6, 8].every(isEven); // passing reference of the function
// console.log(result);


// var result = [2, 3, 6, 8].every((e) => {
//     return e % 2 === 0;
// })
var result = [2, 3, 6, 8].every((e) => e % 2 === 0);
//      OR
var result = [2, 3, 6, 8].every((e) => (e % 2 === 0)); // remove {} when not using return.
// it became one line of code.
console.log(result);

