// (8kyu) Square(n) Sum: https://www.codewars.com/kata/515e271a311df0350d00000f/javascript
// omplete the square sum function so that it squares each number passed into it and then sums the results together.

const squareSum = (numbers) => numbers.reduce((a, b) => (a += b * b), 0);
console.log(squareSum([1, 2, 2]));
