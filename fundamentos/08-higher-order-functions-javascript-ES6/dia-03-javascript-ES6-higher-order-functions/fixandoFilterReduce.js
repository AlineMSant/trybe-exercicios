// somar valores pares usando reduce e filter e depois somente o reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// usando filter e reduce
const pares = numbers.filter((element) => element % 2 === 0);
const soma = (acc, curr) => acc + curr;
const somaPares = pares.reduce(soma, 0);

console.log(somaPares);

//usando somente reduce
// const pares = (somaAtual, valorArray) => valorArray % 2 === 0 ? somaAtual + valorArray: somaAtual;
// const somaPares = numbers.reduce(pares, 0);

// console.log(somaPares);
