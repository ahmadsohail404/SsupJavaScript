/*

Key Points:-
1. var states = new Array("",""....);
2. user.pop();
3. user.unshift("");
4. user.shift();
5. console.log(user.indexOf(""));
console.log(Array.from(""));
6. 

*/

var countries = ["India", "Turkey", "USA", "Japan", "Syria"];

var states = new Array("Bihar", "Karnataka", "Delhi", "Mumbai"); //another way of array declaration

// console.log(states[0]);
// console.log(states.length);
states[0] = "Punjab";
// console.log(states);

var user = ["sohail", "sohailss2412@gmail.com", 3, 34, true];
console.log(user);

user.pop(); // removes the value from the end
// console.log(user);
user.unshift("New Value"); // adds the value at the start and rest elements are shifted
// console.log(user);
user.shift(); // removes the first element
// console.log(user);


console.log(user.indexOf("sohailss2412@gmail.com"));
console.log(user.indexOf("newyy")); // newyy is not in the array so it'll give -1.
// useful for if else.


console.log(Array.from("sohail")); // puts the string or other element into an array.

