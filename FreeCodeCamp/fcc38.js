//1. Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  this.forEach(function(x){
    if (callback(x) == true){
      newArray.push(x);
    }
  });
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

//2. Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.
function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
