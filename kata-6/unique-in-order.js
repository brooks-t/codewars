// (6kyu) Unique in Order: https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = (iterable) => {
	if (typeof iterable === "string") {
		iterable = iterable.split("");
	}
	return iterable.filter((char, i) => char !== iterable[i - 1]);
};

// an even better solution. You can spread a string into an array instead of using split or having to check if it's a string or array.
var uniqueInOrder2 = function (iterable) {
	return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
