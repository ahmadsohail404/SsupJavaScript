var myName = "Sohail";

console.log(`Line number 3 -> ${myName}`);

function sayName() {
    var myName = "Rabby";
    console.log(`Line number 6 -> ${myName}`);

    sayNameTwo();
    function sayNameTwo() {
        console.log(`Line number 11 -> ${myName}`);
    }
}
sayName(); // prints Line number 6 -> Rabby


/* function abc(){
 }  here the {} is called scope but not in case of other code syntax except function.*/


