//TODO: for regular function calls 'this' points to window object

console.log(this);   // here in case of node it's an empty object.

var user = {
    firstName: "Sohail",
    courseCount: 4,
    getCourseCount: function () {
        console.log("Line 9", this);
        function sayHello() {
            console.log("Hello");
            console.log("Line 12", this);
        }
        sayHello() //since it's a regular function call,'this' points to a window obj
    }
}

user.getCourseCount(); //not a regular function call, it's called through an object.


