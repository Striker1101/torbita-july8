// data type is talking about the diff type of data available in javascript
// types of data

// String -> is a combination of alphbet and numberics (text)
//           is starts with double quote and ends with double quote
//           you can use either double or single quote
//           eg:  const name = "Amina" -> "Amina" is the string

// Number -> this is the combination of both int(whole number) and float(decimal number)
//           it ranges from 0-9 includes symbols like . and ,
//           e.g: const age = 30   -> 30 is a int value

// Boolean -> this can take only binary state, either true or false
//               eg: const check = false -> false is a boolean value

// Null  -> this can be looked as a place holder, where the variable is empthy
//           e.g: const table = null -> null here means the table variabel is empthy

// Object -> this has the ability to take in mutiple data in property and value syntax
//            hence is can be used to save many data, it uses curly bracket to encase
//            everything
//            eg const student = { name: "fred", age: 30}
//             note: individual data can be access using dot(.)
//             eg student.name  output -> fred

// Array -> this is also used to save multiple data, unlike object that uses
//           property and value, and array stores data in indexes, everything is
//           encase inside a block bracket
//           e.g: const student = [ "amina", 60]    [0,1,2,3,4,5]
//           note: individual data can be accessed using []
//           e.g:  student[0] output -> amina

// Function -> this is used to write step by step instruction to be carry out as
//              task, job. it returns data and when the return keyword is not
//              included, it would return "undefined"
//              e.g function name(){ return "My name is James "}
//              note: to call a function you use the function name and open bracket
//              e.g name()

//string
const nameData = "Amina";
console.log(nameData);

//number
const ageData = 30;
console.log(ageData);

//boolean
const check = true;
console.log(check);

//null
const table = null;
console.log(table);

//obj
const studentObj = { name: "fred", age: 30 };
studentObj.score = 100;
console.log(studentObj);

//array
const studentArray = ["amina", 60];
studentArray[2] = 100;
console.log(studentArray);

//function
//fucntion declaretion
function fucntionName() {
  //body function
  console.log("function is runinng");
}

//calling the function
fucntionName();

const functionReturn = fucntionName();
console.log(functionReturn);

// Exercises
// Exercise 1: Data Type Identification
// Objective: Identify and understand different data types.
// Declare variables to store the following values:
// A string representing your name.
// A number representing your age.
// A boolean indicating whether you like pizza (true/false).
// An undefined variable.
// A null value.
// Use the typeof operator to display the data type of each variable in the console.

// Exercise 2: Type Conversion
// Objective: Practice converting between data types.
// Declare a variable with a string value representing a number (e.g., "123").
// Convert this string to a number and store it in a new variable.
// Declare another variable with a numeric value.
// Convert this number to a string and store it in another variable.
// Display the results of the conversions in the console.

// Exercise 3: Arithmetic Operations with Different Data Types
// Objective: Explore how JavaScript handles arithmetic with different data types.
// Declare a variable with a numeric value and another with a string value that can be interpreted as a number (e.g., "10").
// Add these two variables together and display the result.
// Subtract the string value from the numeric value and display the result.
// Try to multiply and divide the two variables and observe the results.
// Discuss what happens when arithmetic operations are performed with different data types.

// Exercise 4: Working with Arrays
// Objective: Understand arrays and basic operations on them.
// Create an array with at least five different data types (string, number, boolean, null, undefined).
// Display the entire array in the console.
// Access and display the first and last elements of the array.
// Add a new element to the end of the array.
// Remove the first element of the array and display the updated array.

// Exercise 5: Object Manipulation
// Objective: Learn to work with objects and access their properties.
// Create an object representing a book with properties: title (string), author (string), pages (number), and available (boolean).
// Display the object in the console.
// Access and display the title and author properties of the object.
// Change the value of the available property to false.
// Add a new property, genre, to the object and assign it a value.
//exercise1

//exercise 2
//mr Joshua

// const dame = 7;
// dame.score;
// ore = 65;
// console.log(dame);

//mr goodluck

var numString = "123top456";
//convert numString to a number
const convertedNumString = parseInt(numString);

var stringNum = 1230902910290921;
//convert stringNum to a string
const convertedStringNum = stringNum.toLocaleString();

console.log(convertedNumString, convertedStringNum);

//exsercise 3
//mr joshua
let num1 = 24;
const num2 = 13;

let resultFour = num1 + num2;
console.log(resultFour);

//mr goodluck
let gNum = 10;
let gString = "10";

console.log(gNum + gString);
console.log(gNum - gString);
console.log(gNum * gString);
console.log(gNum / gString);

//exercise 4
//mr goodluck
const arrTwo = ["string", 100, true, null, undefined];
console.log(arrTwo[0], arrTwo[4]);
//add a new element to the array
arrTwo[5] = "fifth element";

//remove the first element
arrTwo[0] = null;
console.log(arrTwo);
