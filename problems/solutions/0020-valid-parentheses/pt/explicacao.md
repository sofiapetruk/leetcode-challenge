# 20. Valid Parentheses - Explicação da Solução

## Abordagem: Utilizando Pilha (Stack)

Esta solução utiliza uma estrutura de dados de pilha para verificar se uma string contendo apenas parênteses, colchetes e chaves está válida, ou seja, se cada caractere de abertura tem seu correspondente de fechamento na ordem correta.

## Lógica do Algoritmo:

1. Criamos uma pilha vazia para armazenar os caracteres de abertura.
2. Definimos um mapa que associa cada caractere de fechamento ao seu correspondente de abertura.
3. Percorremos cada caractere da string:
   - Se for um caractere de abertura ('(', '{', '['), o empilhamos.
   - Se for um caractere de fechamento (')', '}', ']'):
     - Verificamos se a pilha está vazia (não há caracteres de abertura pendentes).
     - Desempilhamos o último caractere de abertura e verificamos se corresponde ao atual caractere de fechamento.
     - Se alguma dessas verificações falhar, a string não é válida.
4. Ao final, a string só é válida se a pilha estiver vazia (todos os caracteres de abertura foram fechados).

## Exemplo Passo a Passo:

Usando o exemplo: `s = "({[]})"`.

1. Inicialização:

   - `stack = []`
   - `bracketMap = { ")": "(", "}": "{", "]": "[" }`

2. Iteração:

   - `char = '('`: É um caractere de abertura, empilhamos. `stack = ['(']`
   - `char = '{'`: É um caractere de abertura, empilhamos. `stack = ['(', '{']`
   - `char = '['`: É um caractere de abertura, empilhamos. `stack = ['(', '{', '[']`
   - `char = ']'`: É um caractere de fechamento:
     - Desempilhamos o último caractere: `'['`
     - Verificamos se `bracketMap[']'] === '['` (verdadeiro)
     - `stack = ['(', '{']`
   - `char = '}'`: É um caractere de fechamento:
     - Desempilhamos o último caractere: `'{'`
     - Verificamos se `bracketMap['}'] === '{'` (verdadeiro)
     - `stack = ['(']`
   - `char = ')'`: É um caractere de fechamento:
     - Desempilhamos o último caractere: `'('`
     - Verificamos se `bracketMap[')'] === '('` (verdadeiro)
     - `stack = []`

3. Ao final, verificamos se `stack.length === 0` (verdadeiro), então a string é válida.
