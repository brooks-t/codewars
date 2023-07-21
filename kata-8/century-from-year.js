// (8 kyu) Century From Year: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Given, a year, return the century it is in.

const century = (year) => {
	if (year % 100 === 0) {
		return Math.floor(year / 100);
	} else {
		return Math.floor(year / 100) + 1;
	}
};

console.log(century(2023));

// single line using ternary operator
const century2 = (year) =>
	year % 100 === 0 ? Math.floor(year / 100) : Math.floor(year / 100) + 1;

console.log(century2(1900));
