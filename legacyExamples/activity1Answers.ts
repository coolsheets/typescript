//Fix all of the following code snippets such that running tsc shows no errors
//and no errors appear on the code editor

//Exercise 1
let age: string | number = "25";
age = 30; // This works, but it might lead to bugs.

//Exercise 2
function getUser(id: number) {
    let name:string = "John Doe";
    interface User {
        name:String,
        id: Number
    }
    User.name = "John Doe";
    User.id = id;

return User;
}
const user = getUser(123); // Should be a number!
console.log(user?.name?.toUpperCase()); // Error: name might be null or undefined.
//Exercise 3
const element = document.getElementById("myInput") as HTMLInputElement;
element.value = "Hello"; // Runtime error if element is null.
//Thanks Tarik for the solution!