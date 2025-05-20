//Fix all of the following code snippets such that running tsc shows no errors
//and no errors appear on the code editor


// Activity 1: Welcome to TypeLand (Primitive Types)
// Task: Declare and initialize the following variables with appropriate types:
{
let username = "Jimmothy";
let age = 40;
let isMember = true;
let temp = null;
let notSet = undefined;
}

// Activity 2: The Array Bouncer (Object Types - Arrays and Tuples)
// Task: Create the following arrays and a tuple:
{
let scores = [100, 98, 95];
let fruits = ["apple", "banana", "cherry"];
let profile: [string, number, boolean];

profile = ["Jimmothy", 32, true];
}


// Activity 4: The Friendly Function Checkpoint
// Task: Create a function multiply that takes two numbers and returns their product. 
// Then, write a function greetUser that takes a string and returns a greeting string.
console.log(multiply(3, 4)); // 12
console.log(greetUser("Jimmothy")); // Hello, Jimmothy!

// Activity 5: The Shape Shifter (Union & Intersection Types)
// Task 1: Allow a variable identifier to be either a number or a string.
// Task 2: Define two interfaces
let identifier //Add type here
identifier = "abc123";
identifier = 12345;

interface Animal //define first inteface here

interface Pet //define second interface here

let myPet //combine both interfaces here


//Activity 6: Utility Belt (Utility Types)
// Task: Given the interface below, use Partial, Readonly, Pick, Omit, 
// and Record to create new types and variables.
interface User {
  name: string;
  email: string;
  age: number;
}

// Write these:
let partialUser: Partial<User>;
let readonlyUser: Readonly<User>;
let pickedUser: Pick<User, "name">;
let omittedUser: Omit<User, "age">;
let roleScores: Record<"Admin" | "User", number>;


// Activity 7: The Custom Type Forge
// Task: Create your own custome type

// Activity 8: The Unknown Stranger
// Task: Use unknown and safely operate on it only after type checking
let maybeString //define unknown type here

maybeString = "Hello TypeScript!";

if (//check typeof here) {
  console.log(maybeString.toUpperCase());
}

// Activity 9: The Void & Never Cave
// Task: Write a function that logs something and returns void. 
// Then, write a function that always throws an error and returns never.
function warnUser(message){//add the void return type
  console.log("Warning:", message);
}

function crash(message) {//add the warn return type
  throw new Error(message);
}


