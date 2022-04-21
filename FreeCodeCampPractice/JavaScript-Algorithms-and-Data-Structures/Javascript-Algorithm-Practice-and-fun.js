"use strict";
// ****************************************************************
// *                                                              *
// *        The Following are notes and Practice Cases from FreeCodeCamp JavaScript Algorithms and Data Structures        *

//Multiple Identical Options in Switch Statements
//Example:
// If you have multiple inputs with the same output, you can represent them in a switch statement like this:

// let result = "";
// switch(val) {
//     case 1:
//     case 2:
//     case 3:
//         result = "1, 2, or 3";
//         break;
//     case 4:
//         result = "4 alone";
// }
//Problem:
// Write a switch statement to set answer for the following ranges:
//     1-3 - Low
//     4-6 - Mid
//     7-9 - High
//
//     Note: You will need to have a case statement for each number in the range.
//
// function sequentialSizes(val) {
//     let answer = "";
//     // Only change code below this line
//     switch (val) {  //val is passed into the function
//         case 1:
//         case 2:
//         case 3:
//             answer = "Low";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer =  "Mid";
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer =  "High";
//             break;
//     }
//     // Only change code above this line
//     return answer;
// }
// sequentialSizes(1);
// console.log(sequentialSizes(1));   //works
// console.log(sequentialSizes(9));  //works

// ****************************************************************

//Replacing If Else Chains with Switch
//Example:
//If you have many options to choose from, a switch statment can be easier to write than many chained if/else if statments:
// if (val === 1) {
//     answer = "a";
// } else if (val === 2) {
//     answer = "b";
// } else {
//     answer = "c";
// }

// can be replaced with:

// switch(val) {
//     case 1:
//         answer = "a";
//         break;
//     case 2:
//         answer = "b";
//         break;
//     default:
//         answer = "c";
// }

//Problem:
// function chainToSwitch(val) {
//     let answer = "";
// Only change code below this line
//old if else statement:

// if (val === "bob") {
//     answer = "Marley";
// } else if (val === 42) {
//     answer = "The Answer";
// } else if (val === 1) {
//     answer = "There is no #1";
// } else if (val === 99) {
//     answer = "Missed me by this much!";
// } else if (val === 7) {
//     answer = "Ate Nine";
// }

//new switch statement:
//     switch (val) {
//         case "bob":
//             answer = "Marley";
//             break;
//         case 42:
//             answer = "The Answer";
//             break;
//         case 1:
//             answer = "There is no #1";
//             break;
//         case 99:
//             answer = "Missed me by this much!";
//             break;
//         case 7:
//             answer = "Ate Nine";
//             break;
//     }
//
//     // Only change code above this line
//     return answer;
// }

// chainToSwitch(7);
// console.log(chainToSwitch(7));

// ****************************************************************
//TODO for April 18 2022

// Returning Boolean Values from Functions
// You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.
//
//     Sometimes people use an if/else statement to do a comparison, like this:
//
//     function isEqual(a, b) {
//         if (a === b) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:
//
// function isEqual(a, b) {
//     return a === b;
// }
// Fix the function isLess to remove the if/else statements.
//
// // Problem:
//     function isLess(a, b) {
//         // Only change code below this line
//         // if (a < b) {
//         //     return true;
//         // } else {
//         //     return false;
//         // }
//
//         // function isLess(a,b) {
//             return a < b;             //no need to explicitly ask for return true or false when all comparison operators already to that
//         // }
//         // Only change code above this line
//     }
// //
//     isLess(10, 15);
//     console.log(isLess(15, 10));

// ****************************************************************
//April 19 2022

// Return Early Pattern for Functions

// When a return statement is reached, the execution of the current function stops and control returns to the calling location.
//example:
// function myFun() {
//     console.log("Hello");
//     return "World";
//     console.log("byebye")
// }
// myFun()
// console.log(myFun());

//Problem:
// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

// Hint
// Remember that undefined is a keyword, not a string.
// Setup
// function abTest(a, b) {
// //     // Only change code below this line
// //
//     if (a < 0  || b < 0) {
//         return ;
//     }
// //
// //     // Only change code above this line
// //
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }
// //
// // console.log(abTest(-2, 2));
// // console.log(abTest(2, 2));

// TODO for April 20 2022

// Counting Cards
// In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
//
//     Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
//
//     Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'
// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.
//
//     Example Outputs: -3 Hold or 5 Bet
//
// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
// Do NOT return an array.
//     Do NOT include quotes (single or double) in the output.

// let count = 0;
//
// function cc(card) {
//
//     // Only change code below this line
//     switch (card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count--;
//             break;
//     }
//     if (count > 0) {
//         return count + " Bet";
//     } else {
//         return count + " Hold";
//     }
//     // Only change code above this line
//
// }
//
// cc(2);
// cc(2);
// cc(2);
// cc('K');
// cc('A');
//
// console.log(count);












