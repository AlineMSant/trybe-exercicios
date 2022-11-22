const { info, printMessage } = require('./printMessage');

test('confere se printMessage recebe objeto que possui personagem', () => {
    expect(info).toHaveProperty('personagem');
});