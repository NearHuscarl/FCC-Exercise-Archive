// Declare javascript objects as variables
var car = {
   "wheels": 4,
   "engines": 1,
   "seats": 5
}

var motorbike = {
   "wheels": 2,
   "engines": 1,
   "seats": 2
}

// Constructor
var Car = function() {
   // this refers to the object itself
   this.wheels = 4;
   this.engines = 1;
   this.seats = 5;
};

var Motorbike = function() {
   this.wheels = 2;
   this.engines = 1;
   this.seats = 2;
};

// Make instances of an object using constructor function
var myCar = new Car();
myCar.nickname = "hector";
// myCar = {
//    "wheels": 4,
//    "engines": 1,
//    "seats": 5,
//    "nickname": "hector"
// }

// Passing parameters to constructor
var Car = function(wheels, seats, engines) {
   this.wheels = wheels;
   this.engines = engines;
   this.seats = seats;
};
var myCar = new Car(4, 4, 2);
// myCar = {
//    "wheels": 4,
//    "seats": 4,
//    "engines": 2,
// }

// Make property private
var Car = function() {
   // Use var keyword to make variables (and methods) private
   var speed = 20;

   // Use this keyword to make methods (and variables) public
   this.accelerate = function(change) {
      speed += change;
   };

   this.decelarate = function() {
      speed -= 5;
   };

   this.getSpeed = function() {
      return speed;
   };
};
var myCar = new Car();

var Motorbike = function() {
   var gear = 0;

   this.setGear = function(numOfGear) {
      gear = numOfGear;
   };

   this.getGear = function() {
      return gear;
   };
};
var myMotorbike = new Motorbike();

// Iterate over arrays using map
var oldArray = [1, 2, 3];
var newArray = oldArray.map(
   function(val) {
      return val * 10;
   });
// oldArray = [1, 2, 3];
// newArray = [10, 20, 30];

// Condense array with reduce
var array = [10, 20, 30];
var singleVal = array.reduce(
   function(acc, val) {
      return acc + val;
   }, 100);
// singleVal = 160;
var array2 = [10, 20, 30];
var singleVal2 = array2.reduce(
   function(acc, val) {
      return acc + val;
   });
// singleVal2 = 60;

// Filter arrays with filter
var oldArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
newArray = Oldarray.filter(
   function(val) {
      return val >= 4;
   });
// newArray = [4, 5, 6, 7, 8, 9, 10];

// Sort array with sort
var array = [2, 7, 4, 1, 9, 6, 3, 2];
// Default: sort alphabetically
array.sort(); // array = [1, 2, 2, 3, 4, 6, 7, 9];
// function return positive value if a should be before b
// and negative value if a should be after b
// 0 if they are equal
array.sort(
   function(a, b) {
      return b - a;
   }); // array = [9, 7, 6, 4, 3, 2, 2, 1];
array.sort(
   function(a, b) {
      return a - b;
   }); // array = [1, 2, 2, 3, 4, 6, 7, 9];

// Reverse arrays with reverse
var myArray = [1, 2, 3, 5];
var newArray = myArray.reverse(); // newArray = [5, 3, 2, 1];

// Concatenate arrays with concat
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var newArray = array1.concat(array2); // newArray = [1, 2, 3, 4, 5, 6];

// Split strings with split
var string = "Split me into an array";
var array = [];
array = string.split(" "); // array = ["Split", "me", "into", "an", "array"];

// Join strings with join
var veggies = ["Celery", "Radish", "Carrot", "Potato"];
var salad = veggies.join(" and "); // salad = "Celery and Radish and Carrot and Potato";
