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

// ****************************************************************

// Build JavaScript Objects
// You may have heard the term object before.
//
//     Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
//
//     Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
//
//     Here's a sample cat object:
//
// const cat = {
//     "name": "Whiskers",
//     "legs": 4,
//     "tails": 1,
//     "enemies": ["Water", "Dogs"]
// };
// In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:
//
//     const anotherObject = {
//         make: "Ford",
//         5: "five",
//         "model": "focus"
//     };
// However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.
//
//     Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.
//
//     You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.

//Problem:
// const myDog = {
//     // Only change code below this line
//     "name": "Hairy",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["Human1", "Human2", "Human3", "Dog1", "Dog2"]
//
//
//     // Only change code above this line
// };
//
// console.log(myDog);

//22April2022

// Accessing Object Properties with Dot Notation
// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
//
//     Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
//
// Here is a sample of using dot notation (.) to read an object's property:
//
// const myObj = {
//     prop1: "val1",
//     prop2: "val2"
// };
//
// const prop1val = myObj.prop1;
// const prop2val = myObj.prop2;
// prop1val would have a value of the string val1, and prop2val would have a value of the string val2.
//
//     Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.
//
// Problem
// Setup
// const testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
// };
//
// // Only change code below this line
// const hatValue = testObj.hat;      // Change this line
// const shirtValue = testObj.shirt;    // Change this line

// 23April2022
// Accessing Object Properties with Bracket Notation
// The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
//
//     However, you can still use bracket notation on object properties without spaces.
//
//     Here is a sample of using bracket notation to read an object's property:
//
// const myObj = {
//     "Space Name": "Kirk",
//     "More Space": "Spock",
//     "NoSpace": "USS Enterprise"
// };
//
// myObj["Space Name"];
// myObj['More Space'];
// myObj["NoSpace"];
// myObj["Space Name"] would be the string Kirk, myObj['More Space'] would be the string Spock, and myObj["NoSpace"] would be the string USS Enterprise.
//
//     Note that property names with spaces in them must be in quotes (single or double).
//
// Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.

// // Setup
// const testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
// };
//
// // Only change code below this line
// const entreeValue = testObj["an entree"]; // Change this line
// const drinkValue = testObj["the drink"]; // Change this line

//24April2022
// Accessing Object Properties with Variables
//     Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
//
// Here is an example of using a variable to access a property:
//
//     const dogs = {
//         Fido: "Mutt",
//         Hunter: "Doberman",
//         Snoopie: "Beagle"
//     };
//
// const myDog = "Hunter";
// const myBreed = dogs[myDog];
// console.log(myBreed);
// The string Doberman would be displayed in the console.
//
//     Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:
//
// const someObj = {
//     propName: "John"
// };
//
// function propPrefix(str) {
//     const s = "prop";
//     return s + str;
// }
//
// const someProp = propPrefix("Name");
// console.log(someObj[someProp]);
// someProp would have a value of the string propName, and the string John would be displayed in the console.
//
//     Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.
//
//     Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
//
//Problem
// Setup
// const testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
// };
//
// // Only change code below this line
// const playerNumber = 16;  // Change this line
// const player = testObj[playerNumber];   // Change this line
// console.log(player);

//25April2022
// Updating Object Properties
// After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.
//
// For example, let's look at ourDog:
//
// const ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };
// Since he's a particularly happy dog, let's change his name to the string Happy Camper. Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.
//
// Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
//
//
//  Problem:
// Setup
// const myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };
//
// // Only change code below this line
// myDog.name = "Happy Coder";
// console.log(myDog.name);


// // Add New Properties to a JavaScript Object
// // You can add new properties to existing JavaScript objects the same way you would modify them.
// //
// //     Here's how we would add a bark property to ourDog:
// //
// // ourDog.bark = "bow-wow";
// // or
// //
// // ourDog["bark"] = "bow-wow";
// // Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.
//
// Example:
//
//     const ourDog = {
//         "name": "Camper",
//         "legs": 4,
//         "tails": 1,
//         "friends": ["everything!"]
//     };
//
// ourDog.bark = "bow-wow";
// // Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

