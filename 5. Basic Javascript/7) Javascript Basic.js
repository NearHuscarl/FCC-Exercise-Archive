// This is an inline comment
/* This is a
   multi-line comment */

// declare variable
var myName;

// asignment
var a;
var b = 5;
a = 1;
b = a;

// initialization
var c = 0;

// When JavaScript variables are declared, they have an initial value of undefined.
// If you do a mathematical operation on an undefined variable your result will be 
// NaN which means "Not a Number". If you concatenate a string with an undefined 
// variable, you will get a literal string of "undefined".

// Javascript var and func names are case sensitive
// Common practice is to use camelCase and ignore that feature
var camelCase;
var anotherCamelCaseVar;
var anotherLongCalmelCaseVar;

// Basic calculation
var a = 1 + 10;
var b = a - 5;
var b = a * 8;
var b = a / 2;

// Increment, Decrement
var myVar = 0;
myVar++;
myVar--;

// Decimal number
var decimalNumber = 4.2;

// Reminder
var reminder = 11 % 3 // = 2

// Assignment + Augmented Addition
var a = 8;
a += 2; // a = a + 2;

// Assignment + Augmented Subtraction
var b = 12;
b -= 4; // b = b - 4;

// Assignment + Augmented Multiplication
var c = 4.6;
c *= 10; // c = c * 10;

// Assignment + Augmented Division
var d = 108;
d /= 4; // d = d / 4;

// Convert celsius to fahrenheit by using previously algorithm
function convertToF(celsius) {
  var fahrenheit;

  fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}
convertToF(30);

// String Variable
var myFirstName = "Near";
var myLastName = "Huscarl";

// Escaping literal quotes in strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// or you can do this if the string has many double quotes for readability
var myOtherStr = 'I am a "double quoted" string inside "double quotes".'

// Escape sequences
var myStr = "FirstLine\n\\SecondLine\\\rThirdLine";
// Will print
// FirstLine
// \SecondLine\
// ThirdLine

// Concatenation in string
var myString = "First string, " + "Second string."; //First string, Second string.

// Concatenation in string using += operator
var myStr = "First string, ";
myStr += "Second string."

// Constructing strings with variables
var myName = "Near Huscarl";
var myStr = "My name is " + myName + ", currently im learning at freeCodeCamp";
// "My name is Near Huscarl, currently im learning at freeCodeCamp"

// Append varibles to strings
var myAge ="18 years old";
var myStr = "I am ";
myStr += myAge;

// Find the length of a string by using .length property
var myStr = "Trap Nation";
var strLength = myStr.length; // 11

// Index
var myName = "Near";
var firstLetterOfName = myName[0]; // "N"
var thirdLetterOfName = myName[2]; // "a"
var lastLetterOfName = myName[myName.length - 1]; // "r"
var thirdToLastLetterOfName = myName[myName.length - 3]; // "e"

// String immuitablity
var myStr = "Jello World";
// myStr[0] = "H"; // Nay
myStr = "Hello World"; // Yay

// String revision
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";

  result = "The " + myAdjective + " " + myNoun + " " + myVerb + " too " + myAdverb;
  result+= "\nAlso this sentence is not trying to be humourous."
  return result;
}

wordBlanks("dog", "big", "ran", "quickly");
// The big dog ran too quickly
// Also this sentence is not trying to be humourous

// Array
var myArray = ["Near", 18];

// Nest one array with another (Multi-dimensional array)
var superArray = [["The universe", 42], ["everything", 101010]];

// Access array data with indexes
var myArray = [1, 2, 3];
var firstElement = myArray[0]; // 1

// Unlike string, arrays are mutable
var myArray = ["a", "b", "d"];
myArray[2] = "c";

// Access multi-dimensional array
var myArray = [1, [2, 3], [4, 5, 6], [[7, 8], [9, 10]]];
myArray[0]; // 1
myArray[2][1] // 5
myArray[3][0][1] // 8

