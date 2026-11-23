
const test = require('node:test');
const assert = require('node:assert/strict');
const Ludo = require('./Ludo');

test('CT01 - Deve iniciar uma partida com dois jogadores', () => {
    const jogo = new Ludo();
    assert.equal(jogo.iniciarPartida(2), true);
});

test('CT02 - Não deve iniciar partida com apenas um jogador', () => {
    const jogo = new Ludo();
    assert.equal(jogo.iniciarPartida(1), false);
});

test('CT03 - Não deve iniciar partida com mais de dois jogadores', () => {
    const jogo = new Ludo();
    assert.equal(jogo.iniciarPartida(3), false);
});

test('CT04 - Deve permitir retirar peça da base ao tirar 6', () => {
    const jogo = new Ludo();
    assert.equal(jogo.podeRetirarPeca(6), true);
});

test('CT05 - Não deve permitir retirar peça da base sem tirar 6', () => {
    const jogo = new Ludo();
    assert.equal(jogo.podeRetirarPeca(4), false);
});

test('CT06 - Deve retirar uma peça da base após obter 6', () => {
    const jogo = new Ludo();
    jogo.iniciarPartida(2);
    assert.equal(jogo.retirarPeca(6, 1, 0), true);
});

test('CT07 - Deve movimentar a peça conforme o valor do dado', () => {
    const jogo = new Ludo();
    assert.equal(jogo.moverPeca(5, 3), 8);
});

test('CT08 - Não deve permitir movimentação além do limite', () => {
    const jogo = new Ludo();
    assert.equal(jogo.movimentoValido(55, 6, 57), false);
});

test('CT09 - Deve capturar uma peça adversária', () => {
    const jogo = new Ludo();
    assert.equal(jogo.capturarPeca(true), true);
});

test('CT10 - Não deve capturar peça em casa segura', () => {
    const jogo = new Ludo();
    assert.equal(jogo.casaSegura(), false);
});

test('CT11 - Deve permitir outra jogada ao tirar 6', () => {
    const jogo = new Ludo();
    assert.equal(jogo.jogarNovamente(6), true);
});

test('CT12 - Não deve permitir movimentar peça da base sem tirar 6', () => {
    const jogo = new Ludo();
    assert.equal(jogo.podeMovimentarPecaNaBase(4), false);
});

test('CT13 - Deve identificar quando a peça entra na trilha final', () => {
    const jogo = new Ludo();
    assert.equal(jogo.entrarTrilhaFinal(53), true);
});

test('CT14 - Não deve permitir ultrapassar a última casa', () => {
    const jogo = new Ludo();
    assert.equal(jogo.movimentoFinalValido(55, 4), false);
});

test('CT15 - Deve identificar uma peça que chegou ao final', () => {
    const jogo = new Ludo();
    assert.equal(jogo.finalizarPeca(57), true);
});

test('CT16 - Deve declarar vitória quando as quatro peças chegarem ao final', () => {
    const jogo = new Ludo();
    assert.equal(jogo.verificarVitoria([true, true, true, true]), true);
});

test('CT17 - Não deve permitir jogadas após o encerramento da partida', () => {
    const jogo = new Ludo();
    jogo.iniciarPartida(2);
    jogo.encerrarPartida();
    assert.equal(jogo.podeJogar(), false);
});

test('CT18 - Deve alternar o turno entre os jogadores', () => {
    const jogo = new Ludo();
    assert.equal(jogo.proximoJogador(1), 2);
});

test('CT19 - Não deve permitir jogada fora da vez', () => {
    const jogo = new Ludo();
    assert.equal(jogo.jogadaPermitida(2, 1), false);
});

test('CT20 - Deve retornar uma peça capturada para a base', () => {
    const jogo = new Ludo();
    assert.equal(jogo.retornarParaBase(), 0);
});
