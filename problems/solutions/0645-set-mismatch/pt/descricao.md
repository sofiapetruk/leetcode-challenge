# 645. Set Mismatch (Fácil)

Você tem um conjunto de números inteiros `s`, que originalmente contém todos os números de
`1` para` n`.Infelizmente, devido a algum erro, um dos números em `s` Got
duplicado para outro número no conjunto, o que resulta em ** repetição de
Um ** número e ** perda de outro número **.

Você recebe uma matriz inteira `nums` representando o status de dados deste conjunto
Após o erro.

Encontre o número que ocorre duas vezes e o número que está ausente e retorne
_SHE na forma de uma matriz_.

## Exemplo 1:



Entrada: nums = [1,2,2,4]
Saída: [2,3]


## Exemplo 2:



Entrada: nums = [1,1]
Saída: [1,2]


## restrições

* `2 <= nums.Length <= 104`
* `1 <= nums [i] <= 104`
