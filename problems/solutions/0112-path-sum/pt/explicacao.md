# 112. Soma de Caminho (Fácil)

## Enunciado
Dado o `root` de uma árvore binária e um inteiro `targetSum`, retorne `True` se existir um caminho da raiz até uma folha cuja soma dos valores seja igual a `targetSum`. Folha é um nó sem filhos.

## Exemplos
1. **Entrada:**  
root = [5,4,8,11,null,13,4,7,2,null,null,null,1],
targetSum = 22

Copiar
Editar
**Saída:** `True`  
**Explicação:** O caminho 5 → 4 → 11 → 2 soma 22.  

2. **Entrada:**  
root = [1,2,3],
targetSum = 5

Copiar
Editar
**Saída:** `False`  
**Explicação:** Não há caminho da raiz até uma folha que some 5.  

3. **Entrada:**  
root = [],
targetSum = 0

Copiar
Editar
**Saída:** `False`  
**Explicação:** Árvore vazia não possui caminhos.

## Abordagem
1. Se `root` for `None`, retorne `False` (não há caminho).  
2. Defina `val = root.val`, `left = root.left` e `right = root.right`.  
3. Se `left` e `right` forem `None` (nó folha), verifique se `targetSum - val == 0`.  
4. Caso contrário, subtraia `val` de `targetSum` e chame recursivamente:  
- `hasPathSum(root.left, targetSum - val)`  
- OU `hasPathSum(root.right, targetSum - val)`.  
5. Retorne `True` se qualquer chamada recursiva retornar `True`; caso contrário, retorne `False`.

## Análise de Complexidade
- **Complexidade de Tempo:** O(n), onde n é o número de nós; cada nó é visitado uma vez.  
- **Complexidade de Espaço:** O(h), onde h é a altura da árvore devido à pilha de recursão (no pior caso O(n) se não estiver balanceada, O(log n) se estiver balanceada).