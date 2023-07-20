// (8 kyu) String Repeat: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
// Write a function that accepts an integer (n) and a string (s) as parameters, and returns a string of (s) repeated exactly (n) times.

const repeatStr = (n, s) => {
	let str = "";
	for (let i = 0; i < n; i++) {
		str += s;
	}
	return str;
};
console.log(repeatStr(5, "Hello"));

// a much more concise way to write the same thing
const repeatString = (n, s) => s.repeat(n);

console.log(repeatString(7, "Goodbye"));
