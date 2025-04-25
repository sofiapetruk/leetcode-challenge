# 35. Posição de Inserção de Busca (Fácil)

Dado um array ordenado de inteiros distintos e um valor alvo, retorne o índice  
se o valor alvo for encontrado. Caso contrário, retorne o índice onde ele estaria  
se fosse inserido na ordem correta.

Você deve escrever um algoritmo com complexidade de tempo `O(log n)`.

## Exemplo 1:

    Entrada: nums = [1,3,5,6], target = 5
    Saída: 2

## Exemplo 2:

    Entrada: nums = [1,3,5,6], target = 2
    Saída: 1

## Exemplo 3:

    Entrada: nums = [1,3,5,6], target = 7
    Saída: 4

## Restrições

- `1 <= nums.length <= 10⁴`
- `-10⁴ <= nums[i] <= 10⁴`
- `nums` contém valores **distintos** ordenados em **ordem crescente**.
- `-10⁴ <= target <= 10⁴`
