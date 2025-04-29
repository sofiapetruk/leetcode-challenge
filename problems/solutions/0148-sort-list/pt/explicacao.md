# 148. Sort List - Explicação da Solução

## Abordagem: Merge Sort para Listas Encadeadas

Esta solução implementa o algoritmo de Merge Sort para ordenar uma lista encadeada. Merge Sort é particularmente adequado para listas encadeadas porque pode ser implementado com complexidade de espaço O(1) (sem contar a pilha de chamadas recursivas).

## Lógica do Algoritmo:

1. **Caso Base**: Se a lista estiver vazia ou tiver apenas um nó, está automaticamente ordenada.

2. **Divisão**: Dividimos a lista em duas metades:

   - Encontramos o meio da lista usando a técnica do "corredor rápido e lento".
   - Dividimos a lista em duas listas separadas.

3. **Recursão**: Aplicamos recursivamente o mesmo processo de ordenação em ambas as metades.

4. **Combinação**: Mesclamos as duas metades ordenadas em uma única lista ordenada.

## Funções Auxiliares:

1. **`find_middle(head)`**: Encontra o nó do meio da lista.

   - Usa dois ponteiros: `slow` e `fast`.
   - `fast` se move duas vezes mais rápido que `slow`.
   - Quando `fast` alcança o fim, `slow` está no meio.

2. **`merge(l1, l2)`**: Combina duas listas ordenadas em uma única lista ordenada.
   - Usa um nó `dummy` para simplificar a manipulação da cabeça da lista.
   - Compara os valores dos nós e os conecta em ordem crescente.
   - Lida com quaisquer nós restantes após uma das listas ter sido totalmente percorrida.

## Exemplo Passo a Passo:

Para a lista `4 -> 2 -> 1 -> 3`:

1. **Divisão**:

   - Meio: nó com valor 2
   - Lista esquerda: `4 -> 2`
   - Lista direita: `1 -> 3`

2. **Recursão na lista esquerda** (`4 -> 2`):

   - Divisão: Meio é o nó com valor 4
   - Lista esquerda: `4`
   - Lista direita: `2`
   - Ordenação recursiva: `2 -> 4`

3. **Recursão na lista direita** (`1 -> 3`):

   - Divisão: Meio é o nó com valor 1
   - Lista esquerda: `1`
   - Lista direita: `3`
   - Ordenação recursiva: `1 -> 3`

4. **Combinação final**:
   - Mesclagem de `2 -> 4` e `1 -> 3`
   - Resultado: `1 -> 2 -> 3 -> 4`
