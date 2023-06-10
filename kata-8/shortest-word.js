// Shortest Word: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s) {
	const stringArr = s.split(" ");
	let shortest = Infinity;
	stringArr.forEach((word) => {
		if (word.length < shortest) {
			shortest = word.length;
		}
	});
	return shortest;
}