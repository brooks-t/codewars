// Sum of Numbers - 7 kyu
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b. Note: a and b are not ordered!

const getSum = (a, b) => {
	let sum = 0;
	if (a === b) return a;
	if (a < b) {
		for (let i = a; i <= b; i++) {
			sum += i;
		}
	} else {
		for (let i = b; i <= a; i++) {
			sum += i;
		}
	}
	return sum;
};

// Clever solution that I don't fully understand:
function GetSum(a, b) {
	return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}

console.log(getSum(3, 7));
