// Reverse a string
function reverseString(str)
{
  var charList = str.split("");
  
  charList.reverse();
  str = charList.join("");

  return str;
}
console.log(reverseString("hello")); // olleh

// Factorialize a number
function factorialize(num)
{
   if(num === 0)
   {
      return 1;
   }
   for(var i = num-1; i > 0; i--)
   {
      num *= i;
   }
   return num;
}
console.log(factorialize(6)); // 720

// Check for Palindromes
/* jshint esversion: 6 */

function reverse(str)
{
  var arr = str.split("");
  arr = arr.reverse();
  str = arr.join("");
  return str;
}

function isNumber(str, index = 0)
{
   if(str.charCodeAt(index) >= 48 && str.charCodeAt(index) <= 57)
   {
      return true;
   }
   return false;
}

function isLetter(str, index = 0)
{
   if(str[index].match(/[a-z]/i))
   {
      return true;
   }
   return false;
}

function standarize(str)
{
  var charArray = [];
  
  for(var i = 0; i < str.length; i++)
  {
    if(isLetter(str[i]) || isNumber(str[i]))
    {
      charArray.push(str[i]);
    }
  }
  var standarizedStr = charArray.join("");
  standarizedStr = standarizedStr.toLowerCase();
  return standarizedStr;
}

function palindrome(str) 
{
  str = standarize(str);
  if(str === reverse(str))
  {
    return true;
  }
  return false;
}

console.log(palindrome("never odd or Even")); // true

// Find the longest word in a string
function findLongestWord(str)
{
   var wordArray = str.split(" ");
   var maxChar = 0;

   for(var i = 0; i < wordArray.length; i++)
   {
      if(wordArray[i].length > maxChar)
      {
         maxChar = wordArray[i].length;
      }
   }
   return maxChar;
}
findLongestWord("The quick brown fox jumped over the lazy dog"); // 6

// Title case a sentence
function titleCaseWord(str)
{
   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function titleCase(str)
{
   var wordArray = str.split(" ");

   for(var i = 0; i < wordArray.length; i++)
   {
      wordArray[i] = titleCaseWord(wordArray[i]);
   }
   str = wordArray.join(" ");
   return str;
}
titleCase("sHoRt AnD sToUt"); // "Short And Stout"

// Return largest number in an array (4 sub-arrays)
function largestOfFour(arr)
{
   var maxSum = 0;
   var maxArr = [];

   for(var i = 0; i < arr.length; i++)
   {
      for(var j = 0; j < arr[i].length; j++)
      {
         if(arr[i][j] > maxSum)
         {
            maxSum = arr[i][j];
         }
      }
      maxArr.push(maxSum);
      maxSum = 0;
   }
   return maxArr;
}
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); // [9, 35, 97, 1000000]

// Confirm the ending
function confirmEnding(str, target)
{
   var endStr = str.substr(str.length - target.length);

   if(endStr == target)
   {
      return true;
   }
   return false;
}
confirmEnding("He has to give me a new name", "name"); // true
confirmEnding("Open sesame", "same") // true
confirmEnding("Bastian", "n") // true
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") // false
confirmEnding("Connor", "n") // false

function repeatStringNumTimes(str, num)
{
   if(num < 0)
   {
      return "";
   }

   var originStr = str;
   for(var i = 0; i < num - 1; i++)
   {
      str += originStr;
   }
   return str;
}
repeatStringNumTimes("abc", 3) // "abcabcabc"

// Truncate a string
function truncateString(str, num)
{
   if(num >= str.length)
   {
      return str;
   }

   if(num > 3)
   {
      return str.slice(0, num - 3) + "...";
   }
   else // num <= 3
   {
      return str.slice(0, num) + "...";
   }
}
truncateString("A-", 1) // "A..."
truncateString("A-tisket a-tasket A green and yellow basket", 11) // "A-tisket..."
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) // "A-tisket a-tasket A green and yellow basket"

// Chunky monkey
function chunkArrayInGroups(arr, size)
{
   var result = [];

   for(var i = 0; i < arr.length; i += size)
   {
      if(i + size > arr.length)
      {

         result.push(arr.slice(i));
      }
      else
      {
         result.push(arr.slice(i, i + size));
      }
   }
   return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // [[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]

// Slasher flick
function slasher(arr, howMany)
{
   return arr.slice(howMany);
}
slasher([1, 2, 3], 2); // [3]
slasher(["burgers", "fries", "shake"], 1) // ["fries", "shake"]
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) // ["cheese", 4]

// Mutations
function mutation(arr)
{
   arr[0] = arr[0].toLowerCase();
   arr[1] = arr[1].toLowerCase();

   for(var i = 0; i < arr[1].length; i++)
   {
      if(arr[0].indexOf(arr[1][i] === -1)
      {
         return false;
      }
   }
   return true;
}
mutation(["hello", "hey"]); // false
mutation(["Mary", "Army"])  // true
mutation(["Alien", "line"]) // true
mutation(["hello", "neo"])  // false

// Falsy bouncer
function bouncer(arr)
{
   return arr.filter(function(element){
      var isFalse     = Boolean(element === false);
      var isNull      = Boolean(element === null);
      var isZero      = Boolean(element === 0);
      var isEmptyStr  = Boolean(element === "");
      var isUndefined = Boolean(element === undefined);

      if(typeof element === "string" && element !== "")
      {
         return true;
      }
      return (!isFalse && !isNull && !isZero && !isEmptyStr && !isUndefined && !isNaN(element));
   });
}
bouncer([false, null, 0, NaN, undefined, ""]); // []
bouncer([7, "ate", "", false, 9]); // [7, "ate", 9]

// Seek and destroy
function destroyer(arr)
{
   var arrLength = arr.length;

   for(var i = 0; i < arr.length; i++)
   {
      for(var j = 1; j <= arrLength; j++)
      {
         if(arr[i] === arguments[j])
         {
            arr.splice(i--, 1);
            break;
         }
      }
   }
   return arr;
}
destroyer([2, 3, 2, 3], 2, 3); // []
destroyer([1, 2, 3, 1, 2, 3], 2, 3) // [1, 1]

// Where do i belong
function getIndexToIns(arr, num)
{
   var index = 0;

   arr.sort();
   for(var i = 0; i < arr.length; i++)
   {
      if(num > arr[i])
      {
         index++;
      }
   }
   return index;
}
getIndexToIns([40, 60], 50); // 1
getIndexToIns([10, 20, 30, 40, 50], 35) // 3

// Rot13
// jshint esversion: 6
function isLetter(char, index = 0)
{
   if(char[index].match(/[a-z]/i))
   {
      return true;
   }
   return false;
}

function rot13(str)
{
   var charArr = [];

   for(var i = 0; i < str.length; i++)
   {
      if(isLetter(str[i]))
      {
         if(str.charCodeAt(i) + 13 > 90)
         {
            charArr.push(String.fromCharCode(str.charCodeAt(i) - 26 + 13));
         }
         else
         {
            charArr.push(String.fromCharCode(str.charCodeAt(i) + 13));
         }
      }
      else
      {
         charArr.push(str[i]);
      }
   }
   return charArr.join("");
}
rot13("SERR PBQR PNZC") // "FREE CODE CAMP"