// push - Append data to the end of an array
var myArray = [1, 2, 3];
myArray.push(4); // myArray = [1, 2, 3, 4]

// pop - Remove the last item in an array and store that value (to assign to another var)
var myArray = ['a', 'b', 'c'];
var lastItem = myArray.pop(); 
// lastItem = 'c'
// myArray = ['a', 'b'];

// shift - Remove the first element of an array
var myArr = [["a", 1], ["b", 2], ["c", 3]];
var firstItem = myArr.shift();
// firstItem = ["a", 1]
// myArr = [["b", 2], ["c", 3]]

// unshift - Add element at the beginning of an array
var myArray = [["John", 22], ["Ken", 18]];
myArray.unshift(["Paul", 35]); // myArray = [["Paul", 35], ["John", 22], ["Ken", 18]]

// Shopping List - Array revision
var myList = [["Chocolate Bar", 15], ["Carrot", 6], ["Apple Pie", 2], ["Banana", 12], ["Onion", 6]];

// Function
function myFirstFunction()
{
   console.log("Hello World");
}
myFirstFunction(); // print Hello World

// Argument
function functionWithArgs(a, b)
{
   console.log(a - b);
}
functionWithArgs(5, 4); // 1

// Variable scope
var globalVar = 1; // Global scope - can be seen anywhere
anotherGlobalVar = 2; // Also global scope

function func()
{
   var localScope = 3; // Local scope - only exists in this function
   notLocalScope = 4; // Global scope - variables without var keyword are always global
}

// Global and Local scope in function
var myVar = "Global";

function func()
{
   var myVar = "Local";
   console.log(myVar); // Print Local - local variables take precedence over globle variables
}

// Return a value from a function
function minusSeven(a)
{
   return a - 7;
}
var b = minusSeven(7); // b = 0

// Queue - Function revision
// In Computer Science a queue is an abstract Data Structure where items are kept in order.
// New items can be added at the back of the queue and old items are taken off from the front of the queue
function nextInLine(arr, item)
{
   arr.push(item);
   item = arr.shift();
   return item;
}
var testArr = [1, 2, 3, 4, 5];
console.log(nextInLine(testArr, 6)); // Print 1
// testArr = [2, 3, 4, 5, 6]

// Boolean value
function welcomeToBooleans()
{
   return true;
}
var boolVar = welcomeToBooleans(); // boolVar = true (not "true")

// if statement
function trueOrFalse(isItTrue)
{
   if (isItTrue) 
   {
      return true;
   }
   return false;
}
trueOrFalse(true);  // true
trueOrFalse(false); // false

// Equality operator (==)
function isEqualToTen(a)
{
   if(a == 10)
   {
      return true;
   }
   return false;
}
isEqualToTen(10);   // true
isEqualToTen('10'); // true
isEqualToTen("10"); // true
isEqualToTen(1.0);  // false

// Strict equality operator (===)
function isReallyEqualToTen(a)
{
   if(a === 10)
   {
      return true;
   }
   return false;
}
isEqualToTen(10);   // true
isEqualToTen('10'); // false
isEqualToTen("10"); // false
isEqualToTen(1.0);  // false

// Inequality operator (!=)
function isNotEqualTo99(myVar)
{
   if(myVar != 99)
   {
      return true;
   }
   return false;
}
isNotEqualTo99(99);   // false
isNotEqualTo99('99'); // false
isNotEqualTo99("99"); // false
isNotEqualTo99(9.9);  // true

// Strict inequality operator (!=)
function isReallyNotEqualTo99(myVar)
{
   if(myVar !== 99)
   {
      return true;
   }
   return false;
}
isNotEqualTo99(99);   // false
isNotEqualTo99('99'); // true
isNotEqualTo99("99"); // true
isNotEqualTo99(9.9);  // true

// Greater than operator (>)
function isGreaterThanTwo(myVar)
{
   if(myVar > 2)
   {
      return true;
   }
   return false;
}
isGreaterThanTwo(1);   // false
isGreaterThanTwo(4);   // true
isGreaterThanTwo('4'); // true
isGreaterThanTwo("4"); // true

