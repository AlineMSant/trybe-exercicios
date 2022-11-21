const myRemove = require('./exercicio-1.js');

describe('teste myRemove', () => {
    it('remove item array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})

const myFizzBuzz = require('./exercicio-2');

describe('teste myFizzBuzz', () => {
    test('retorna divisivel por 3 e 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })
    test('retorna divisivel somente por 3', () => {
        expect(myFizzBuzz(6)).toBe('fizz')
    })
    test('retorna divisivel somente por 5', () => {
        expect(myFizzBuzz(10)).toBe('buzz')
    })
    test('retorna divisivel somente por 5', () => {
        expect(myFizzBuzz(1)).toBe(1)
    })
    test('retorno quando não for numero', () => {
        expect(myFizzBuzz("1")).toBe(false)
    })
})

const { encode, decode } = require('./exercicio-3');

describe('testa função encode', () => {
    it('verifica se encode foi definida', () => {
        expect(encode).toBeDefined();
    });
    it('verifica se encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });
    it('verifica teste de vogais em numeros', () => {
        expect(encode('aeiou')).toBe("12345")
    })
    it('verifica se retorna as letras quando não são vogais', () => {
        expect(encode('bcdf')).toBe("bcdf")
    })
    it('verifica tamanho do parametro', () => {
        expect(encode('aline').length).toBe(5)
    })
})

describe('testes função decode', () => {
    it('verifica se decode foi definida', () => {
        expect(decode).toBeDefined();
    });
    it('verifica se encode é uma função', () => {
        expect(typeof decode).toEqual('function');
    });
    it('verifica teste de numeros em vogais', () => {
        expect(decode('12345')).toBe("aeiou")
    })
    it('verifica se retorna os numeros quando não estão entre 1 e 5', () => {
        expect(decode('06789')).toBe("06789")
    })
    it('verifica tamanho do parametro', () => {
        expect(decode('12345').length).toBe(5)
    })
})

const techList = require('./techList.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

const hydrate = require('./hydrate.js');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
