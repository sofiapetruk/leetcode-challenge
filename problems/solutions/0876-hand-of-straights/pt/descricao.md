# 876. Hand of Straights (Médio)

Alice tem algum número de cartas e ela quer reorganizar os cartões em
grupos para que cada grupo seja de tamanho `agrupamento 'e consiste em` agrupamento'
cartões consecutivos.

Dada uma matriz inteira `hand` onde` mão [i] `é o valor escrito no
`it 'cartão e um número inteiro` agrupe', retornar `true` se ela puder reorganizar o
cartões, ou `false`, caso contrário.

## Exemplo 1:



Entrada: Hand = [1,2,3,6,2,3,4,7,8], Groupsize = 3
Saída: true
Explicação: A mão de Alice pode ser reorganizada como [1,2,3], [2,3,4], [6,7,8]


## Exemplo 2:



Entrada: Hand = [1,2,3,4,5], GroupSize = 4
Saída: false
Explicação: A mão de Alice não pode ser reorganizada em grupos de 4.



## restrições

* `1 <= hand.length <= 104`
* `0 <= Hand [i] <= 109`
* `1 <= agrupamento <= hand.length '

** Nota: ** Esta pergunta é a mesma que 1296:
<https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/>
