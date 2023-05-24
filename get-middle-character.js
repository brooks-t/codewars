// Get the Middle Character: https://www.codewars.com/kata/56747fd5cb988479af000028

const word = 'bad';
const word2 = 'good';

const getMiddle = (s) =>
{
    let middle = s.length/2;
    if (s.length % 2 === 0) {
        return `${s[middle - 1]}${s[middle]}`;
    } else {
        return `${s[middle - 0.5]}`;
    }
}

console.log(getMiddle(word));