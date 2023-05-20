// Covert a string to an array
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript

const stringToArray = string => string.split(' ');

// or, for a more complicated string, you can use regex that spots any non-word character.
const stringToArray2 = string => string.split(/[\w]+/);