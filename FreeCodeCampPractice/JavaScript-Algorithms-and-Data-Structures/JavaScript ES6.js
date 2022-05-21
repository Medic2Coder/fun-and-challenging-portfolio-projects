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
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line

       Object.freeze(MATH_CONSTANTS);
    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

