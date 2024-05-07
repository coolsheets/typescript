let fruit="banana"
// fruit=7
// Example 1: Function Returning a Number
function getTime(): number {
    return new Date().getTime();
}

// Example 2: Function returning nothing
function bahHumBug(): void {
    console.log('Go away!');
}

// Example 3: Function returning a number with number parameters
function addMyNumbers(firstNumber: number, secondNumber: number):number {
    return firstNumber + secondNumber;
}

let sum = (firstNumber: number, secondNumber: number):number => {
    return firstNumber + secondNumber;
}

let thing:number = 5;

console.log(addMyNumbers(5,"6"))
console.log(typeof addMyNumbers(5,"6"))