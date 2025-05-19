# Explicação – Prefixo Comum Mais Longo

Para resolver o problema de encontrar o prefixo comum mais longo entre uma lista de strings, precisamos comparar os caracteres em todas as strings e identificar o maior prefixo compartilhado por todas elas.

## O que é um prefixo?

Um **prefixo** é a parte inicial de uma string.  
Por exemplo, na palavra `"flor"`:

- `"f"` é um prefixo
- `"flo"` é um prefixo
- `"flor"` é um prefixo
- `"l"` ou `"lor"` **não** são prefixos (não iniciam a palavra)

## Entendendo o problema

Dada uma lista de strings, o objetivo é retornar o maior prefixo que todas compartilham.  
Se nenhum prefixo comum existir, retorne uma string vazia `""`.

## Exemplos

- `["flor", "fluxo", "flauta"]` → Prefixo comum: `"fl"`
- `["cão", "rato", "carro"]` → Sem prefixo comum → `""`

## Lógica da Solução

O algoritmo segue a seguinte abordagem:

1. Assume a **primeira string** como o prefixo comum inicial.
2. Itera sobre as demais strings:
   - Enquanto a string atual **não começar** com o prefixo:
     - Remove o último caractere do prefixo.
     - Se o prefixo se tornar vazio, retorna `""`.
3. Retorna o prefixo final após todas as comparações.

## Por que isso funciona

Ao reduzir iterativamente o prefixo até que ele corresponda ao início de cada palavra, garantimos que o resultado final seja o maior prefixo comum que se aplica a **todas** as strings da lista.
