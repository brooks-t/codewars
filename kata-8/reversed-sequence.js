// Reversed Sequence: https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = (n) => {
	const reverseArray = [];
	while (n > 0) {
		reverseArray.push(n);
		n--;
	}
	return reverseArray;
};
console.log(reverseSeq(5));
