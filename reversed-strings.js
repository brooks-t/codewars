// Reversed Strings: https://www.codewars.com/kata/5168bb5dfe9a00b126000018


// simple and clean
const solution = (str) => str.split("").reverse().join("");


// with a for loop
function reverseString(str) {
	let reversedStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversedStr += str[i];
	}
	return reversedStr;
}

// clever with reduce
const str = "Hello, World!";
const reversedStr = str.split("").reduce((acc, char) => char + acc, "");
