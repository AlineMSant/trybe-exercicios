const createItem = require('./createItem');
describe('a função createItem', () => {
  it('cria um item válido', () => {
    let item = createItem('banana', 'kg', 1.99, 20)
    expect(item).toHaveProperty('name', 'banana');
    expect(item).toHaveProperty('unit', 'kg');
    expect(item).toHaveProperty('price', 1.99);
    expect(item).toHaveProperty('quantity', 20);
  });
  it('utiliza zero como quantidade padrão', () => {
    let item2 = createItem('banana', 'kg', 1.99);
    expect(item2).toHaveProperty('quantity', 0)
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(()=> {createItem() }).toThrow(Error);
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(()=> {createItem(20, 'kg', 1.99, 20)}).toThrow('O nome do item deve ser uma string')
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(()=> {createItem('banana', 'kg', -1.99, 20)}).toThrow('O preço do item deve ser maior que zero')
  });
  it('Lança um erro se o preço é zero', () => {
    expect(()=> {createItem('banana', 'kg', 0, 20)}).toThrow('O preço do item deve ser maior que zero')
  });
});