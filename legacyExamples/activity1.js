"use strict";
//Fix all of the following code snippets such that running tsc shows no errors
//and no errors appear on the code editor
//Exercise 1
let age = "25";
age = 30; // This works, but it might lead to bugs.
//Exercise 2
function getUser(id) {
    return { id: id, name: "John Doe" };
}
const user = getUser("123"); // Should be a number!
console.log(user.name.toUpperCase()); // Error: name might be null or undefined.
//Exercise 3
const element = document.getElementById("myInput");
element.value = "Hello"; // Runtime error if element is null.
