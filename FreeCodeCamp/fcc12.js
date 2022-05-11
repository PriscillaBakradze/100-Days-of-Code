//1. In the following code, import the default export from the math_functions.js file, found in the same directory as this file. Give the import the name subtract.
import subtract from "./math_functions.js";
subtract(7,4);

//2. Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.
const makeServerRequest = new Promise((resolve, reject) => {

});

//3. Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.
const makeServerRequests = new Promise((resolve, reject) => {
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
});

//4. Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.
const makeServersRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
});
makeServersRequest.then(result => {
    console.log(result);
});

//5. Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.
const serverRequest = new Promise((resolve, reject) => {
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
});
  
serverRequest.then(result => {
    console.log(result);
});
  
serverRequest.catch(error => {
    console.log(error);
});




