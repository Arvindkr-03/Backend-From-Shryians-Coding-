// A function is a reusable block of code that performs a specific task.
// Group code together & reuse it multiple times in code.

function user() {
    // console.log("Hello, Js Users");
    // console.log(user.length); // it returns 0. as lenght.
    return "Boliye!";
}
user();

function newUser(name) {
    console.log("Hello, " + name + "!");
    console.log(newUser.length);
}
newUser("Mohan");
// it returns 1 beacuse one parameter set length t0 1


function sun() {
    return "Sun rises in the morning!"
}
var ans = sun();
console.log(ans);