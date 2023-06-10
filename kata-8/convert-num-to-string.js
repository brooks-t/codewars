// Convert a number to a String - Level: 8kyu
// https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript
// const challengeTitle = document.getElementById('challenge-title');
// challengeTitle.innerHTML = 'Convert a number to a String - Level: 8kyu';

// const numberToString = arr => arr.map((num) => String(num));

// const numArray = [123, 999, 3.14];
// console.log(numberToString(numArray));

// I thought they wanted to convert an array, all they wanted was a simple number
console.log ("---------------------------")
const number = 123;
const numToString = num => num.toString();
console.log(numToString(number));

const stringNumber = numToString(number);
console.log(stringNumber);
