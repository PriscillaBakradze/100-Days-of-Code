//1. Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
function smallestCommons(arr) {

    const [min, max] = arr.sort((a,b) => a - b);
    const divisors = max - min + 1;
    let upperBound = 1;

    for (let i = min; i <= max; i++) {
      upperBound *= i;
    }

    for (let multiple = max; multiple <= upperBound; multiple += max) {
        let divisorCount = 0;
        for(let i = min; i <= max; i++) {
            if (multiple % i === 0) {
                divisorCount += 1;
            }
        }
        if (divisorCount === divisors) {
            return multiple;
        }
    }
}
smallestCommons([1,5]);
