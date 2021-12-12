const student = {
    age: 20,
    name: {
        firstName: "Sohail",
        lastName: "Ahmad",
    }
};

console.log(student);
student.age = 19;
console.log(student);

Object.freeze(student);

student.age = 16;
console.log(student);// the value won't change to 16

student.name.firstName = "Not Sohail";
console.log(student); // but here the first name will change because it's natural behaviour of JS