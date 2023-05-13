// Sum Numbers
function sum (numbers) {
    "use strict";
    let total = 0;
    for (let i = 0; i < numbers.length ; i++) {
        total += numbers[i];
    }
    return total;
};

// more elegant solution
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
    }