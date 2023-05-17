// A needle in the haystack
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

const challengeTitle = document.getElementById("challenge-title");
challengeTitle.innerHTML = "A needle in the haystack";

const findNeedle = (haystack) => {
	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === "needle") {
			return `found the needle at position ${i}`;
		} else {
			continue;
		}
	}
}

const haystack = ["3", "123124234", undefined, "needle", "world", "hay", 2, "3", true, false];
const haystack2 = ["283497238987234", "a dog", "a cat", "some random junk", "a piece of hay", "needle", "something somebody lost a while ago"];

console.log(findNeedle(haystack));
console.log(findNeedle(haystack2));

// simplified
console.log("-------------simplified------------")
const findNeedle2 = haystack => "found the needle at position " + haystack.indexOf("needle");
console.log(findNeedle2(haystack));
