// JADEN CASING STRINGS: https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// the solution for codewars. In this case you are adding 'toJadenCase' to the string.protoype to make it available to all strings.
String.prototype.toJadenCase = function () {
	return this.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
};

// how to do it with function expression
const toJadenCase = (string) => {
	return string
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
};

const jadenString = "how can mirrors be real if our eyes aren't real?";
console.log(toJadenCase(jadenString));
