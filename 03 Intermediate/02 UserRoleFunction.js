/*
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

var getUserRole = (name, role) => {
    switch (role) {
        case "admin":
            return `${name} has full access`
            break;// not required when we are using return
        case "subadmin":
            return `${name} has acccess to create/delete courses`

        case "testprep":
            return `${name} has access to create/delete tests`

        case "user":
            return `${name} has access to consume all content`

        default:
            return `${name} is a trial user`
    }
}
console.log(getUserRole("Rabby", "subadmin"));

// A function can be written in the following ways:-

//1. function getUserRole(name, role) {}
//2. var getUserRole = function (name, role) {}
//3. var getUserRole = (name, role) => {}


