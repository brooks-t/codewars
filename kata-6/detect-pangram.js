// (6 kyu) Detect Pangram: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// chat GPT solution
function isPangram(str) {
	const cleanedString = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
	const alphabetSet = new Set();

	for (let char of cleanedString) {
		alphabetSet.add(char);
	}

	return alphabetSet.size === 26;
}

// Test the function
const input1 = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(input1)); // Output: true

const input2 = "This is not a pangram.";
console.log(isPangram(input2)); // Output: false

//==================================================================

/* less elegant solution:
function isPangram(str) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	const cleanedString = str.toLowerCase();

	for (let i = 0; i < alphabet.length; i++) {
		const char = alphabet[i];
		if (cleanedString.indexOf(char) === -1) {
			return false;
		}
	}

	return true;
}

// Test the function
const input1 = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(input1)); // Output: true

const input2 = "This is not a pangram.";
console.log(isPangram(input2)); // Output: false
*/
