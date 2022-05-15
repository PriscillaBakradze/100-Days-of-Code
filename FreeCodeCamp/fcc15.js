//1. Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; 
let result = quoteSample.match(myRegex); 

//2. You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.
let difficultSpelling = "Mississippi";
let regex = /s+/g; 
let results = difficultSpelling.match(myRegex);

//3. For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. 
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 

let res = chewieQuote.match(chewieRegex);

//4. Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.
let text = "<h1>Winter is coming</h1>";
let theRegex = /<.*?>/; 
let output = text.match(myRegex);

//5. Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.
let reCriminals = /C+/; 

//6. Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let r = calRegex.test(rickyAndCal);

//7. Use the anchor character ($) to match the string caboose at the end of the string caboose.
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let theResult = lastRegex.test(caboose);
