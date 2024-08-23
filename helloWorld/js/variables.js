// varibales are how we store data, this are data that is been used for our program

// Types of variable
// const->constant
// let ->
//        ->flexible
// var ->

//rules of varibale descleration
// let age = 50 wrong
// let number of student = 12 wrong
// let 1student = "james" wrong
// let const = "boy scout"

//vaibale decleration
// syntax
// variableType varibaleName  = data;

const name = "fred";
let age = 30;
var count = 100;



console.log(name, age, count);

age = 70;
count = 300;

console.log(age, count);

// exercise
// 1. Declare a variable using var and assign it a string value of your favorite color.
// 2. Reassign a new string value to the same variable.
// 3. Declare another variable using let and assign it your favorite number.
// 4. Try to redeclare the let variable. What happens?
// 5. Declare a constant using const and assign it the value of pi (3.14159).
// 6. Attempt to change the value of the constant. What do you observe?

var favorite_color = "red";
favorite_color = "blue";
let favorite_number = "3";
// let favorite_number = '5' wrong
const pi = 3.14159;
// pi = 4; wrong

// exercise;
// Declare two variables with numeric values.
// Create a new variable to store the sum of the two numbers.
// Create another variable to store the product of the two numbers.
// Display the values of the sum and product variables in the console.
// Update the first variable to a new value and re-calculate the sum and product.

let numOne = 1;
const numTwo = 2;
let result = numOne * numTwo;
console.log(result);
numOne = 2;
result = numOne * numTwo;
console.log(result);

// note string     "mr james de 3"
// "amina"
// exercise
// Declare two variables with string values representing a first name and a last name.
// Concatenate the two strings to form a full name and store it in a new variable.
// Display the full name in the console.
// Create a variable to store a greeting message that includes the full name, e.g., "Hello, John Doe!"
// Display the greeting message in the console.

let firstName = "Amina";
let lastName = "James";

const fullName = firstName + " " + lastName;
console.log(fullName);

const greeting = "Hello, " + fullName;
console.log(greeting);

const greetingTwo = `Hello, ${fullName} `;
console.log(greetingTwo);
