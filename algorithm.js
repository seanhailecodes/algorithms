// recusrsion

function efun(num){
   if (num==0)
    return 1 
       else
    return num * efun(num-2)
  }

console.log(efun(8))



// euclids algorithm finds the greatest common denomenator (GCD) of two integers, until the remainder is 0
// for example gcd of 20 and 8 is 4

var gcd = function(a, b) {  
   if (!b) {  
       return a;  
   }  

   return gcd(b, a % b);  
};  
console.log(gcd(20, 8));
 
//datastructures and datatypes, undefined, nullm boolean. sting, symbol, number, and object

let a = 5
let b = 10
let c = "im a string"

a = a + 1
b = b + 5
c = c + "String!"

console.log(c)

let sum = a + b 
let difference = a - b
let product = a * b
let quotient = a / b

let myVar = 87

//myVar = myVar + 1
//or
let myVar = myVar++

//  remainder looks like a percent time and provides the remainder (of say divided numbers) - used to determine if a number is even or odd 
let remainder 
remainder = 11 % 3


//  a = a + 12 is the same as a += 12

let firstName = "Sean "
let lastName = "Haile"

let fullName = firstName + lastName

console.log(fullName)

let ourStr = "I come first. "
ourStr += "I come second"
// same as ourStr = outStr + "I come second"

console.log(ourStr)
let anAdjective = " was lit"
let aStr = "Last night "
let myShow = "a betters sitdown"

let aSent = aStr += (myShow + anAdjective)
console.log(aSent)

//length

let firsNameLength = 0
let firstName = "Aradom"

let lastNameLength = 0
let lastName = "Hailenelekot"

firstNameLength = firstName.length;
lastNameLength = lastName.length;

firstLetterOfFirstName = firstName[1]
console.log(firstLetterOfFirstName)

//define last letter in string

let lastLetterOfFirstName = firstName[firstName.length - 1]


console.log(lastLetterOfFirstName)
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
   let result = ""
   result += "the" + " " + myAdjective + " " + myNoun + " " + myVerb + " " + "to the store " + myAdverb
   return result;
}

console.log(wordBlanks("cat ", "big ", "ran" , "quickly"))
console.log(wordBlanks( "smart", "elf", "worked", "slowly, compared to a normal sized person"))


let mikeArray = ["Mike" , 23]

let scottyArray = ["Scotty" , 33]

let ourArray = [["bulls", 23], ["White sox", 45]]
console.log(ourArray)

let ourNextArray = [50,60,70]
let ourNextData = ourNextArray[0]
console.log(ourNextData)

let myNextArray2 = [50,60,70]
let myNextData = myNextArray2[0]
console.log(myNextData)

let ourNextArray3 = [18, 22, 33, 1299]
ourNextArray3[1] = 21
ourNextArray3[0] = 45

console.log(ourNextArray3)

let myArray4 = [ [1,2,3], [4,5,6], [7,8,9], [[10, 11, 12], 13, 14]]
myNewArray4 = myArray4[3][2]
console.log(myArray4)

//push function appends data to the end of an Array
 

let myArray5 = [ "Stimpson", "J", "cat"];
myArray5.push(["happy", "joy"])

console.log(myArray5)
 

//pop - pops off the last element in array in to a new item or array

let myArray6= [1,2,3]
let myArrayPopped6 = myArray6.pop(4)

console.log(myArray6)
// is [1,2]
console.log(myArrayPopped6)
// is [3]


// shift()  removes (shifts) the first item of an array. Note: This method changes the length of the array. The return value of the shift method is the removed item. Tip: To remove the last item of an array, use the pop() method. Note: this method will change the original array.

let myArray7 = [[1, 2, 3], 4 ]
let myShiftedArray7 = myArray7.shift()
console.log(myShiftedArray7)
// [1,2,3]
console.log(myArray7)
//4



// The unshift() method new items to the beginning of an array, and returns the new length.  Note: This method changes the length of an array. Tip: To add new items at the end of an array, use the push() method.

let myArray8 = [[1, 2, 3], 4 ]
let myUnshiftedArray8 = myArray8.shift()
console.log(myArray8)
// [4]
console.log(myUnshiftedArray8)
// [1,2,3]

