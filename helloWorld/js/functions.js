// sindle line comment

/**
 * multiple
 * line
 * comment
 */

/**
 * Functions
 * a function is a set by set instruction given to
 * the computer to perform a particular task
 * also known as a algorithm
 * note: if a function does not return any data
 * then it returns undefined by default
 *
 *
 * Syntax
 * function functionName(params){
 * return
 * }
 *
 * function -> this is the keyword
 * fucntionName- > this is like a variable name, hence it
 *                 also follows the rules of variable nameing
 *                 its the unique name given to a function
 * params ->  this helps the function take in dynamic data, that would be
 *            used thoughout the function body
 * return -> this help in returning out result or output from
 *           a funciton call
 *
 * Type of functions
 * predefined - this are function that comes with the lang
 *               they are also called built in functions
 *
 * user-defined - this are functions that we create ourselves
 *
 */

function functionName(data) {
  return data;
}

console.log(functionName("data 1"));
console.log(functionName("data 2"));
console.log(functionName("data 3"));

//function that added two numbers

function SumTwoNumber(numOne, numTwo) {
  return numOne + numTwo;
}

console.log(SumTwoNumber(45, 50));
console.log(SumTwoNumber(2, 4));
console.log(SumTwoNumber(101, 500));

// let numOne = 45
// let numTwo = 50

// let resultt= numOne + numTwo

//write a function that sums up two integer

/**
 * @constant {Number} result
 *
 * @param {Number} numOne
 * @param {Number} numTwo
 * @returns {Number} result
 *
 * @description " add up two numbers"
 *
 * @psedocode
 * 1. initailize result
 * 2. result is equal to numOne plus numTwo
 * 3. return result
 *
 */
function sum(numOne, numTwo) {
  const result = null;
  result = numOne + numTwo;
  return result;
}

/**
 * Step :
 * write the function syntax
 *
 * step 2
 * find a name for your function based on its action
 *
 * Step3:
 * verfiy if parameter/augument are need by the  function
 * and if need include them in the ()
 * give good names
 *
 * step 4:
 * write a function description
 *    1. add data types to your params
 *    2. add the return details
 *    3. add your constant datas
 *    4. add your function description
 *    5. write a psuedocode, to solve the problem
 *
 * step 5: based on the psudocode, approach writing your function body
 *
 */

const output = sum(4, 6);

/** Exe 1
 * 
 *Check Even or Odd
Objective: Create a function that
 takes a number as an argument and 
 returns "Even" if the number is even,
  and "Odd" if it's odd.
 */

/**
 * @constant {String} result
 * @param {Number} num
 * @returns {Number} result
 * @description check for even or odd number based on the parameter given
 * @pseudocode
 *  Step1: init result is equal to null
 *  Step2: let result be equal to num module(%) 2
 *  Step3: if result is 0 then return Even(string) else return Odd(String)
 */
function CheckEvenOdd(num) {
  let result = null;
  result = num % 2;
  if (result == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const CheckEvenOdd_outputOne = CheckEvenOdd(44);

/**
   * Exe 2
   * Find the Largest Number
Objective: Write a function
 that takes three numbers
  as arguments and returns
   the largest of the three.
   */

/**
 * @constant {Number} largest
 * @constant {Array} arr
 * @var {Number}  lastLoopNum
 *
 * @param {Number} numOne
 * @param {Number} numTwo
 * @param {Number} numThree
 *
 * @returns {Number}
 *
 * @description a number to return the largest between three numbers
 *
 * @psuedocode
 *   Step1: init all constant
 *   Step2: push all params to arr(Array)
 *   Step3: loop through arr
 *   Step4: compare between last loop(lastLoopNum) and currentloop values
 *   Step5: save the largest to largest variable
 *   Step6: After the loop, return largest
 *
 */
function LargestNumber(numOne, numTwo, numThree) {
  const largest = 0;
  const arr = [];
  var lastLoopNum = 0;

  arr[0] = numOne;
  arr[1] = numTwo;
  arr[2] = numThree;

  for (let index = 0; index < arr.length; index++) {
    const currentLoopNum = arr[index];

    if (lastLoopNum < currentLoopNum) {
      largest = currentLoopNum;
    }

    //update the last loop number
    lastLoopNum = currentLoopNum;
  }
  return largest;
}

/**
    * Exe 3
    * Reverse a String
Objective: Create a function 
that takes a string and returns it reversed.
    */

/**
 * Exe 4
 * Factorial of a Number
Objective: Write a function that
 takes a number and returns its factorial
 */

/**
  * Exe 5
  * Check for Prime Number
Objective: Create a function 
that checks if a given number is a prime number.
  */

/**
 * Exer 6
 * Fibonacci Sequence
Objective: Write a function that
 generates the first n numbers
  in the Fibonacci sequence.
 */

/**
   * Exe 7
   * 
   * Convert Celsius to Fahrenheit
Objective: Create a function that
 converts a temperature from Celsius to Fahrenheit.
   */

/**
  * Exe 8
  * Check if a String is a Palindrome
Objective: Write a function that 
checks if a given
 string is a palindrome.

  */

/**
  * Exe 9
  * 
  * Count Vowels in a String
Objective: Create a function
 that counts the number of vowels
  in a given string.
  */
