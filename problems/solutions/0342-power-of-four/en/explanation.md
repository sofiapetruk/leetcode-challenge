# 342. Power of Four - Solution Explanation

## Approach: Logarithmic Check with Integer Validation

This solution checks whether a number is a power of 4 using logarithms and a simple integer verification. The idea is based on the mathematical definition of exponentiation using logarithmic properties.

## Algorithm Logic:

1. **Initial Check**:
   - If `n` is less than or equal to 0, return `false`, since negative numbers and zero cannot be powers of 4.

2. **Logarithmic Calculation**:
   - Use the change-of-base formula to calculate the logarithm of `n` in base 4:
     ```
     log₄(n) = log₁₀(n) / log₁₀(4)
     ```
   - This returns a value `x` such that `4^x = n`.

3. **Integer Validation**:
   - If the result is an integer (`Number.isInteger(value)`), then `n` is an exact power of 4.
   - Otherwise, it is not.

## Step-by-Step Example:

### To check if `n = 16` is a power of 4:

1. `n = 16` → greater than 0, continue.
2. Compute `value = Math.log(16) / Math.log(4)`:
   - `Math.log(16) ≈ 2.7726`
   - `Math.log(4) ≈ 1.3863`
   - `value ≈ 2.7726 / 1.3863 ≈ 2`
3. `Number.isInteger(2)` returns `true`

✅ Final result: `isPowerOfFour(16)` returns `true` because `4² = 16`.

## Code Used

```ts
function isPowerOfFour(n: number): boolean {
  if (n <= 0) return false;

  const value: number = Math.log(n) / Math.log(4);

  return Number.isInteger(value);
}
