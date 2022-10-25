// imprimir Olá mais nomes com for/in

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for(let nome in names){
    console.log('Olá ' + names[nome]);
  }

// imprimir os valores com as chaves do objeto

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for(let index in car){
    console.log(index, car[index]);
}