// Greater than or equal to operator (>=)
function isGreaterOrEqual(myVar)
{
   if(myVar >= 100)
   {
      return "100 or over";
   }
   if(myVar >= 10)
   {
      return "10 or over";
   }
   return "Less than 10";
}
isGreaterOrEqual(100);   // "100 or over"
isGreaterOrEqual("200"); // "100 or over"
isGreaterOrEqual('30');  // "10 or over"
isGreaterOrEqual(5);     // "Less than 10"

// Less than operator (<)
function isLessThan(myVar)
{
   if(myVar < 5)
   {
      return "Under 5";
   }
   if(myVar < 10)
   {
      return "Under 10";
   }
   return "10 or over";
}
isLessThan(2);    // "Under 5"
isLessThan("20"); // "10 or over"
isLessThan('6');  // "Under 10"
isLessThan(5);    // "Under 10"

// Less than or equal to operator (<=)
function isLessOrEqual(myVar)
{
   if(myVar <= 12)
   {
      return "Smaller than or equal to 12";
   }
   if(myVar <= 24)
   {
      return "Smaller than or equal to 24";
   }
   return "25 or more";
}
isLessOrEqual(10);   // "Smaller than or equal to 12"
isLessOrEqual("15"); // "Smaller than or equal to 24"
isLessOrEqual('24'); // "Smaller than or equal to 24"
isLessOrEqual(30);   // "25 or more"

// And operator (&&)
function isInRange0_10(myVar)
{
   // if(myVar > 0)
   //    if(myVar < 10)
   //       return true;

   // The code above and below this line are the same

   if(myVar >= 0 && myVar <= 10)
      return true;
}
isInRange0_10(9) // true

// Or operator (||)
function isInRange0_10(myVar)
{
   // if(myVar < 0)
   //    return false;
   // if(myVar > 10)
   //    return false;
   // return true;

   // The code above and below this line are the same

   if(myVar < 0 || myVar > 10)
      return false;
   return true;
}
isInRange0_10(-1) // false

// else statement
function isGreaterThanFive(myVar)
{
   // if(myVar > 5)
   //    return "Bigger than 5";
   // if(myVar <= 5)
   //    return "5 or smaller";

   // The code above and below this line are the same

   if(myVar > 5)
      return "Bigger than 5";
   else
      return "5 or smaller";
}
isGreaterThanFive(5) // "5 or smaller"

// else if statement
function testIfElse(myVar)
{
   if(myVar > 10)
      return "Greater than 10";
   else if(myVar < 5)
      return "Smaller than 5";
   else
      return "Between 5 and 10";
}
testIfElse(6) // "Between 5 and 10"

// Chaining if-else statement
function getSize(size)
{
   if(size < 5)
      return "Tiny";
   else if(size < 10)
      return "Small";
   else if(size < 15)
      return "Medium";
   else if(size < 20)
      return "Large";
   else // >= 20
      return "Huge";
}
getSize(6);  // Small
getSize(20); // Large

// Golf Code - if-else and boolean revision
function golfScore(par, strokes)
{
   if(strokes == 1)
      return "Hole-in-one!";
   else if(strokes <= par-2)
      return "Eagle";
   else if(strokes <= par-1)
      return "Birdie";
   else if(strokes == par)
      return "Par";
   else if(strokes == par+1)
      return "Bogey";
   else if(strokes == par+2)
      return "Double Bogey";
   else if (strokes >= par+3)
      return "Go Home!";
}
golfScore(5, 4); // 

// switch statement
function caseInSwitch(val)
{
   var answer = "";

   switch(val)
   {
      case 1:
         answer = "alpha";
         break;
      case 2:
         answer = "beta";
         break;
      case 3:
         answer = "gamma";
         break;
      case 4:
         answer = "delta";
         break;
      default:
         answer = "other";
         break;
   }
   return answer;
}
caseInSwitch(1);  // alpha
caseInSwitch(2);  // beta
caseInSwitch(3);  // gamma
caseInSwitch(4);  // delta
caseInSwitch(12); // other