//Problem
// Setup

// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };
// myDog.bark= "woof";
// console.log(myDog.bark);

// Delete Properties from a JavaScript Object
// We can also delete properties from objects like this:
//
// delete ourDog.bark;
// Example:
//
//     const ourDog = {
//         "name": "Camper",
//         "legs": 4,
//         "tails": 1,
//         "friends": ["everything!"],
//         "bark": "bow-wow"
//     };
//
// delete ourDog.bark;
// After the last line shown above, ourDog looks like:
//
// {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// }
// Delete the tails property from myDog. You may use either dot or bracket notation
//
// Problem:

// Setup
// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
// };
//
// // Only change code below this line
// delete myDog.tails;
// console.log(myDog);
//

//
// Using Objects for Lookups
//     Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.
//
//     Here is an example of a simple reverse alphabet lookup:
//
//     const alpha = {
//         1:"Z",
//         2:"Y",
//         3:"X",
//         4:"W",
//         ...
//             24:"C",
//     25:"B",
//     26:"A"
// };
//
// alpha[2];
// alpha[24];
//
// const value = 2;
// alpha[value];
// alpha[2] is the string Y, alpha[24] is the string C, and alpha[value] is the string Y.
//
//     Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.


// Problem:
// Setup
// function phoneticLookup(val) {
//     let result = "";
//
//     // Only change code below this line
//     var lookup = {
//         //create key/value pairs
//         "alpha": "Adams",
//         "bravo": "Boston",
//         "charlie": "Chicago",
//         "delta": "Denver",
//         "echo": "Easy",
//         "foxtrot": "Frank",
//
//     };
//     result = lookup[val];
//
//
//
//     // Only change code above this line
//     return result;
// }
//
// phoneticLookup("charlie");
// console.log(phoneticLookup("charlie"));


// Testing Objects for Properties
//     Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.
//
//     Example
//
// const myObj = {
//     top: "hat",
//     bottom: "pants"
// };
//
// myObj.hasOwnProperty("top");
// myObj.hasOwnProperty("middle");
// The first hasOwnProperty returns true, while the second returns false.
//
//     Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".
//

// // Problem:
// function checkObj(obj, checkProp) {
//     // Only change code below this line
//     if (obj.hasOwnProperty(checkProp)) {
//         return obj[checkProp];
//     } else {
//         return "Not Found";
//     }
//     // Only change code above this line
// }
//


// Manipulating Complex Objects
// Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
//
//     Here's an example of a complex data structure:
//
// const ourMusic = [
//     {
//         "artist": "Daft Punk",
//         "title": "Homework",
//         "release_year": 1997,
//         "formats": [
//             "CD",
//             "Cassette",
//             "LP"
//         ],
//         "gold": true
//     }
// ];
// This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested formats array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk. JavaScript Object Notation or JSON is a related data interchange format used to store data.
//
// {
//     "artist": "Daft Punk",
//     "title": "Homework",
//     "release_year": 1997,
//     "formats": [
//     "CD",
//     "Cassette",
//     "LP"
// ],
//     "gold": true
// }
// Note: You will need to place a comma after every object in the array, unless it is the last object in the array.
//
//     Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.


// //Problem:
// const myMusic = [ //array called myMusic
//     {
//         "artist": "Billy Joel",     //objects with key value pairs
//         "title": "Piano Man",
//         "release_year": 1973,
//         "formats": [
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "gold": true
//     },
//     //Add record here
//     {        //second object in the array
//         "artist": "Celine Dion",
//         "title": "The Voice",
//         "release_year": 1994,
//         "formats": [ "CD", "LP" ],
//         "gold": true
//     },
//     {
//         "another_artist": "Billy Joel 2",     //objects with key value pairs
//         "another_title": "Piano Man",
//         "release_year_something": 1974,
//         "format": [
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "golds": true
//     },
//
//     {     //fourth object in the array
//         "another_artist": "Someone 2.0",
//         "another_title": "Something 2.0 redefinied",
//         "another_release_year": 2021,
//         "another_formats": [ "Youtube", "Live", "NFT" ],
//         "another_gold": true
//
//     },
// ];
// console.log(myMusic);

