//1. Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method.
function sentensify(str) {
    return str.split(/\W/).join(" ");
}
sentensify("May-the-force-be-with-you");

//2. Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:
//The input is a string with spaces and title-cased words
//The output is a string with the spaces between words replaced by a hyphen (-)
//The output should be all lower-cased letters
//The output should not have any spaces
// Only change code below this line
function urlSlug(title) {
    return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

//3. Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.
function checkPositive(arr) {
      return arr.every(function(output){
        return output > 0;
    })
}
checkPositive([1, 2, 3, -4, 5]);
