var user = {
    firstName: "Sohail",  // key: value
    lastName: "Ahmad",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],

    // 👇🏻 it's is a method
    // 'this' refers to 'user' , since we are inside
    // user we can't do user.xyz
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },

    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },

    info: function () {
        return `
First Name is: ${this.firstName}
Last Name is: ${this.lastName}
Role is: ${this.role}
Login Count: ${this.loginCount}
Course List: ${this.courseList}
Course Count: ${this.courseList.length}
                `
    }
};

var courseList = true;  // it has nothing to do with the object method courseList
console.log(user.getCourseCount());

user.buyCourse("React JS Bootcamp");
console.log(user.getCourseCount());

user.buyCourse("Complete Backend with Node.js");
console.log(user.getCourseCount());

console.log(user.info());
