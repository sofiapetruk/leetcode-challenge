# 112. Path Sum (Fácil)

Dada a 'raiz' de uma árvore binária e um número inteiro `tiraSum`, retornar
A árvore tem um caminho de ** raiz para folhas **, de modo que somente todos os valores
O caminho é igual ao `TargetSum`.

A ** Folha ** é um nó sem filhos.

## Exemplo 1:

! [] (https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg)



Entrada: raiz = [5,4,8,11, nulo, 13,4,7,2, nulo, nulo, nulo, 1], TargetSum = 22
Saída: true
Explicação: O caminho da raiz a folha com a soma alvo é mostrado.


## Exemplo 2:

! [] (https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)



Entrada: raiz = [1,2,3], TargetSum = 5
Saída: false
Explicação: Existem dois caminhos de raiz a folha na árvore:
(1 -> 2): A soma é 3.
(1 -> 3): A soma é 4.
Não há caminho de raiz a folha com soma = 5.


## Exemplo 3:



Entrada: root = [], TargetSum = 0
Saída: false
Explicação: Como a árvore está vazia, não há caminhos de raiz a folhas.


## restrições

* O número de nós na árvore está no intervalo `[0, 5000]`.
* `-1000 <= node.val <= 1000`
* `-1000 <= TargetSum <= 1000`
