//Fix all of the following code snippets such that running tsc shows no errors
//and no errors appear on the code editor


// Activity 1: Welcome to TypeLand (Primitive Types)
// Task: Declare and initialize the following variables with appropriate types:
{
let username: string = "Jimmothy";
let age: number = 30;
let isMember: boolean = true;
let temp: null = null;
let notSet: undefined = undefined;
}
// Activity 2: The Array Bouncer (Object Types - Arrays and Tuples)
// Task: Create the following arrays and a tuple:
{
let scores: number[] = [100, 98, 95];
let fruits: Array<string> = ["apple", "banana", "cherry"];
let profile: [string, number, boolean];

profile = ["Jimmothy", 32, true];
}

// Activity 4: The Friendly Function Checkpoint
// Task: Create a function multiply that takes two numbers and returns their product. 
// Then, write a function greetUser that takes a string and returns a greeting string.
function multiply(a: number, b: number): number {
  return a * b;
}

const greetUser = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(multiply(3, 4)); // 12
console.log(greetUser("Jimmothy")); // Hello, Zooey!

// Activity 5: The Shape Shifter (Union & Intersection Types)
// Task 1: Allow a variable identifier to be either a number or a string.
// Task 2: Define two interfaces
let identifier: string | number;
identifier = "abc123";
identifier = 12345;

interface Animal {
  species: string;
}

interface Pet {
  name: string;
}

let myPet: Animal & Pet = {
  species: "Cat",
  name: "Whiskers"
};


//Activity 6: Utility Belt (Utility Types)
// Task: Given the interface below, use Partial, Readonly, Pick, Omit, 
// and Record to create new types and variables.
interface User {
  name: string;
  email: string;
  age: number;
}

let partialUser: Partial<User> = {
  name: "Jimmothy"
};

let readonlyUser: Readonly<User> = {
  name: "Jimmothy",
  email: "jimmothy@example.com",
  age: 25
};

// readonlyUser.name = "Not Allowed"; // This should error

let pickedUser: Pick<User, "name"> = {
  name: "Jimmothy"
};

let omittedUser: Omit<User, "age"> = {
  name: "Jimmothy",
  email: "jimmothy@example.com"
};

let roleScores: Record<"Admin" | "User", number> = {
  Admin: 1,
  User: 2
};

// Activity 7: The Custom Type Forge
// Task: Create your own custome type
type ID = string | number;

interface Product {
  id: ID;
  title: string;
  price: number;
}

let item: Product = {
  id: 1001,
  title: "Magic Keyboard",
  price: 99.99
};

// Activity 8: The Unknown Stranger
// Task: Use unknown and safely operate on it only after type checking
let maybeString: unknown;

maybeString = "Hello TypeScript!";

if (typeof maybeString === "string") {
  console.log(maybeString.toUpperCase());
}


// Activity 9: The Void & Never Cave
// Task: Write a function that logs something and returns void. 
// Then, write a function that always throws an error and returns never.
function warnUser(message: string): void {
  console.log("Warning:", message);
}

function crash(message: string): never {
  throw new Error(message);
}
