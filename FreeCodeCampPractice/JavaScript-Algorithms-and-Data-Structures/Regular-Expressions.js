//18June2022

// Using the Test Method
// Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.
//
//     If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.
//
//     JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.
//
//     let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// testRegex.test(testStr);
// The test method here returns true.
//
//     Apply the regex myRegex on the string myString using the .test() method.
//
//Problem:
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);
// console.log(result);

//19June2022
// Match Literal Strings
// In the last challenge, you searched for the word Hello using the regular expression /Hello/. That regex searched for a literal match of the string Hello. Here's another example searching for a literal match of the string Kevin:
//
// let testStr = "Hello, my name is Kevin.";
// let testRegex = /Kevin/;
// testRegex.test(testStr);
// This test call will return true.
//
//     Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or KEVIN.
//
//     let wrongRegex = /kevin/;
// wrongRegex.test(testStr);
// This test call will return false.
//
//     A future challenge will show how to match those other forms as well.
//
//     Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.


//Problem:
//     let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);
// console.log(result);

//21June2022
// Match a Literal String with Different Possibilities
// Using regexes like /coding/, you can look for the pattern coding in another string.
//
//     This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.
//
// This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.
//
// You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.
//
// Complete the regex petRegex to match the pets dog, cat, bird, or fish.

//Problem:
let petString = "James has a pet cat.";
let petRegex = /dog| cat| bird| fish/; // Change this line
let result = petRegex.test(petString);



