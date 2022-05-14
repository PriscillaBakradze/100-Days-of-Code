//1. Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; 
let result = twinkleStar.match(starRegex); 

//2. Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; 
let results = unRegex.test(exampleStr);

//3. Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let res = quoteSample.match(vowelRegex); 

//4. In order, the three match calls would return the values ["cat"], ["bat"], and null.
let quoteSamples = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let output = quoteSample.match(alphabetRegex); 

//5. Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
let sampleQuote = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let outPut = sampleQuote.match(myRegex); 

