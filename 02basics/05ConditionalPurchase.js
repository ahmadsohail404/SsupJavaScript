// user is only allowed to make a purchase when he is:
// logged in
// email verified
// cardInfo valid
// if anyone is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var isCardInfoVerified = true;

// if (isLoggedIn) {
//     console.log("Login Successful!");
//     if (isEmailVerified) {
//         console.log("Email Verified!");
//         if (isCardInfoVerified) {
//             console.log("You can make a purchase!");
//         }
//         else {
//             console.log("Please verify your card info!");
//         }
//     }
//     else {
//         console.log("Please verify your email");
//     }
// }
// else {
//     console.log("Please login to purchase");
// }

if (isLoggedIn && isEmailVerified && isCardInfoVerified) {
    console.log("You can make a purchase!");
}
else {
    console.log("Authentication Failed!");
}