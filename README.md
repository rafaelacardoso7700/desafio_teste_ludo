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

## Casos de Teste

| ID | Cenário de teste | Resultado esperado |
|---|---|---|
| CT01 | Iniciar uma partida com 2 jogadores. | A partida deve iniciar com os dois jogadores e suas 4 peças. |
| CT02 | Iniciar uma partida com apenas 1 jogador. | O sistema deve impedir o início da partida. |
| CT03 | Iniciar uma partida com mais de 2 jogadores. | O sistema deve impedir o início da partida. |
| CT04 | Jogar o dado e obter o número 6. | O jogador deve ter permissão para retirar uma peça da base. |
| CT05 | Jogar o dado e obter um número diferente de 6, estando todas as peças na base. | O jogador deve passar a vez. |
| CT06 | Retirar uma peça da base após obter 6. | A peça deve ser posicionada na casa inicial do jogador. |
| CT07 | Movimentar uma peça conforme o número obtido no dado. | A peça deve avançar a quantidade correta de casas. |
| CT08 | Tentar movimentar uma peça além do limite permitido. | O sistema deve impedir a movimentação inválida. |
| CT09 | Movimentar uma peça para uma casa ocupada por uma peça adversária em posição capturável. | A peça adversária deve retornar à base. |
| CT10 | Movimentar uma peça para uma casa segura ocupada pelo adversário. | A peça adversária não deve ser capturada. |
| CT11 | Obter 6 no dado novamente. | O jogador deve receber outra jogada, conforme a regra adotada. |
| CT12 | Tentar movimentar uma peça que ainda está na base sem obter 6. | O sistema deve impedir a movimentação. |
| CT13 | Movimentar uma peça até a trilha final. | A peça deve entrar no caminho final do jogador. |
| CT14 | Tentar chegar à última casa com um número maior que o necessário. | O sistema deve impedir a movimentação, caso a regra exija valor exato. |
| CT15 | Conseguir levar uma peça até a área final. | A peça deve ser considerada finalizada. |
| CT16 | Finalizar as quatro peças de um jogador. | O sistema deve declarar esse jogador vencedor. |
| CT17 | Tentar jogar após o encerramento da partida. | O sistema deve impedir novas jogadas. |
| CT18 | Verificar a alternância de turnos entre os jogadores. | A vez deve passar corretamente entre os dois jogadores. |
| CT19 | Tentar jogar fora da própria vez. | O sistema deve impedir a jogada. |
| CT20 | Verificar se uma peça capturada retorna à posição inicial. | A peça deve voltar à base e precisar de um novo 6 para sair. |

## Considerações Finais

Os casos de teste apresentados têm como objetivo verificar as principais funcionalidades e regras do jogo Ludo em uma partida entre dois jogadores.

Foram considerados testes de início de partida, movimentação das peças, lançamento dos dados, captura de peças adversárias, alternância de turnos e condição de vitória.

Os testes foram estruturados utilizando JavaScript e a sintaxe do framework Jest, permitindo verificar se os resultados obtidos correspondem aos resultados esperados.
