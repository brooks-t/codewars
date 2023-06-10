// Double Char: https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

const doubleChar = (str) =>
	str
		.split("")
		.map((char) => char + char)
		.join("");

console.log(doubleChar("Brooks"));
