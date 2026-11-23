
class Ludo {
    constructor() {
        this.jogadores = [];
        this.jogadorAtual = 1;
        this.partidaIniciada = false;
        this.partidaEncerrada = false;
    }

    iniciarPartida(quantidadeJogadores) {
        if (quantidadeJogadores !== 2) {
            return false;
        }

        this.jogadores = [
            { id: 1, pecas: [0, 0, 0, 0] },
            { id: 2, pecas: [0, 0, 0, 0] }
        ];

        this.partidaIniciada = true;
        return true;
    }

    podeRetirarPeca(valorDado) {
        return valorDado === 6;
    }

    retirarPeca(valorDado, jogador, peca) {
        if (!this.podeRetirarPeca(valorDado)) {
            return false;
        }

        if (this.jogadores[jogador - 1].pecas[peca] !== 0) {
            return false;
        }

        this.jogadores[jogador - 1].pecas[peca] = 1;
        return true;
    }

    moverPeca(posicao, valorDado) {
        const novaPosicao = posicao + valorDado;

        if (novaPosicao > 57) {
            return false;
        }

        return novaPosicao;
    }

    movimentoValido(posicao, valorDado, limite) {
        return posicao + valorDado <= limite;
    }

    capturarPeca(posicaoCapturavel) {
        return posicaoCapturavel === true;
    }

    casaSegura() {
        return false;
    }

    jogarNovamente(valorDado) {
        return valorDado === 6;
    }

    podeMovimentarPecaNaBase(valorDado) {
        return valorDado === 6;
    }

    entrarTrilhaFinal(posicao) {
        return posicao >= 52;
    }

    movimentoFinalValido(posicao, valorDado) {
        return posicao + valorDado <= 57;
    }

    finalizarPeca(posicao) {
        return posicao === 57;
    }

    verificarVitoria(pecas) {
        return pecas.length === 4 && pecas.every(peca => peca === true);
    }

    encerrarPartida() {
        this.partidaEncerrada = true;
    }

    podeJogar() {
        return this.partidaIniciada && !this.partidaEncerrada;
    }

    proximoJogador(jogador) {
        return jogador === 1 ? 2 : 1;
    }

    jogadaPermitida(jogador, jogadorAtual) {
        return jogador === jogadorAtual && !this.partidaEncerrada;
    }

    retornarParaBase() {
        return 0;
    }
}

module.exports = Ludo;
