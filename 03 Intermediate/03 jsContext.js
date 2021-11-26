/*
once the function is registered it is wrapped up and put in a global context so that it can be accessed form anywhere


sayHello();

function sayHello() {
    console.log("Hello JavaScript!");
} */


// executes perfectly

// if ("2" === 2) {
//     console.log("True statement");
// } // This won't execute

var myName = "Sohail"

if (myName === myName) {
    console.log("This is true");
}

// in browser we use myName === window.myName because in system node doesn't need window