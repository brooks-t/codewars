// (8 kyu) Basic Mathematical Operations: https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
// Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

const basicOp = (operation, value1, value2) => {
	if (operation === "+") {
		return value1 + value2;
	} else if (operation === "-") {
		return value1 - value2;
	} else if (operation === "*") {
		return value1 * value2;
	} else if (operation === "/") {
		return value1 / value2;
	} else {
		return "Please enter a valid operator";
	}
};

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
console.log(basicOp("%"));

// With a switch statement
function basicOp2(operation, value1, value2) {
	switch (operation) {
		case "+":
			return value1 + value2;
		case "-":
			return value1 - value2;
		case "*":
			return value1 * value2;
		case "/":
			return value1 / value2;
		default:
			return 0;
	}
}

console.log(basicOp2("+", 4, 7));
console.log(basicOp2("-", 15, 18));
console.log(basicOp2("*", 5, 5));
console.log(basicOp2("/", 49, 7));
console.log(basicOp2("%"));
