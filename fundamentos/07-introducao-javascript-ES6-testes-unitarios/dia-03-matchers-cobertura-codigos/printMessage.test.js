const { info, printMessage } = require('./printMessage');

test('confere se printMessage recebe objeto que possui personagem', () => {
    expect(info).toHaveProperty('personagem');
});

test('confere se printMessage contem Boas Vindas', () => {
    expect(printMessage(info)).toMatch('Boas vindas, Margarida');
})

describe('testa Erro', () => {
    it('testa se lança mensagem de erro', () => {
        expect(()=> {printMessage()}).toThrow();
    })
    it('teste se retorna erro quando não seja objeto', () => {
        expect(()=> {printMessage(1)}).toThrow('objeto inválido');
    })
    it('teste se retorna erro quando não possui a propriedade personagem', () => {
        expect(()=> {printMessage({origem: 'Pato Donald'})}).toThrow('objeto inválido');
    })
})