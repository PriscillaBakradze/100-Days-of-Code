//1. Add a script to the HTML document of type module and give it the source file of index.js
<html>
  <body>
      <script type="module" src="index.js"></script>
  </body>
</html>

//2. There are two string-related functions in the editor. Export both of them using the method of your choice.
const uppercaseString = (string) => {
    return string.toUpperCase();
}
  
const lowercaseString = (string) => {
    return string.toLowerCase()
}
export {uppercaseString, lowercaseString};

//3. Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

//4. The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.
import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//5. The following function should be the fallback value for the module. Please add the necessary code to do so.
export default function subtract(x, y) {
    return x - y;
}
