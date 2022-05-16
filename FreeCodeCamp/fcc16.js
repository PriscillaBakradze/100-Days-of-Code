//1. Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;

//2. Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
let sample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let res = quoteSample.match(nonAlphabetRegex).length;

//3. Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let r = movieName.match(numRegex).length;

//4. Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.
let name = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let output = movieName.match(noNumRegex).length;

//5. Change the regex userCheck to fit the constraints listed below.

/*Usernames can only use alpha-numeric characters.
The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
Username letters can be lowercase and uppercase.
Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.*/
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let test = userCheck.test(username);
