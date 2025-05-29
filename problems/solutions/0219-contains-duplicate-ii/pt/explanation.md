# 219. Contém Duplicata II - Explicação da Solução

## Abordagem: Usando Mapa Hash (Dicionário)

A solução utiliza um mapa hash para manter o controle do último índice visto de cada número, permitindo verificar eficientemente duplicatas dentro da distância k especificada.

## Lógica do Algoritmo:

1. Criamos um mapa hash vazio `numToIndex` para armazenar o último índice visto de cada número.
2. Iteramos pelo array com um loop.
3. Para cada número:
   - Se já vimos este número antes (ele existe no mapa):
     - Calculamos a distância entre o índice atual e o último índice visto
     - Se a distância for menor ou igual a k, encontramos uma duplicata válida
     - Caso contrário, atualizamos o último índice visto para o índice atual
   - Se não vimos este número, adicionamos ao mapa com o índice atual

## Exemplo Passo a Passo:

Usando o exemplo: `nums = [1,2,3,1]`, `k = 3`

1. Inicializar `numToIndex = {}`
2. Iteração 1 (i=0):
   - `num = 1`
   - Não está no mapa, adicionar `numToIndex[1] = 0`
3. Iteração 2 (i=1):
   - `num = 2`
   - Não está no mapa, adicionar `numToIndex[2] = 1`
4. Iteração 3 (i=2):
   - `num = 3`
   - Não está no mapa, adicionar `numToIndex[3] = 2`
5. Iteração 4 (i=3):
   - `num = 1`
   - Encontrado no mapa no índice 0
   - Distância = 3 - 0 = 3 ≤ k
   - Retornar true

## Complexidade de Tempo e Espaço:

- Complexidade de Tempo: O(n) - Fazemos uma única passagem pelo array
- Complexidade de Espaço: O(min(n,k)) - No pior caso, armazenamos no máximo k elementos no mapa 