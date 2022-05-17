//1. Change the regex countWhiteSpace to look for multiple whitespace characters in a string.
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result = sample.match(countWhiteSpace);

//2. Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.
let s = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let r = sample.match(countNonWhiteSpace);

//3. Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/g; 
let res = ohRegex.test(ohStr);

//4. Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/g;
let output = haRegex.test(haStr);

//5. Change the regex timRegex to match the word Timber only when it has four letter m's.
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/g;
let o = timRegex.test(timStr);

//6. Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
let favWord = "favorite";
let favRegex = /favou?rite/; 
let test = favRegex.test(favWord);

//7. Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let t = pwRegex.test(sampleWord);

//8. Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).*Roosevelt/; 
let a = myRegex.test(myString); 

//9. Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; 
let b = reRegex.test(repeatNum);

//10. Write a regex fixRegex using three capture groups that will search for each word in the string one two three. Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let c = str.replace(fixRegex, replaceText);

//11. Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let d = hello.replace(wsRegex, "");
