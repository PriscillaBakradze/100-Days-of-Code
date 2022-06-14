//1. You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr, ...remove) {
    return arr.filter(elem => !remove.includes(elem));
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//2. Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
function whatIsInAName(collection, source) {
    const theSource = Object.keys(source);

    return collection
        .filter(obj => theSource
            .every(key => obj.hasOwnProperty(key) &&
                obj[key] === source[key]));
}
  
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
