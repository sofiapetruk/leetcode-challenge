# 345. Reverse Vowels of a String - Explicação da Solução

## Abordagem: Coleta e Substituição de Vogais

Esta solução inverte apenas as vogais de uma string enquanto mantém os demais caracteres em suas posições originais. A abordagem é feita em duas etapas: primeiro coletamos todas as vogais, depois as substituímos na ordem inversa.

## Lógica do Algoritmo:

1. Convertemos a string de entrada em um array de caracteres para facilitar as modificações.
2. Definimos quais caracteres são vogais (a, e, i, o, u - tanto maiúsculas quanto minúsculas).
3. Percorremos a string e coletamos todas as vogais encontradas em um array separado.
4. Percorremos novamente a string original:
   - Quando encontramos uma vogal, a substituímos pela última vogal coletada ainda não utilizada.
   - Decrementamos o índice para apontar para a próxima vogal a ser utilizada na substituição.

## Exemplo Passo a Passo:

Usando o exemplo: `s = "hello"`

1. Inicialização:

   - `stringArray = ['h', 'e', 'l', 'l', 'o']`
   - `vowels = ['a', 'e', 'i', 'o', 'u']`

2. Coletar vogais:

   - Percorremos `stringArray` e identificamos 'e' e 'o' como vogais
   - `vowelsInString = ['e', 'o']`

3. Substituir vogais na ordem inversa:

   - `vowelIndex = 1` (último índice de `vowelsInString`)
   - Primeira vogal encontrada: 'e' na posição 1
     - Substituímos por `vowelsInString[1]`, que é 'o'
     - Decrementamos `vowelIndex` para 0
   - Segunda vogal encontrada: 'o' na posição 4
     - Substituímos por `vowelsInString[0]`, que é 'e'
     - Decrementamos `vowelIndex` para -1

4. Resultado final:
   - `stringArray = ['h', 'o', 'l', 'l', 'e']`
   - Após join: `"holle"`
