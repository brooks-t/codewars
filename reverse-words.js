// Reverse words: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

const fox = "The quick brown fox jumps over the lazy dog.";
console.log(fox.length);

const reverseWords = (str) => {
	let arr = str.split(" ");
	let newArr = [];
	arr.forEach((word) => {
		let newWord = "";
		for (let i = word.length - 1; i >= 0; i--) {
			newWord += word[i];
		}
		newArr.push(newWord);
	});
	return newArr.join(" ");
};

console.log(reverseWords(fox));

// Alternative solution
function revWords(str) {
	return str
		.split(" ")
		.map(function (word) {
			return word.split("").reverse().join("");
		})
		.join(" ");
}

console.log(revWords(fox));
