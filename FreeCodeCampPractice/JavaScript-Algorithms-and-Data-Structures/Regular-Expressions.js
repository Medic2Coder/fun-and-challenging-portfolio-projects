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
// let petString = "James has a pet cat.";
// let petRegex = /dog| cat| bird| fish/; // Change this line
// let result = petRegex.test(petString);

//22June2022

// Ignore Case While Matching
// Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.
//
// Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.
//
//     You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
//
// Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

//
//Problem:
// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i; // Change this line
// let result = fccRegex.test(myString);

//23June2022
// Extract Matches
// So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.
//
//     To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.
//
//     Here's an example:
//
// "Hello, World!".match(/Hello/);
// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// ourStr.match(ourRegex);
// Here the first match would return ["Hello"] and the second would return ["expressions"].
//
//     Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
//
//     'string'.match(/regex/);
// /regex/.test('string');
// Apply the .match() method to extract the string coding.

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line
// console.log(result);

//24June2022
// Find More Than the First Match
// So far, you have only been able to extract or search a pattern once.
//
//     let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/;
// testStr.match(ourRegex);
// Here match would return ["Repeat"].
//
//     To search or extract a pattern more than once, you can use the global search flag: g.
//
//     let repeatRegex = /Repeat/g;
// testStr.match(repeatRegex);
// And here match returns the value ["Repeat", "Repeat", "Repeat"]
//
// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
//
//     Note
// You can have multiple flags on your regex like /search/gi

//
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex);
// console.log(result) ;

//25June2022
// Match Anything with Wildcard Period
// Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .
//
// The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
//
// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// huRegex.test(humStr);
// huRegex.test(hugStr);
// Both of these test calls would return true.

    // Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.

//     let exampleStr = "Let's have fun with regular expressions!";
//     // let unRegex = /[a-z]un/;      //another example
//     let unRegex = /.un/;
//
// let result = unRegex.test(exampleStr);
// console.log(result);

//26June2022
// Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
//
//     For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.
//
//     let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// bigStr.match(bgRegex);
// bagStr.match(bgRegex);
// bugStr.match(bgRegex);
// bogStr.match(bgRegex);
// In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.
// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
//
//     Note: Be sure to match both upper- and lowercase vowels.
//
// Problem:
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi;
// let result = quoteSample.match(vowelRegex);
// console.log(result);

//01July2022
// Match All Letters of the Alphabet
// You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.
//
// Inside a character set, you can define a range of characters to match using a hyphen character: -.
//
// For example, to match lowercase letters a through e you would use [a-e].
//
//     let catStr = "cat";
// let batStr = "bat";
// let matStr = "mat";
// let bgRegex = /[a-e]at/;
// catStr.match(bgRegex);
// batStr.match(bgRegex);
// matStr.match(bgRegex);
// In order, the three match calls would return the values ["cat"], ["bat"], and null.
//
//     Match all the letters in the string quoteSample.
//
//     Note: Be sure to match both uppercase and lowercase letters.

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi;
// let result = quoteSample.match(alphabetRegex); // Change this line
// console.log(result);

//02July2022
// Match Numbers and Letters of the Alphabet
// Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.
//
//     For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
//
// Also, it is possible to combine a range of letters and numbers in a single character set.
//
//     let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/ig;
// jennyStr.match(myRegex);
// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
    //Problem:
//     let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result);
//

//04July2022
// Match Single Characters Not Specified
// So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.
//
//     To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.
//
//     For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.
//
//     Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
//
//Problem:
// let quoteSample = "3 blind mice.";
// let myRegex = /[^0-9aeiou]/gi; // Change this line
// let result = quoteSample.match(myRegex);
// console.log(result);

//05July2022
// Match Characters that Occur One or More Times
// Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.
//
//     You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
//
//     For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].
//
//     If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.
//
// You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.


//Problem:
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // Change this line
// let result = difficultSpelling.match(myRegex);
// console.log(result);

