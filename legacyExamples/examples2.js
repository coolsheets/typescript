"use strict";
let fruit = "banana";
// fruit=7
// Example 1: Function Returning a Number
function getTime() {
    return new Date().getTime();
}
// Example 2: Function returning nothing
function bahHumBug() {
    console.log('Go away!');
}
// Example 3: Function returning a number with number parameters
function addMyNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
let sum = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};
let thing = 5;
console.log(addMyNumbers(5, "6"));
console.log(typeof addMyNumbers(5, "6"));