//TODO for 01May2022:
// Accessing Nested Objects
// The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
//
//     Here is a nested object:
//
//     const ourStorage = {
//         "desk": {
//             "drawer": "stapler"
//         },
//         "cabinet": {
//             "top drawer": {
//                 "folder1": "a file",
//                 "folder2": "secrets"
//             },
//             "bottom drawer": "soda"
//         }
//     };
//
// ourStorage.cabinet["top drawer"].folder2;
// ourStorage.desk.drawer;
// ourStorage.cabinet["top drawer"].folder2 would be the string secrets, and ourStorage.desk.drawer would be the string stapler.
//
//     Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.


// //Problem:
// const myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };
//
// const gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);

//TODO for 02May2022:
// Accessing Nested Arrays
// As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.
//
//     Here is an example of how to access a nested array:
//
//     const ourPets = [
//         {
//             animalType: "cat",
//             names: [
//                 "Meowzer",
//                 "Fluffy",
//                 "Kit-Cat"
//             ]
//         },
//         {
//             animalType: "dog",
//             names: [
//                 "Spot",
//                 "Bowser",
//                 "Frankie"
//             ]
//         }
//     ];
//
// ourPets[0].names[1];
// ourPets[1].names[0];
// ourPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.
//
//     Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.

//Problem:
// const myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];
//
// const secondTree = myPlants[1].list[1];
// console.log(secondTree);



// Record Collection
// You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.
//
//     You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.
//
// Your function must always return the entire record collection object.
//     If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
//     If value is an empty string, delete the given prop property from the album.
//     Note: A copy of the recordCollection object is used for the tests.

//Problem:
// Setup
// const recordCollection = {
//     2548: {
//         albumTitle: 'Slippery When Wet',
//         artist: 'Bon Jovi',
//         tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//         albumTitle: '1999',
//         artist: 'Prince',
//         tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//         artist: 'Robert Palmer',
//         tracks: []
//     },
//     5439: {
//         albumTitle: 'ABBA Gold'
//     }
// };
//
// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//     if (value === '') {
//         delete records[id][prop];
//     } else if (prop === 'tracks') {
//         records [id][prop] = records[id][prop] || [];  // check if the property exists, if not, create an empty array, then push the value to the array
//         records [id][prop].push(value);
//     } else {
//         records [id][prop] = value;
//     }
//     return records;
// }
//
// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// console.log(recordCollection);

//
// Iterate with JavaScript While Loops
// You can run the same code multiple times by using a loop.
//
//     The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.
//
//     const ourArray = [];
// let i = 0;
//
// while (i < 5) {
//     ourArray.push(i);
//     i++;
// }
// In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.
//
//     Let's try getting a while loop to work by pushing values to an array.
//
// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
// PROBLEM:
// Setup
// const myArray = [];
//
// // Only change code below this line
// let i = 5;
// while (i >=0 ) {
//     myArray.push(i);
//     i--;
// }
// console.log(myArray);

// Iterate with JavaScript For Loops
// You can run the same code multiple times by using a loop.
//
//     The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.
//
//     For loops are declared with three optional expressions separated by semicolons:
//
//     for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.
//
//     The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.
//
//     The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.
//
//     The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.
//
//     In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final expression.
//
// const ourArray = [];
//
// for (let i = 0; i < 5; i++) {
//     ourArray.push(i);
// }
// ourArray will now have the value [0, 1, 2, 3, 4].
//
//     Use a for loop to push the values 1 through 5 onto myArray.

//    PROBLEM:
// Setup
    const myArray = [];

// Only change code below this line
for (let i = 1; i <=5; i++) {
    myArray.push(i);
}
console.log(myArray);
































