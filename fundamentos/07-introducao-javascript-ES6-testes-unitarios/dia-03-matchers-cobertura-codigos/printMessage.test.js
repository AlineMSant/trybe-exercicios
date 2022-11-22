const { info, printMessage } = require('./printMessage');

test('confere se printMessage recebe objeto que possui personagem', () => {
    expect(info).toHaveProperty('personagem');
});

test('confere se printMessage contem Boas Vindas', () => {
    expect(printMessage(info)).toMatch('Boas vindas, Margarida');
})