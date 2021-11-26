// Global context kicks in when you start writing code
// Execution context kicks in when you call a function 

//                 ------------    HOISTING    ------------

tipper("5");
function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}
// works fine

var bigTipper = function (a) {
    var bill = parseInt(a)
    console.log(bill + 15);
}
bigTipper("215");
// bigTipper will throw error if calling is above the block of code
// because it's a variable and not a function
// that's why after scanning it is made undefined


console.log(myName);
var myName = "Sohail";
// it's undefined but it's a proof that global context collects the data 


function sayName() {
    var myName = "Rabby"
    console.log(myName);
}
sayName()
console.log(myName);
// here Sohail will be printed because it's the top on stack





