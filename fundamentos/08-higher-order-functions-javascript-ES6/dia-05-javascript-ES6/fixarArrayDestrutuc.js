//1

const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [firstNumber, secondNumber, thirdNumber] = primeNumbers;
sum(firstNumber, thirdNumber)



//2

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [animal, bebida, comida];
// console.log(animal, bebida, comida);



//3

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[one, three, five, six, eigth, ten, twelve] = numerosPares;

numerosPares = [six, eigth, ten, twelve];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima