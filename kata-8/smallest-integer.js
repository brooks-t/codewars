// (8 kyu) Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

const args = [34, 15, 88, 2];

const SmallestIntegerFinder = (args) =>
	args.reduce((acc, cur) => (cur < acc ? (acc = cur) : acc), Infinity);

console.log(SmallestIntegerFinder(args));
