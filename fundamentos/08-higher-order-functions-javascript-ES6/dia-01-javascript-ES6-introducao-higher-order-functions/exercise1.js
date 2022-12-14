const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  

  //exercicio 1
const authorBornIn1947 = () => {
  return books.find((obj) => obj.author.birthYear === 1947).author.name;
}

// console.log(authorBornIn1947());


//exercicio 2
const smallerName = () => {
  let nameBook;
  nameBook = books[0].name;

  books.forEach((book) => {
    if(book.name.length > 0 && book.name.length < nameBook.length){
    nameBook = book.name;
    }
  })

  return nameBook;
}

// console.log(smallerName())


//exercicio 3

const getNamedBook = () => {
    return books.find((title) => title.name.length === 26);
}

// console.log(getNamedBook());

//exercicio 4

function everyoneWasBornOnSecXX() {
  return books.every((obj) => obj.author.birthYear > 1900);
}

// console.log(everyoneWasBornOnSecXX());


//exercicio 5

const someBookWasReleaseOnThe80s = () => {
  return books.some((obj) => obj.releaseYear >= 1980 && obj.releaseYear < 1990)
}

// console.log(someBookWasReleaseOnThe80s());


//exercicio 6


const verify = books.some((book, index) => {{
  const test = books.some((book2, index2) => {
    if(index === index2){
      return;
    }
    return book.author.birthYear === book2.author.birthYear ? true : false;
  });
  return test;
}});


console.log(verify);
