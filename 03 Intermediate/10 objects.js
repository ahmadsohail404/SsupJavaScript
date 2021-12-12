var user = {
    firstName: "Sohail",  // key: value
    lastName: "Ahmad",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true
};

console.log(user.role);// preferred way.
console.log(user["firstName"]); // use the above one.

user.loginCount = 50;
console.log(user.loginCount);

console.table(user)  // wow 😃



var phone = {
    name: "Redmi Note 7 Pro",
    yearReleased: 2019,
    RAM: 6 + " GB",
    Storage: 128 + " GB",
    Color: "Neptune Blue",
    Camera: 48 + " MP"
}

console.table(phone)