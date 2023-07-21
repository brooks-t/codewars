// (8 kyu) Convert number to reversed array of digits: https://www.codewars.com/kata/5583090cbe83f4fd8c000051
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

const digitize = (n) => String(n).split("").reverse().map(Number);
console.log(digitize(35231));
