# Explicação – Romano para Inteiro

Para resolver o problema de converter um número romano para um inteiro, precisamos entender o sistema de numeração romana e aplicar a lógica correta com base em suas regras.

## Valores dos Algarismos Romanos

Os algarismos romanos são compostos por letras com valores inteiros correspondentes:

| Símbolo | Valor |
| ------- | ----- |
| I       | 1     |
| V       | 5     |
| X       | 10    |
| L       | 50    |
| C       | 100   |
| D       | 500   |
| M       | 1000  |

## Como Funciona a Numeração Romana

Normalmente, os valores são **somados da esquerda para a direita**.  
Por exemplo:

- `"III"` = 1 + 1 + 1 = **3**
- `"XII"` = 10 + 1 + 1 = **12**
- `"XXVII"` = 10 + 10 + 5 + 1 + 1 = **27**

Porém, se um valor menor aparece **antes** de um valor maior, devemos **subtrair** esse valor.  
Essa regra se aplica às seguintes combinações:

- `I` antes de `V` (5) ou `X` (10) → 4 e 9
- `X` antes de `L` (50) ou `C` (100) → 40 e 90
- `C` antes de `D` (500) ou `M` (1000) → 400 e 900

Por exemplo:

- `"IV"` = 5 - 1 = **4**
- `"IX"` = 10 - 1 = **9**
- `"XL"` = 50 - 10 = **40**
- `"MCMXCIV"` = 1000 + (1000 - 100) + (100 - 10) + (5 - 1) = **1994**

## Lógica da Solução

O algoritmo segue os seguintes passos:

1. Mapeia todos os símbolos romanos com seus respectivos valores inteiros.
2. Percorre a string comparando cada caractere com o próximo:
   - Se o valor atual for **menor** que o próximo, subtrai.
   - Caso contrário, soma normalmente.
3. Soma o valor do **último caractere** (ele nunca será subtraído).
