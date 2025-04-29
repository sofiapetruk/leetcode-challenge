# 191. Number of 1 Bits (Fácil)

Dado um número inteiro positivo `n`, escreva uma função que retorne o número de conjunto
bits em sua representação binária (também conhecida como [hamming
Peso] (http://en.wikipedia.org/wiki/hamming_weight)).

## Exemplo 1:

Entrada: n = 11

Saída: 3

Explicação:

A sequência binária de entrada ** 1011 ** tem um total de três bits.

## Exemplo 2:

Entrada: n = 128

Saída: 1

Explicação:

A sequência binária de entrada ** 10000000 ** tem um total de um bit de conjunto.

## Exemplo 3:

Entrada: n = 2147483645

Saída: 30

Explicação:

A sequência binária de entrada ** 1111111111111111111111111111101 ** tem um total de
trinta bits.

## restrições

* `1 <= n <= 231 - 1`

** acompanhe: ** Se essa função for chamada muitas vezes, como você otimizaria
isto?
