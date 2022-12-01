const numbers = [50, 85, -30, 3, 15];

const ordNumber = (acc, curr) => acc > curr ? acc : curr;

const maiorNumber = numbers.reduce(ordNumber);

console.log(maiorNumber);