// Multiple identical options in switch statement
function sequentialSizes(val)
{
   var answer = "";

   switch(val)
   {
      case 1:
      case 2:
      case 3:
         answer = "Low";
         break;
      case 4:
      case 5:
      case 6:
         answer = "Mid";
         break;
      case 7:
      case 8:
      case 9:
         answer = "High";
         break;
      default:
         break;
   }
   return answer;
}
sequentialSizes(1); // Low
sequentialSizes(5); // Mid
sequentialSizes(9); // High

// Return boolean values from functions
function isGreater(a, b)
{
   // if(a > b)
   // {
   //    return true;
   // }
   // return false;

   // The code above and below this line are the same

   return a > b;
}
isGreater(4, 1); // true

// return early pattern for functions
function abTest(a, b)
{
   if(a < 0 || b < 0)
   {
      return undefined;
   }
   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2, 2);  // 8
abTest(-1, 1); // undefined

// Counting cards
//
var count = 0;
function cardCounting(card)
{
   switch(card)
   {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count++;
         break;
      case 7:
      case 8:
      case 9:
         break;
      case 10:
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
         count--;
         break;
      default:
         break;
   }
   if(count > 0)
   {
      return count + " Bet";
   }
   return count + " Hold";
}
cc(2); cc(3); cc(7); cc('K'); cc('A'); // 0 Hold

// Object
var myDog = {
   "name": "Doggo",
   "legs": 4,
   "tails": 1,
   "color": ["many"]
}

// Access object properties using dot operator (.)
var clothes = {
   "hat": "ballcap",
   "shirt": "jersey",
   "shoes": "cleats"
}
var hatValue = clothes.hat;     // "ballcap"
var shirtValue = clothes.shirt; // "jersey"

// Access object properties using bracket notation ([]) - if the property has a space in it
var testObj = {
     "an entree": "hamburger",
     "my side": "veggies",
     "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue  = testObj["the drink"];

// Access object properties with variables
var playerNumberList {
   7: "Ronaldo",
   5: "Zidane",
   8: "Kaka"
}

var kakaNumber = 8;
var player = playerNumberList[kakaNumber]; // Kaka

// Update object property
var myCat = {
   "name": "Tom",
   "legs": 5,
   "tails": -1,
   "color": ["many"]
}
myCat.legs = 4;
myCat["tails"] = 1;

// Add new properties to object
var myCat = {
   "name": "Tom",
   "legs": 5,
   "tails": -1,
   "color": ["many"]
}
myCat.noise = "Meow";
myCat["food"] = "Mouse";
// var myCat = {
//    "name": "Tom",
//    "legs": 5,
//    "tails": -1,
//    "color": ["many"]
//    "noise": "Meow",
//    "food": "Mouse"
// }

// Delete properties from an object
var car {
   "brand": "Nexus",
   "wheels": 4,
   "price": 200000,
   "color": "gray"
}
delete car.color;
delete car["wheels"];
// var car {
//    "brand": "Nexus",
//    "price": 200000,
// }

// Using object for look up
var lookUp = {
   "alpha": "Adams",
   "bravo": "Boston",
   "charlie": "Chicago",
   "delta": "Denver",
   "echo": "Easy",
   "foxtrot": "Frank"
}
lookUp["alpha"] // Adams

// Check if properties exist
var apparel = {
   "top": "hat",
   "bottom": "pants"
}
apparel.hasOwnProperty("top");    // true
apparel.hasOwnProperty("middle"); // false

// Manipulate complex objects
var myMusic = [
   {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
         "CS",
         "8T",
         "LP" ],
      "gold": true
   },
   {
      "artist": "Christian Buttner",
      "title": "TheFatRat",
      "release_year": 2011,
      "formats": [
         "LP",
         "CD" ],
      "gold": false
   }
];

