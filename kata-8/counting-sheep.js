// (8 kyu) Counting Sheep: https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

const sheep = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
];

const countSheeps = (arrayOfSheep) =>
	arrayOfSheep.reduce((a, b) => (b === true ? (a += 1) : (a += 0)), 0);

console.log(countSheeps(sheep));
