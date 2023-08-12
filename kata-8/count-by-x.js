// (8 kyu) Count by X: https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

function countBy(x, n) {
	let z = [x];
	let i = x;
	while (i < x * n) {
		i += x;
		z.push(i);
	}
	return z;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));
