// Create an application with following roles:
// admin - gets full access
// subadmin - gets access to create/delete access
// testprep - gets access to create/delete tests
// user - gets access to consume content

var user = "abc";

switch (user) {
    case "admin": console.log("gets full access");
        break;

    case "subadmin": console.log("gets access to create/delete access");
        break;

    case "testprep": console.log("gets access to create/delete tests");
        break;

    case "user": console.log("gets access to consume content");
        break;

    default: console.log("Trial user");
        break;
}