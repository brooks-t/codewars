// Regex Validate Pin Code: https://www.codewars.com/kata/regex-validate-pin-code/train/javascript

// One way
function validatePIN(pin) {
	return /^(\d{4}|\d{6})$/.test(pin);
}

// Another way - maybe more readable
function validatePIN(pin) {
	const regex = /^\d{4}$|^\d{6}$/;
	return regex.test(pin);
}

// Shortest way
const validatePIN = (pin) => /^(\d{4}$|\d{6}$)/.test(pin);