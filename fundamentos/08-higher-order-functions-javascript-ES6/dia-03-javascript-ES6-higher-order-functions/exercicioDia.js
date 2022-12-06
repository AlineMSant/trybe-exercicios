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
  
  // Adicione o código do exercício aqui:
  // 1 - Filtre todos os objetos do gênero ficção científica ou fantasia.

  const fantasyOrScienceFiction = () => books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
  // console.log(fantasyOrScienceFiction(books));


  // 2 Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.
  
  const sessentaAnos = new Date().getFullYear() - 60
  const oldBooksOrdered = books.filter((element) => element.releaseYear < sessentaAnos).sort((a,b) => a.releaseYear - b.releaseYear);
  //   console.log(oldBooksOrdered);


//3 - Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

const booksByAuthorBirthYear = (ano) => {   
  return books.reduce((acumulador, array) => {
    if(array.author.birthYear === ano){
      acumulador.push(array.name); // não tem return pois o push retorna o tamanho da length de forma implicita e gera erro no código. 
    }
    return acumulador;
  } , []);
}
// console.log(booksByAuthorBirthYear(1920));


// 4 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.

const fantasyOrScienceFictionAuthors = () => {
return books
.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
.sort((a,b) => a.author.name > b.author.name ? 1 : -1)
.map((book) => book.author.name)
}
// console.log(fantasyOrScienceFictionAuthors());


// 5 Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

  const oldBooks = books.filter((element) => element.releaseYear < sessentaAnos).map((element) => element.name);
  // console.log(oldBooks);


// 6  Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.

const authorWith3DotsOnName = () => {
  return books.find((book) => {
    return book.author.name[1] === '.' 
    && book.author.name[4] === '.' 
    && book.author.name[7] === '.'
  }).name; // o find retorna um objeto por isso .name para retornar somente a chave name deste objeto. 
}

console.log(authorWith3DotsOnName());
