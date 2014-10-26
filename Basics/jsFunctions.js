//data types
// strings, integers, booleans, arrays, objects
//do some integer and string math

5 *5 
"Java" + "Script"

"HTML" + 5

//varibalize your name and log it
var name = "Matt";

console.log(name)
console.log("name");

//write named function to log name
function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Alan");


//log all the elements of an array
var myArray = [1,2,3,4,5,6];
for (var i = 0 ; i <= myArray.length; i++) {
  console.log(myArray[i]);
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

function logAllElemenets(array) {

  array.forEach(function(element, index, array){
    console.log(element);

  }); 

}

logAllElemenets(myArray);
