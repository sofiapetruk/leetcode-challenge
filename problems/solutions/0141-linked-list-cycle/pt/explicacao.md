# 141. Ciclo em Lista Encadeada (Fácil)

## Enunciado

Dado o `head` de uma lista ligada simples, determine se a lista contém um ciclo. Retorne `True` se houver ciclo; caso contrário, retorne `False`.

## Exemplos

1. **Entrada:** `head = [3,2,0,-4]`, onde o último nó conecta-se ao nó no índice `1`  
   **Saída:** `True`

2. **Entrada:** `head = [1,2]`, onde o último nó conecta-se ao nó no índice `0`  
   **Saída:** `True`

3. **Entrada:** `head = [1]`, sem ciclo  
   **Saída:** `False`

## Abordagem

Utilizamos dois ponteiros (`lento` e `rapido`) para detectar o ciclo (algoritmo de Floyd, “Tartaruga e Lebre”):

1. Se `head` for `None` ou `head.next` for `None`, retorne `False` (impossível ter ciclo).
2. Inicialize:
   - `lento = head`
   - `rapido = head.next`
3. Enquanto `rapido` e `rapido.next` não forem `None`:
   - Se `lento` for igual a `rapido`, há ciclo; retorne `True`.
   - Avance `lento` em um passo: `lento = lento.next`
   - Avance `rapido` em dois passos: `rapido = rapido.next.next`
4. Se o loop terminar, `rapido` atingiu o fim; retorne `False` (sem ciclo).

## Análise de Complexidade

- **Complexidade de Tempo:** O(n), onde n é o número de nós; cada ponteiro avança no máximo n passos.
- **Complexidade de Espaço:** O(1), pois usamos apenas dois ponteiros auxiliares.
