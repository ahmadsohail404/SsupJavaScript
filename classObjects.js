const User = require("./classjs")

const sohail = new User("Sohail", "sohailss2412@gmail.com")

console.log(sohail.getInfo());

sohail.enrollCourse("ReactJS course")
sohail.enrollCourse("Node course")
sohail.enrollCourse("React Native course")
console.log(sohail.getCourseList());

let courses = sohail.getCourseList();
courses.forEach((c) => console.log(c))

