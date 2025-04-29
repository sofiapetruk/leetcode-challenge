# 509. Fibonacci Number - Explicação da Solução

## Abordagem: Recursão Simples

Esta solução implementa o cálculo do número de Fibonacci usando uma abordagem recursiva direta, que segue a definição matemática da sequência de Fibonacci.

## Lógica do Algoritmo:

1. **Casos Base**:
   - Se n = 0, retornamos 0
   - Se n = 1, retornamos 1
2. **Caso Recursivo**:
   - Para n > 1, calculamos o número de Fibonacci somando os dois números de Fibonacci anteriores:
   - F(n) = F(n-1) + F(n-2)

## Exemplo Passo a Passo:

Para calcular fib(4):

1. Chamamos `fib(4)`
   - Não é caso base, então calculamos `fib(3) + fib(2)`
2. Calculamos `fib(3)`
   - Não é caso base, então calculamos `fib(2) + fib(1)`
3. Calculamos `fib(2)`
   - Não é caso base, então calculamos `fib(1) + fib(0)`
   - `fib(1)` = 1 (caso base)
   - `fib(0)` = 0 (caso base)
   - Então `fib(2)` = 1 + 0 = 1
4. Voltando para `fib(3)`
   - `fib(2)` = 1 (já calculado)
   - `fib(1)` = 1 (caso base)
   - Então `fib(3)` = 1 + 1 = 2
5. Voltando para `fib(4)`

   - `fib(3)` = 2 (já calculado)
   - Precisamos calcular `fib(2)` novamente
   - `fib(2)` = 1 (já sabemos)
   - Então `fib(4)` = 2 + 1 = 3

6. Resultado final: `fib(4)` = 3