// Access nested objects
var myStorage = {
   "car":
   {
      "inside":
      {
         "glove box": "maps",
         "passenger seat": "crumbs"
      },
      "outside":
      {
         "trunk": "jack";
      }
   }
};
var gloveBoxContents = myStorage.car.inside["glove box"]; // "maps"

// Access nested array of objects
var outPets = [
   {
      animalType: "cat",
      name: [
         "Meowzer",
         "Fluffy",
         "Kit-Cat"
      ]
   },
   {
      animalType: "dog",
      names: [
         "Spot",
         "Bowser",
         "Frankie"
      ]
   }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"

// for loop
var array = [];

for(var i = 0; i < 6; i++)
{
   array.push(i);
}
// array = [0, 1, 2, 3, 4, 5]

// Iterate odd numbers with a for loop
var array = [];

for(var i = 0; i <= 10; i+=2)
{
   array.push(i);
}
// array = [0, 2, 4, 6, 8, 10]

// Count backward with a for loop
var myArr = [];

for(var i = 7; i > 0; i -= 2)
{
   myArr.push(i);
}
// myArr = [7, 5, 3, 1]

// Iterate through an array with a for loop
var arr = [1, 4, 5, 7, 10];

for(var i = 0; i < arr.length; i++)
{
   console.log(arr[i]);
}

// Nesting for loop
var myArr = [[1, 2], [3, 4], [5, 6, 7]];

for(var i = 0; i < myArr.length; i++)
{
   for(var j = 0; j < myArr[i].length; j++)
   {
      console.log(myArr[i][j]);
   }
}

// while loop
var array = [];
var i = 0;

while(i < 5)
{
   array.push(i);
   i++;
}
// array = [0, 1, 2, 3, 4]

// Profile lookup - Object and loop revision
var contacts = [
   {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
   },
   {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
   },
   {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
   },
   {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["Javascript", "Gaming", "Foxes"]
   }
];

function lookUpProfile(firstName, prop)
{
   for(var i = 0; i < contacts.length; i++)
   {
      if(contacts[i].firstName === firstName)
      {
         if(contacts[i].hasOwnProperty(prop))
         {
            return contacts[i][prop];
         }
         else
         {
            return "No such property";
         }
      }
   }
   return "No such contact";
}
lookUpProfile("Akira", "likes");    // ["Pizza", "Coding", "Brownie Points"]
lookUpProfile("John", "number");    // "No such contact"
lookUpProfile("Harry", "hometown"); // "No such property"

// Random function - return a fraction
Math.random(); // return everything between 0 (inclusive and 1 (exclusive)

// Generate a random whole numbers
function randWholeNumber(number)
{
   // Math.floor(): round the number down to its neareast whole number
   return Math.floor(Math.random() * 100); // Generate random number from 0 to 99
}

// Generate random numbers within a range
function randNumberInRange(min, max)
{
   return Math.floor(Math.random() * (max - min + 1) + min);
}

// Regular expression
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";
// / is the start of the regular expression
// software is the pattern to match
// / is the end of the regular expression
// g stands for global, return all matches instead of first match
// i stands for ignorecase (uppercase and lowercase doesn't matter)
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length; // 1

// Find number with regular expression
var testString = "There are 3 cats but 4 dogs.";
// \d is digit selector - match a digt
// + is used to append after a selector to match one or more times
// \d+\ means match one and more digits
var expression = /\d+/g;
var digitCount = testString.match(expression).length; // 2

// Find whitespace with regular expression
var testString = "How many spaces are there in this sentence?";
// \s is whitespace selector - match any spaces, tabs, linebreaks
var expression = /\s+/g;
var spaceCount = testString.match(expression).length; // 7

// Invert regular expression matches
var testString = "How many non-space characters are there in this sentence?";
// \S is opposite to \s - match anything that is not a whitespace
var expressionToGetWord = /\S+/g;
var expressionToGetChar = /\S/g;
var charCount = testString.match(expressionToGetWord).length; // 9
var wordCount = testString.match(expressionToGetChar).length; // 49
