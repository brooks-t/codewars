// Printer Errors: https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
// Difficulty: 7 kyu

function printerError(s) {
	let colors = "abcdefghijklm";
	let good = 0;
	let bad = 0;

	for (let i = 0; i < s.length; i++) {
		if (colors.includes(s[i])) {
			good += 1;
		} else {
			bad += 1;
		}
	}
	return `${bad}/${s.length}`;
}
