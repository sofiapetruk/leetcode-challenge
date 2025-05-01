# 342. Power of Four - Explicação da Solução

## Abordagem: Logaritmo com Verificação de Inteiro

Esta solução verifica se um número é uma potência de 4 utilizando logaritmo e uma simples verificação de número inteiro. A ideia é aplicar a definição matemática de potência com base logarítmica.

## Lógica do Algoritmo:

1. **Verificação Inicial**:
   - Se `n` for menor ou igual a 0, retornamos `false`, pois números negativos ou zero não são potências de 4.

2. **Cálculo com Logaritmo**:
   - Utilizamos a fórmula de mudança de base para calcular o logaritmo de `n` na base 4:
     ```
     log₄(n) = log₁₀(n) / log₁₀(4)
     ```
   - Essa fórmula retorna o valor `x` tal que `4^x = n`.

3. **Verificação de Inteiro**:
   - Se o valor calculado for um número inteiro (`Number.isInteger(value)`), então `n` é uma potência exata de 4.
   - Caso contrário, não é.

## Exemplo Passo a Passo:

### Para verificar se `n = 16` é uma potência de 4:

1. `n = 16` → é maior que 0, então seguimos.
2. Calculamos `value = Math.log(16) / Math.log(4)`:
   - `Math.log(16) ≈ 2.7726`
   - `Math.log(4) ≈ 1.3863`
   - `value ≈ 2.7726 / 1.3863 ≈ 2`
3. `Number.isInteger(2)` retorna `true`

✅ Resultado final: `isPowerOfFour(16)` retorna `true` porque `4² = 16`.

## Código Utilizado

```ts
function isPowerOfFour(n: number): boolean {
  if (n <= 0) return false;

  const value: number = Math.log(n) / Math.log(4);

  return Number.isInteger(value);
}
