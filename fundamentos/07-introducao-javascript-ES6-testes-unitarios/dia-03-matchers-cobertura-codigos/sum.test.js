const sum = require('./sum');

describe('teste função sum', () => {
  it('quando sum for 4 e 5 retornar 9', () => {
    expect(sum(4, 5)).toBe(9)
  }) 
  it('quando sum for 0 e 0 retornar 0', () => {
    expect(sum(0, 0)).toBe(0)
  })
  it('lança erro quando parametro é string', () => {
    expect(() => {sum(4, '5')}).toThrow();
  })
  it('retorna mensagem erro quando parametro é string', () => {
    expect(() => {sum(4, '5')}).toThrow('parameters must be numbers');
  }) 
})