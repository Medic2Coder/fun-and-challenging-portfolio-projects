"use strict";
// Compare Scopes of the var and let Keywords
// If you are unfamiliar with let, check out this challenge.
//
//     When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
//
// The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
//
//     For example:
//
//     var numArray = [];
// for (var i = 0; i < 3; i++) {
//     numArray.push(i);
// }
// console.log(numArray);
// console.log(i);
// Here the console will display the values [0, 1, 2] and 3.
//
// With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable. This code is similar to the following:
//
//     var numArray = [];
// var i;
// for (i = 0; i < 3; i++) {
//     numArray.push(i);
// }
// console.log(numArray);
// console.log(i);
// Here the console will display the values [0, 1, 2] and 3.
//
// This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable. This is because the stored function will always refer to the value of the updated global i variable.
//
//     var printNumTwo;
// for (var i = 0; i < 3; i++) {
//     if (i === 2) {
//         printNumTwo = function() {
//             return i;
//         };
//     }
// }
// console.log(printNumTwo());
// Here the console will display the value 3.
//
// As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop. The let keyword does not follow this behavior:
//
//     let printNumTwo;
// for (let i = 0; i < 3; i++) {
//     if (i === 2) {
//         printNumTwo = function() {
//             return i;
//         };
//     }
// }
// console.log(printNumTwo());
// console.log(i);
// Here the console will display the value 2, and an error that i is not defined.
//
//     i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement.
//
//
//
// function checkScope() {
//     "use strict";
//     let i = "function scope";
//     if (true) {
//         let i = "block scope";
//         console.log("Block scope i is: ", i);
//     }
//     console.log("Function scope i is: ", i);
//     return i;
// }


// Mutate an Array Declared with const
//     If you are unfamiliar with const, check out this challenge.
//
//     The const declaration has many use cases in modern JavaScript.
//
//     Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.
//
// However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.
//
//     const s = [5, 6, 7];
// s = [1, 2, 3];
// s[2] = 45;
// console.log(s);
// s = [1, 2, 3] will result in an error. The console.log will display the value [5, 6, 45].
//
//     As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.
//
//     An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.

// const s = [5, 7, 2];
// function editInPlace() {
//     "use strict";
//     // Only change code below this line
//
//     s[0] = 2;
//     s[1] = 5;
//     s[2] = 7;
//     return s;
//
//     // Using s = [2, 5, 7] would be invalid
//
//     // Only change code above this line
// }
// editInPlace();
// console.log(s);

//20May2020
// Language: ecmascript 6
// Prevent Object Mutation
// As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.
//
//     Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode.
//
//     let obj = {
//     name:"FreeCodeCamp",
//     review:"Awesome"
// };
// Object.freeze(obj);
// obj.review = "bad";
// obj.newProp = "Test";
// console.log(obj);
// The obj.review and obj.newProp assignments will result in errors, because our editor runs in strict mode by default, and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.
//
// In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.
//
//Problem:
// function freezeObj() {
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };
//     // Only change code below this line
//     Object.freeze(MATH_CONSTANTS);
//     // Only change code above this line
//     try {
//         MATH_CONSTANTS.PI = 99;
//     } catch(ex) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();

//22May2022
//Use Arrow Functions to Write Concise Anonymous Functions
// In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.
//
// To achieve this, we often use the following syntax:
//
// const myFunc = function() {
//   const myVar = "value";
//   return myVar;
// }
// ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:
//
// const myFunc = () => {
//   const myVar = "value";
//   return myVar;
// }
// When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:
//
// const myFunc = () => "value";
// This code will still return the string value by default.
//
// Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.
//Problem:
// var magic = function() {
//
//     return new Date();
// };
const magic = () => new Date();
console.log(magic());

//23May2022
// Write Arrow Functions with Parameters
//     Just like a regular function, you can pass arguments into an arrow function.
//
// const doubler = (item) => item * 2;
// doubler(4);
// doubler(4) would return the value 8.
// If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.
//
//     const doubler = item => item * 2;
// It is possible to pass more than one argument into an arrow function.
//
// const multiplier = (item, multi) => item * multi;
// multiplier(4, 2);
// multiplier(4, 2) would return the value 8.

//Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.
//Problem:
// const myConcat = (arr1, arr2) =>{
//
//     return arr1.concat(arr2);
//
// };
//
// console.log(myConcat([1, 2], [3, 4, 5]));

//24May2022
// Set Default Parameters for Your Functions
// In order to help us create more flexible functions, ES6 introduces default parameters for functions.
//
//                                                                                               Check out this code:
//     const greeting = (name = "Anonymous") => "Hello " + name;
//
// console.log(greeting("John"));
// console.log(greeting());
// // The console will display the strings Hello John and Hello Anonymous.
// //
// //     The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value Anonymous when you do not provide a value for the parameter. You can add default values for as many parameters as you want.
// //
// //     Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
//
// //Problem:
// // Only change code below this line
// const increment = (number, value = 1) => number +value;
// // Only change code above this line
// console.log(increment(5, 2));

//25May2022
// Use the Rest Parameter with Function Parameters
// In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
//
// Check out this code:
//
//     function howMany(...args) {
//         return "You have passed " + args.length + " arguments.";
//     }
// console.log(howMany(0, 1, 2));
// console.log(howMany("string", null, [1, 2, 3], { }));
// The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..
//
// The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.
//
//     Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
//Problem:
// const sum = (x, y, z) => {
//     const args = [x, y, z];
//     return args.reduce((a, b) => a + b, 0);          //can be rewritten as:
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
};
console.log(sum(1, 2, 3));





