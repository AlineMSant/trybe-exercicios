const numbers = [19, 21, 30, 3, 45, 22, 15];
// Adicione seu código aqui divisivel por 3 e 5
const retornaDiv = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(retornaDiv);

const names = ['João', 'Irene', 'Fernando', 'Maria'];
// Adicione seu código aqui retornar primeiro com 5 letras 
const retornaComCinco = names.find((index) => index.length === 5);
console.log(retornaComCinco);

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  // Adicione seu código aqui música com id igual a '31031685'
  const retornaComID = musicas.find((musica) => musica.id === '31031685')
  console.log(retornaComID);