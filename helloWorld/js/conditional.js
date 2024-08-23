//if

let A = 20;
let B = 10;

if (A == B) {
  console.log("A is greater than B");
}

//if else

if (false) {
  //true block
  console.log("true");
} else {
  //false black
  console.log("false");
}

//nested if

const fredrickFruit = "grape";

if (fredrickFruit == "paw-paw") {
  console.log("He bought paw-paw");
} else if (fredrickFruit == "grape") {
  console.log("He bought grape 1");
} else if (fredrickFruit == "pineapple") {
  console.log("He bought pineapple");
} else if (fredrickFruit == "grape") {
  console.log("He bought grape 2");
} else {
  //default
  console.log("He bought no fruit");
}

switch ("grape") {
  case "paw-paw":
    console.log("He bought paw-paw");
    break;

  case "pineapple":
    console.log("He bought pineapple");
    break;

  case "apple":
    console.log("He bought apple");
    break;

  default:
    console.log("He bought no fruit");
    break;
}

/**
 * 1.
Write a program that takes a student's score as input and prints their grade based on the following criteria:
Score >= 90: Grade A
Score >= 80 and < 90: Grade B
Score >= 70 and < 80: Grade C
Score >= 60 and < 70: Grade D
Score < 60: Grade F
 */

/**
 * 2.
 Write a program that takes two numbers and 
 an operator (+, -, *, /) as input and performs
  the corresponding arithmetic operation.
 */

/**
   * 3.
   Write a program that takes a number (1-7) 
   as input and prints the corresponding day of the week
    using a switch case statement.
   */

let check = false;

//if
if (10 > 20) {
  console.log("occured");
}

/**
 if (condition) {
  // true
}
 */

//if else

if (check) {
  console.log("true block");
} else {
  console.log("false block");
}

/**
 if(condition){
 //true
 }else{
 //false
 }
 */

let fruit = "grape";

if (fruit == "mango") {
} else if (fruit == "grape") {
  console.log("grape");
} else {
  //default
  console.log("no fruit");
}

/**
  if (condition) {
} else if (condition) {
} else {
  //default
}
  */

switch ("grape") {
  case "mango":
    console.log("mango");
    break;
  case "grape":
    console.log("grape");
    break;

  default:
    console.log("no fruit");
    break;
}

/**
 switch (key) {
  case value:
    
    break;

  default:
    break;
}
 */
