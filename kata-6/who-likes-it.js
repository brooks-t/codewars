// (6 kyu) - Who likes it?: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples.

const names = ["Alex", "Jacob", "Mark", "Max"];
const names3 = ["Brooks", "Mom", "John"];

const likes = (names) => {
	// empty array
	if (names.length === 0) {
		return "no one likes this";
	} else if (names.length === 1) {
		return `${names[0]} likes this`;
	} else if (names.length === 2) {
		return `${names[0]} and ${names[1]} like this`;
	} else if (names.length === 3) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
	} else {
		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
	}
};

console.log(likes(names3));
console.log(likes(names));

// Alternative solution using Switch
function likesSwitch(names) {
	names = names || [];
	switch (names.length) {
		case 0:
			return "no one likes this";
			break;
		case 1:
			return names[0] + " likes this";
			break;
		case 2:
			return names[0] + " and " + names[1] + " like this";
			break;
		case 3:
			return names[0] + ", " + names[1] + " and " + names[2] + " like this";
			break;
		default:
			return (
				names[0] +
				", " +
				names[1] +
				" and " +
				(names.length - 2) +
				" others like this"
			);
	}
}
