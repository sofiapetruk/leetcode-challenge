# 70. Subindo Escadas – Explicação da Solução

## Abordagem: Programação Dinâmica Iterativa (Estilo Fibonacci)

Tratamos o número de maneiras de subir \(n\) degraus como o \(n\)-ésimo termo de uma sequência que segue a mesma relação de recorrência dos números de Fibonacci. Cada degrau pode ser alcançado vindo de um degrau anterior ou de dois degraus anteriores. Construindo a solução de baixo para cima, evitamos a explosão exponencial da recursão ingênua.

## Lógica do Algoritmo:

1. **Casos base**

   - Se \(n \le 2\), existem exatamente \(n\) maneiras de subir:
     - \(n=1\): \([1]\) → 1 maneira
     - \(n=2\): \([1+1], [2]\) → 2 maneiras

2. **Inicialização**

   - `first = 1` representa o número de maneiras de chegar ao degrau 1.
   - `second = 2` representa o número de maneiras de chegar ao degrau 2.

3. **Iteração (Bottom-Up)**

   - Para cada degrau \(i\) de 3 até \(n\):
     1. As maneiras de chegar no degrau \(i\) são a soma das maneiras de chegar em \(i-1\) e \(i-2\).
     2. Atualize:
        ```python
        first, second = second, first + second
        ```
        - Após isso, `second` contém as maneiras de alcançar o degrau atual \(i\), e `first` mantém o valor anterior.

4. **Retorno**
   - Ao final do loop, `second` é o número de maneiras de alcançar o degrau \(n\).

## Exemplo Passo a Passo:

Para `n = 5`:

1. **Configuração inicial**

   - `first = 1` (maneiras de alcançar o degrau 1)
   - `second = 2` (maneiras de alcançar o degrau 2)

2. **Iteração**

   - **i = 3**
     - novas maneiras = `first + second = 1 + 2 = 3`
     - atualiza → `first = 2`, `second = 3`
   - **i = 4**
     - novas maneiras = `2 + 3 = 5`
     - atualiza → `first = 3`, `second = 5`
   - **i = 5**
     - novas maneiras = `3 + 5 = 8`
     - atualiza → `first = 5`, `second = 8`

3. **Resultado**
   - Retorna `second = 8`.
   - Existem 8 maneiras distintas de subir 5 degraus:
     ```
     1+1+1+1+1
     1+1+1+2
     1+1+2+1
     1+2+1+1
     2+1+1+1
     1+2+2
     2+1+2
     2+2+1
     ```
