# 21. Combinar Duas Listas Ordenadas (Fácil)

Você recebe os **cabeçalhos** de duas **listas encadeadas ordenadas**, `list1` e `list2`.

Combine as duas listas em uma única lista **ordenada**. A lista deve ser formada unindo os nós das duas primeiras listas.

Retorne _o cabeçalho da lista encadeada combinada_.

## Exemplo 1:

![](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]


## Exemplo 2:

Input: list1 = [], list2 = []
Output: []


## Exemplo 3:

Input: list1 = [], list2 = [0]
Output: [0]


## Restrições

* O número de nós em ambas as listas está no intervalo `[0, 50]`.
* `-100 <= Node.val <= 100`
* Ambas `list1` e `list2` estão ordenadas em ordem **não decrescente**.