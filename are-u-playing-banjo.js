// Are You Playing Banjo: https://www.codewars.com/kata/53af2b8861023f1d88000832
let name = 'Adam';
console.log(name[0]);

const areYouPlayingBanjo = (name) => (name[0].toLowerCase()) === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;

console.log(areYouPlayingBanjo(name));