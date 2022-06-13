//1. Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.
function checkPositive(arr) {
    return arr.some(function(output){
      return output > 0;
    })
}
  
checkPositive([1, 2, 3, -4, 5]);

//2. Fill in the body of the add function so it uses currying to add parameters x, y, and z.
function add(x) {
    return function(y){
      return function(z){
        return x + y + z;
      }
    }
}
  
add(10)(20)(30);

