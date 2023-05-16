// convert the boolean to a string
const problemTitle = document.getElementById('problem-title');
problemTitle.textContent = 'Convert a Boolean to a String';

const booleanToString = b => b ? 'true' : 'false';

console.log(booleanToString(true)); // 'true'
console.log(booleanToString(false)); // 'false'