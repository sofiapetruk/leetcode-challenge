## Enunciado
Dado o `head` de uma lista ligada simples, inverta a lista e retorne o novo `head` da lista invertida.

## Exemplos
1. **Entrada:** `head = [1,2,3,4,5]`  
   **Saída:** `[5,4,3,2,1]`

2. **Entrada:** `head = [1,2]`  
   **Saída:** `[2,1]`

3. **Entrada:** `head = []`  
   **Saída:** `[]`

## Abordagem
Utilizamos três ponteiros para inverter a lista in-place:

1. Inicialize:
   - `prev = None`
   - `curr = head`
2. Enquanto `curr` for diferente de `None`:
   - `nextTemp = curr.next`      # Armazena o próximo nó
   - `curr.next = prev`          # Inverte o ponteiro
   - `prev = curr`               # Avança `prev`
   - `curr = nextTemp`           # Avança `curr`
3. Ao final do loop, `prev` aponta para o novo head. Retorne `prev`.

## Exemplo Passo a Passo
Para a lista `1 → 2 → 3`:

Inicial: prev=None, curr=Node(1)

Iteração 1:
 nextTemp = Node(2)
 curr.next = None        # 1 → None
 prev = Node(1)
 curr = Node(2)

Iteração 2:
 nextTemp = Node(3)
 curr.next = Node(1)     # 2 → 1 → None
 prev = Node(2)
 curr = Node(3)

Iteração 3:
 nextTemp = None
 curr.next = Node(2)     # 3 → 2 → 1 → None
 prev = Node(3)
 curr = None

Loop termina, retorna prev (Node(3)), resultando em 3 → 2 → 1

## Análise de Complexidade
  Complexidade de Tempo: O(n), onde n é o número de nós; cada nó é processado uma vez.

  Complexidade de Espaço: O(1), pois usamos apenas ponteiros auxiliares.