// (7 kyu) Tube Strike Options Calculator: https://www.codewars.com/kata/568ade64cfd7a55d9300003e/train/javascript
let walk = 5;
let bus = 8;

const calculator = (distance, busDrive, busWalk) => {
	const walkTime = distance / walk;
	const busTime = busDrive / bus + busWalk / walk;
	if (walkTime > 2) {
		return "Bus";
	} else if (walkTime < 1 / 6) {
		return "Walk";
	} else if (walkTime === busTime) {
		return "Walk";
	} else if (busTime < walkTime) {
		return "Bus";
	} else if (walkTime < busTime) {
		return "Walk";
	} else {
		return "Something went wrong!";
	}
};

console.log(calculator(4, 5, 1));