let myList = [["cheese", 3], ["apple juice", 6] ["bananas", 12]]

//FUNCTIONS

function ourReusableFunction() {
   console.log("Whuddup, World");
}

ourReusableFunction()

function reusableFunction(){
   console.log("you good, fam")
}

function ourFunctionWirhArgs(a, s) {
   console.log(a - s)
}

ourFunctionWirhArgs(10,5);

function ourFunctionWirhArgs(a, s) {
   console.log(a - s)
}

ourFunctionWirhArgs(10,5);

//map

let ballers = ['Michael', 'Kobe', 'LeBron']

let nameLengths = ballers.map(function(item, index, array){
   leng = item.length
   return leng
})
console.log(nameLengths)



//reverse KATA (with spaces) Complete the function that accepts a string parameter, and reverses each word in the string. 
function reverseString(str){
   let strArr = str.split("")
   //^this converts Atring in to an Array and splits the elements>A
   let  revArr = strArr.reverse()
   //^this reverses the elements in array >B
   let arrStr = revArr.join("")
    //^this turns array in to a string again >C
    let reRevStr = arrStr.split(" ")
    //^this turns reversed String back in to an Array again >D
    let newelyRevStr = reRevStr.reverse()
    //^this reverses new Array >E
    let final = newelyRevStr.join(" ")
    //^this again converts Array in to String
   return final
}

reverseString("elbuod  secaps")
/* >A this .splt returns strArr as [
'e', 'l', 'b', 'u',
'o', 'd', ' ', ' ',
's', 'e', 'c', 'a',
'p', 's'
]*/

// >B this .reverse reverses the Array
// [
//   's', 'p', 'a', 'c',
//   'e', 's', ' ', ' ',
//   'd', 'o', 'u', 'b',
//   'l', 'e'
// ]
// >C this .join("") turns Array back in to a string 
//   spaces  double
// 
// >D this .split(" ") again turns String into Array and removes the commas (but preserves spaces)
//[ 'spaces', '', 'double' ]
//
// >E this .reverse simply reverses the Array
// [ 'double', '', 'spaces' ]
//
// >F this .join(" ") again turns Array back to String, quote need space in the middle to remove commas of string - FINAL ANSWER 
//  double  spaces
//
// so, in order to complete this task we take the String >.split(A) it in to an Array with each element separated by commas, then >.reverse(B) Array and >.join("") (C) then to make a new reversed string
// then again >.split(" ") (D) to make an Array (which we can manipulate) so we can >.reverse (E) which reverses the Array (what we were trying to do all along) and finally >.join it to present
//FINAL answer 


//reverse KATA Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained. .split turns string to an array and .join turn - referencing Medium https://medium.com/better-programming/codewars-reverse-word-challenge-394d32461506
// "The quick brown fox jumps over the lazy dog." ~~> should read 'ehT kciuq nworb xof spmuj revo eht yzal .god'
function reverseWords(str) {
   return str.split(" ").reverse().join().split(" ").reverse().join()
   }
   reverseWords("The quick brown fox jumps over the lazy dog.")

   // .splt with a space returns an array [ 'elbuod', '', 'secaps' ]  // .splt with NO space returns an array of [ [  'e', 'l', 'b', 'u',   'o', 'd', ' ', ' ',  's', 'e', 'c', 'a',  'p', 's'] .reverse and .join as above

   //popular answer

   function reverseWords(str) {
      return str.split(' ').map(function(word){
        return word.split('').reverse().join('');
      }).join(' ');
    }

    function reverseWords(str) {
      // Go for it
      //split words into seperate arrays
      return str.split("").reverse().join("").split(" ").reverse().join(" ");
    }

   //  Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. 
   // The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits. 
   function solution(nums){
      let orderedNums = (...nums)
      let x = [ orderedNums]
      let z = [ x++] 
      // spread digits in    

      // organize digits in order
return z
      // take organized digits and sume the top 5
   }

   let fuckery = [ 1, 2, 3, 4]

   fuckery.reverse()