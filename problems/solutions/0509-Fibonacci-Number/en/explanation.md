# 509. Fibonacci Number - Solution Explanation

## Approach: Simple Recursion

This solution implements the calculation of Fibonacci numbers using a direct recursive approach, following the mathematical definition of the Fibonacci sequence.

## Algorithm Logic:

1. **Base Cases**:
   - If n = 0, return 0
   - If n = 1, return 1
2. **Recursive Case**:
   - For n > 1, we calculate the Fibonacci number by adding the two previous Fibonacci numbers:
   - F(n) = F(n-1) + F(n-2)

## Step-by-Step Example:

To calculate fib(4):

1. We call `fib(4)`
   - Not a base case, so we calculate `fib(3) + fib(2)`
2. We calculate `fib(3)`
   - Not a base case, so we calculate `fib(2) + fib(1)`
3. We calculate `fib(2)`
   - Not a base case, so we calculate `fib(1) + fib(0)`
   - `fib(1)` = 1 (base case)
   - `fib(0)` = 0 (base case)
   - So `fib(2)` = 1 + 0 = 1
4. Going back to `fib(3)`
   - `fib(2)` = 1 (already calculated)
   - `fib(1)` = 1 (base case)
   - So `fib(3)` = 1 + 1 = 2
5. Going back to `fib(4)`

   - `fib(3)` = 2 (already calculated)
   - We need to calculate `fib(2)` again
   - `fib(2)` = 1 (we already know)
   - So `fib(4)` = 2 + 1 = 3

6. Final result: `fib(4)` = 3
