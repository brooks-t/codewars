// (7 kyu) List filtering: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out

let array = [1, "brooks", 2, "cat", 3, "dog"];

const filter_list = array.filter((item) => typeof item === "number");

console.log(filter_list);
