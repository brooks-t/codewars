// Find Maximum and minimum values of a list (8kyu)
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

const list = [4,6,2,1,9,63,-134,566];

const min = list => list.reduce((a,b) => a < b ? a : b, list[0]);

const max = list => list.reduce((a,b) => a > b ? a : b, list[0]);

console.log(min(list));
console.log(max(list));