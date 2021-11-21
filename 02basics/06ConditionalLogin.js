// Allow user to access course if he is:
// logged in from email
// logged in from google
// logged in from meta

var emailLogin = 0;
var googleLogin = 0;
var metaLogin = 0;

if (emailLogin || googleLogin || metaLogin) {
    console.log("Login successful!");
}
else {
    console.log("Login failed! Please login with correct credentials");
}