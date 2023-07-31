// ( 8 kyu ) Is n divisible by x and y? https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
	if (n % x === 0 && n % y === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(isDivisible(3, 1, 3));
console.log(isDivisible(12, 2, 6));
console.log(isDivisible(100, 5, 3));

const isDivisible2 = (n, x, y) => (n % x === 0 && n % y === 0 ? true : false);

console.log(isDivisible2(3, 1, 4));
console.log(isDivisible2(12, 2, 7));
console.log(isDivisible2(100, 5, 10));
