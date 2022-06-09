//1. Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.
function nonMutatingSplice(cities) {
    return cities.slice(0, 3);
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

//2. Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.
function nonMutatingConcat(original, attach) {
    return original.concat(attach);
}
const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

//3. Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.
function nonMutatingPush(original, newItem) {
    return original.concat(newItem);
}
const one = [1, 2, 3];
const two = [4, 5];
nonMutatingPush(one, two);

//4. The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function.
function getRating(watchList) {
    let averageRating = watchList
    .filter(film => film.Director === "Christopher Nolan")
    .map(film => Number(film.imdbRating))
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    watchList.filter(film => film.Director === "Christopher Nolan").length;
    
    return averageRating;
}
console.log(getRating(watchList));
