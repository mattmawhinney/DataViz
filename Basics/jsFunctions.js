//data types
// strings, numbers, booleans, arrays, objects
//do some integer and string math




//numbers
5
10
5 + 10
5 * 10

5.5 * 5.5
5.5 * 3 

//strings 
"Java"
"Script"
"Java" + "Script"
"HTML" + 5

//booleans
true
false

5 < 10
5 > 10 

//booleans are extemely important for "control flow"
// if something is true do the X, otherwise do Y (which is oftentimes the opposite)


//variables
//varibalize your name and log it
var name = "Matt";

console.log(name)
console.log("name");


//arrays
//varibalize array 
var myArray = [1,2,3,4,5,6]
myArray[0]


//objects

var myObj = {
  name: "Matt",
  age: 30,
  favoriteFoods: ["pizza", "pasta", "paella"]
}

myObj.favoriteFoods

var myJSONObj = {
  "name": "Matt",
  "age": 30,
  "favoriteFoods": ["pizza", "pasta", "paella"]
}

myObj.favoriteFoods

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
