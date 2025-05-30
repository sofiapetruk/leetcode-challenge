# 876. Meio da Lista Ligada (Fácil)

## Enunciado
Dado o head de uma lista ligada simples, retorne o nó do meio. Se existirem dois nós do meio, retorne o segundo.

## Exemplos
1. **Entrada:** `head = [1,2,3,4,5]`  
   **Saída:** `[3,4,5]`  

2. **Entrada:** `head = [1,2,3,4,5,6]`  
   **Saída:** `[4,5,6]`  

## Abordagem
Utilize dois ponteiros, rápido e lento:
1. Inicialize `rapido = head` e `lento = head`.  
2. Enquanto `rapido` e `rapido.next` existirem:  
   - `rapido = rapido.next.next`  
   - `lento = lento.next`  
3. Ao final do loop, `lento` aponta para o nó do meio. Retorne `lento`.

## Análise de Complexidade
- **Complexidade de Tempo:** O(n), onde n é o número de nós (uma única travessia).  
- **Complexidade de Espaço:** O(1), pois usamos apenas dois ponteiros.
