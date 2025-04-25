# 148. Ordenar Lista (Médio)

Dado o `head` de uma lista ligada, retorne **a lista após ordená-la em ordem crescente**.

## Exemplo 1:

![](https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg)

    Entrada: head = [4,2,1,3]
    Saída: [1,2,3,4]

## Exemplo 2:

![](https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg)

    Entrada: head = [-1,5,3,4,0]
    Saída: [-1,0,3,4,5]

## Exemplo 3:

    Entrada: head = []
    Saída: []

## Restrições

- O número de nós na lista está no intervalo `[0, 5 * 10⁴]`.
- `-10⁵ <= Node.val <= 10⁵`

**Desafio:** Você consegue ordenar a lista ligada em tempo `O(n logn)` e **memória constante** (ou seja, espaço `O(1)`)?
