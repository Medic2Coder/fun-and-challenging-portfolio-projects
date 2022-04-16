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

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {  //val is passed into the function
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer =  "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer =  "High";
            break;
    }
    // Only change code above this line
    return answer;
}
sequentialSizes(1);
console.log(sequentialSizes(1));   //works
console.log(sequentialSizes(9));  //works


