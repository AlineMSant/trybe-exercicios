// fatorial =seu numero multiplicado por seus anteriores.

let fatorial = 10;
let resultado = 10; //poderia ser =fatorial

for(i=1; i<fatorial; i=i+1){
    resultado = resultado*i;
}

console.log(resultado);

// invertendo uma palavra

let word = 'trybe';
let reverte = '';

for(i=0; i<word.length; i=i+1){
    reverte = reverte + word[word.length-1-i];
}

console.log(reverte);


// retornar a maior e a menor palavra da array

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

for(let i=0; i<array.length; i=i+1){
    if(array[i].length > maior.length){
    maior = array[i];
    }
    if(array[i].length < menor.length){
        menor = array[i];
    }
}

console.log(maior);
console.log(menor);

// retornar o maior numero primo entre 2 e 50

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);