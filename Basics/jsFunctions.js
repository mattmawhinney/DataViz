//data types
// strings, numbers, booleans, arrays, objects
//do some integer and string math




//numbers
5;
typeof 5;
10;
5 + 10;
5 * 10;

5.5 * 5.5;
5.5 * 3;

//strings 
"Java";
"Script"''
"Java" + "Script";
"Java" * "Script";//--> NaN
"HTML" + 5;

//booleans
true
false

5 < 10;
5 > 10;

//booleans are extemely important for "control flow"
// if something is true do the X, otherwise do Y (which is oftentimes the opposite)


//variables
//varibalize your name and log it
var name = "Matt";

console.log(name);
console.log("name");


//arrays
//varibalize array 
var myArray = [1,2,3,4,5,6];
myArray[0];
myArray.push(0);
myArray.length;
myArray.pop();
myArray.sort();


//basic objects

var myObject = {
  name: "Matt",
  age: 30,
  favoriteFoods: ["pizza", "pasta", "paella"]
}

myObject.favoriteFoods
myObject.age

//write named function to log name
function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Alan");


function timesFive(number) {
  return number * 5
}

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


// window.document.getElementById("hplogo").onclick = function(){alert('hello')}
// jQuery


