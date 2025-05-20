// Activity 1: Define a Flexible Profile
// Task: Create an interface for a Profile object that must have a 
// username but may optionally have an email.
interface Profile {
  username: string;
  email?: string;
}

const user1: Profile = { username: "Jimmothy" };
const user2: Profile = { username: "Shane", email: "shane@example.com" };


// Activity 2: Create Optional Parameters in a Function
// Task: update this greetUser function that accepts a required name and optional nickname.
function greetUser(name: string, nickname?: string): string {
  if (nickname) {
    return `Hi ${name} aka ${nickname}!`;
  }
  return `Hi ${name}!`;
}

console.log(greetUser("Alice"));         // Hi Alice!
console.log(greetUser("Alice", "Al"));   // Hi Alice aka Al!


// Activity 3: Optional Property with Default Fallback
// Task: Use the nullish coalescing operator (??) to set 
// a default value if an optional property is missing.
interface User {
  name: string;
  age?: number;
}

const user: User = { name: "Bob" };

const userAge = user.age ?? 30;
console.log(userAge); // 30


// Activity 4: Partial Utility Type
// Task: Use Partial<T> to define a user object where all properties are optional.
// without editing the interface
interface Settings {
  theme: string;
  notifications: boolean;
}

const defaultSettings: Partial<Settings> = {
  theme: "dark"
};


// Activity 5: Safe Optional Chaining
// Task: Use optional chaining (?.) to safely access a property that may not exist.
interface Product {
  name: string;
  details?: {
    price?: number;
  };
}

const item: Product = { name: "Book" };

console.log(item.details?.price?.toFixed(2)); // undefined


// Activity 6: TypeScript Guesses the Type
// Task: Declare variables and let TypeScript infer their types.
let city = "Calgary";     // string
let population = 1200000; // number
let isCold = true;        // boolean

// Check inference by uncommenting:
// city = 42; // This should Error
// try others


// Activity 7: Function Return Type Inference
// Task: see the following function to square a number. See how TypeScript infers the return type.
function square(n: number) {
  return n * n;
}

const result = square(4); // result inferred as number


// Activity 8: Array Inference
// Task: Observe the following arrays and see what TypeScript infers.
let colors = ["red", "green", "blue"];       // string[]
let ids = [1, 2, 3];                         // number[]
let mixed = ["yes", 1, true];               // (string | number | boolean)[]


// Activity 9: Object Inference and Destructuring
// Task: see how the object is destructured. TypeScript infers the types.
let user = {
  name: "Jimmothy",
  age: 28
};

let { name, age } = user; // name: string, age: number


// Activity 10: Contextual Typing
// Task: TypeScript infers types from usage context.
let nums = [1, 2, 3];

nums.forEach((n) => {
  console.log(n.toFixed(2)); // n inferred as number
});


// 🔹 Activity 11: Inference with JSON
// Task: Using as casting to define the inferred structure of a parsed object.
interface User {
  name: string;
  age: number;
}

const raw = '{"name": "Bob", "age": 40}';
const parsed = JSON.parse(raw) as User;

console.log(parsed.name.toUpperCase()); // BOB