# 35. Search Insert Position - Explicação da Solução

## Abordagem: Busca Linear com Verificação de Vizinhos

Esta solução utiliza uma abordagem de busca linear para encontrar a posição correta para inserir um valor alvo em um array ordenado. Ela examina cada elemento e seu vizinho para determinar o ponto de inserção adequado.

## Lógica do Algoritmo:

1. Inicializamos uma variável `finalIndex` como 0 (posição padrão se todos os elementos forem maiores que o alvo).
2. Iteramos por cada índice do array:
   - Convertemos o índice string do loop `for...in` para um número.
   - Obtemos o elemento atual e seu próximo elemento (que pode ser indefinido se estivermos no final).
3. Lidamos com dois casos principais:
   - Caso 1: Se encontrarmos uma correspondência exata para o alvo, registramos este índice.
   - Caso 2: Se o alvo for maior que o elemento atual, verificamos:
     - Se o próximo elemento é maior ou igual ao alvo, OU
     - Se não há próximo elemento (estamos no final do array)
     - Então o alvo deve ser inserido logo após o elemento atual.
4. Retornamos a posição de índice final determinada.

## Exemplo Passo a Passo:

Usando o exemplo: `nums = [1,3,5,6]`, `target = 5`

1. Inicialização:

   - `finalIndex = 0`

2. Iteração:

   - Índice 0:
     - `currentNumber = 1`, `nextNumber = 3`
     - `1 < 5`, e `3 < 5`, então não atualizamos o finalIndex
   - Índice 1:
     - `currentNumber = 3`, `nextNumber = 5`
     - `3 < 5`, e `5 >= 5`, então `finalIndex = 2`
   - Índice 2:
     - `currentNumber = 5`, `nextNumber = 6`
     - `5 === 5`, então `finalIndex = 2` (correspondência exata encontrada)
   - Índice 3:
     - `currentNumber = 6`, `nextNumber = undefined`
     - `6 > 5`, então não atualizamos o finalIndex

3. Retornamos `finalIndex = 2`
