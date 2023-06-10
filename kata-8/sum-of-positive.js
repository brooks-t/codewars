// Sum of Positive: https://www.codewars.com/kata/5715eaedb436cf5606000381
// Level: 8 kyu

function positiveSum(arr) {
    return arr.reduce((a, b) => b > -1 ? a + b : a, 0);
}