//06July2022
// Match Characters that Occur Zero or More Times
// The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.
//
// The character to do this is the asterisk or star: *.
//
// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex);
// gPhrase.match(goRegex);
// oPhrase.match(goRegex);
// In order, the three match calls would return the values ["goooooooo"], ["g"], and null.
//
//     For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.

    //Problem:
// Only change code below this line
// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /Aa*/;
// // Only change code above this line
//
// let result = chewieQuote.match(chewieRegex);
// console.log(result);


//07July2022
// Find Characters with Lazy Matching
// In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
//
//     You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.
//
//     Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.
//
//     However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].
//
//     Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.
//
//     Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

//Problem:
//
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/;
// let result = text.match(myRegex);
// console.log(result);

//08July2022
//Find One or More Criminals in a Hunt
// Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.
//
// Here's an example to review how to do this:
//
// The regex /z+/ matches the letter z when it appears one or more times in a row. It would find matches in all of the following strings:
//
// "z"
// "zzzzzz"
// "ABCzzzz"
// "zzzzABC"
// "abczzzzzzzzzzzzzzzzzzzzzabc"
// But it does not find matches in the following strings since there are no letter z characters:
//
// ""
// "ABC"
// "abcabc"
//
//Problem: Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.

//Answer: 

// let reCriminals = /C+/;
//

//09July2022
// Match Beginning String Patterns
// Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.
//
//     In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.
//
//     let firstString = "Ricky is first and can be found.";
// let firstRegex = /^Ricky/;
// firstRegex.test(firstString);
// let notFirst = "You can't find Ricky now.";
// firstRegex.test(notFirst);
// The first test call would return true, while the second would return false.

    // Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.
//     let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/;
// calRegex.test(rickyAndCal);
// console.log(calRegex.test(rickyAndCal));
//

//10July2022
// Match Beginning String Patterns
// Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.
//
//     In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.
//
//     let firstString = "Ricky is first and can be found.";
// let firstRegex = /^Ricky/;
// firstRegex.test(firstString);
// let notFirst = "You can't find Ricky now.";
// firstRegex.test(notFirst);
// The first test call would return true, while the second would return false.
//
//     Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal

// //Problem:
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/;
// calRegex.test(rickyAndCal);
// console.log(calRegex.test(rickyAndCal));

//11July2022
// Match Ending String Patterns
// In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.
//
//     You can search the end of strings using the dollar sign character $ at the end of the regex.
//
//     let theEnding = "This is a never ending story";
// let storyRegex = /story$/;
// storyRegex.test(theEnding);
// let noEnding = "Sometimes a story will have to end";
// storyRegex.test(noEnding);
// The first test call would return true, while the second would return false.
//
//     Use the anchor character ($) to match the string caboose at the end of the string caboose.
//Problem:
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/;
// let result = lastRegex.test(caboose);
// console.log(result);

//12July2022
// Match All Letters and Numbers
// Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.
//
//     The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).
//
//     let longHand = /[A-Za-z0-9_]+/;
// let shortHand = /\w+/;
// let numbers = "42";
// let varNames = "important_var";
// longHand.test(numbers);
// shortHand.test(numbers);
// longHand.test(varNames);
// shortHand.test(varNames);
// All four of these test calls would return true.
//
//     These shortcut character classes are also known as shorthand character classes.
//
//     Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
//

             //Problem:
//     let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;
// console.log(result);

//13July2022
// Match Everything But Letters and Numbers
// You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.
//
// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
//
// let shortHand = /\W/;
// let numbers = "42%";
// let sentence = "Coding!";
// numbers.match(shortHand);
// sentence.match(shortHand);
// The first match call would return the value ["%"] and the second would return ["!"].
//
//     Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

//Problem:
// let quoteSample = "The five boxing wizards jump quickly.";
// let notAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(notAlphabetRegex).length;
// console.log(result);

//14July2022
// Match All Numbers
// You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.
//
// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
//
//     Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.

    //Problem:
    //let movieName = "2001: A Space Odyssey";
//let numRegex = /\d/g;
//let result = movieName.match(numRegex).length;
//console.log(result);

//15July2022
//Match All Non-Numbers
//The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

//The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

//Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

//Problem:
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
























