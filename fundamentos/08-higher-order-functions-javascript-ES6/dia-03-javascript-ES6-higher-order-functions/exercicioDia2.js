
const countries = [
    {
      name: 'Afghanistan',
      region: 'Asia',
      currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
      capital: 'Kabul',
      population: 40218234,
      area: 652230
    },
    {
      name: 'Åland Islands',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Mariehamn',
      population: 28875,
      area: 1580
    },
    {
      name: 'Albania',
      region: 'Europe',
      currencies: [{ code: 'ALL', name: 'Albanian lek' }],
      capital: 'Tirana',
      population: 2837743,
      area: 28748
    },
    {
      name: 'Algeria',
      region: 'Africa',
      currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
      capital: 'Algiers',
      population: 44700000,
      area: 2381741
    },
    {
      name: 'American Samoa',
      region: 'Oceania',
      currencies: [{ code: 'USD', name: 'United States Dollar' }],
      capital: 'Pago Pago',
      population: 55197,
      area: 199
    },
    {
      name: 'Andorra',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Andorra la Vella',
      population: 77265,
      area: 468
    },
    {
      name: 'Angola',
      region: 'Africa',
      currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
      capital: 'Luanda',
      population: 32866268,
      area: 1246700
    },
    {
      name: 'Anguilla',
      region: 'Americas',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
      capital: 'The Valley',
      population: 13452,
      area: 91
    }
  ];

//1 - Calcule a quantidade total da população de todos os países.
const somaPopulation = (acc, curr) => acc + curr.population;
const getPopulation = countries.reduce(somaPopulation, 0);
// console.log(getPopulation);


// 2  Calcule a área total de todos os países.
const getTotalArea = () => {
  return countries.reduce((acc, curr) => acc + curr.area, 0);
}
// console.log(getTotalArea());


// 3 Encontre o país com o maior nome.
const longestName = () => {
  return countries.reduce((acc, curr) => {
     return curr.name.length > acc.name.length ? acc = curr : acc = acc;
  })
}
// console.log(longestName());

// 4 Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const countA = () => {
  const arrayLetters = names.reduce((acc, curr) => acc += curr)
  .toLowerCase()
  .split('')

  return arrayLetters.reduce((acc, curr) => curr === 'a' ? acc += 1 : acc = acc, 0)
}
// console.log(countA());

// 5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes:
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (arrayStudents, arrayGrades) => {
  return arrayStudents.map((nome, index) => ({
    name: nome,
    average: arrayGrades[index].reduce((acc, curr) => acc += curr, 0)/5,
  }))
}
// console.log(studentAverage(students, grades));