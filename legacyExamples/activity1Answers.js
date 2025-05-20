"use strict";
//Fix all of the following code snippets such that running tsc shows no errors
//and no errors appear on the code editor
var _a;
//Exercise 1
let age = "25";
age = 30; // This works, but it might lead to bugs.
//Exercise 2
function getUser(id) {
    let name = "John Doe";
    User.name = "John Doe";
    User.id = id;
    return User;
}
const user = getUser(123); // Should be a number!
console.log((_a = user === null || user === void 0 ? void 0 : user.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()); // Error: name might be null or undefined.
//Exercise 3
const element = document.getElementById("myInput");
element.value = "Hello"; // Runtime error if element is null.
//Thanks Tarik for the solution!
