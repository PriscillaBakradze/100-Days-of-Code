//1. Return an English translated sentence of the passed binary string. The binary string will be space separated.
function binaryAgent(str) {

    var binaryString = str.split(" ");
    var uniString = [];
  
    for (var i = 0; i < binaryString.length; i++) {
      uniString.push(String.fromCharCode(parseInt(binaryString[i], 2)));
    }
    return uniString.join("");
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//2. Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
//In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
//In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
//Remember, you can access object properties through either dot notation or [] notation.
function truthCheck(collection, pre) {

    let counter = 0;
  
    for (let c in collection) {
      if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
        counter++;
      }
    }
    return counter == collection.length;
}
truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
