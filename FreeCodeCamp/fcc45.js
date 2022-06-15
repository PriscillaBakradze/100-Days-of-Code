//1. Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
}
spinalCase('This Is Spinal Tap');

//2. Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let consonants = str.match(consonantRegex);
    return consonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(consonants)
          .concat("ay")
      : str.concat("way");
}
translatePigLatin("consonant");
