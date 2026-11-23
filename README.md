**Rafaela Tanaka Cardoso 24062611-2**

**Vitor Hugo da Costa 23234248-2**

# Ludo - Casos de Teste

## Concepção do Desafio

O desafio consiste em criar casos de teste para o jogo Ludo, considerando uma partida entre dois jogadores.
A ideia é testar as principais regras do jogo e verificar se as ações acontecem da maneira esperada, como retirar peças da base, movimentar pelo tabuleiro, capturar peças do adversário e identificar quando um jogador vence.

Os testes foram pensados para verificar tanto situações em que o jogo funciona corretamente quanto situações em que alguma jogada não deve ser permitida.

## Funcionamento dos Casos de Teste

Os casos de teste foram escritos em JavaScript, utilizando o Jest como framework de testes.

Cada teste verifica uma situação diferente do jogo e compara o resultado obtido com o resultado esperado.

Foram considerados testes para:

- Início de uma partida com dois jogadores;
- Validação da quantidade de jogadores;
- Retirada das peças da base ao tirar 6 no dado;
- Movimentação das peças pelo tabuleiro;
- Impedimento de movimentos inválidos;
- Captura de peças do adversário;
- Proteção das peças em casas seguras;
- Alternância de turnos entre os jogadores;
- Entrada das peças na área final;
- Verificação da vitória.

Dessa forma, os testes ajudam a identificar possíveis erros nas regras e garantem que as principais situações de uma partida de Ludo sejam verificadas.
