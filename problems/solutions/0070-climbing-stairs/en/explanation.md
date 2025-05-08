# 70. Climbing Stairs – Solution Explanation

## Approach: Iterative Dynamic Programming (Fibonacci-Style)

This solution treats the number of ways to climb \(n\) stairs as the \(n\)th number in a sequence that follows the same recurrence as the Fibonacci numbers. Each step can be reached either from one step below or two steps below. By building up from the base cases, we avoid the exponential blow-up of naive recursion.

## Algorithm Logic:

1. **Base cases**

   - If \(n \le 2\), there are exactly \(n\) ways to climb:
     - \(n=1\): \([1]\) → 1 way
     - \(n=2\): \([1+1], [2]\) → 2 ways

2. **Initialization**

   - Let `first = 1` represent the number of ways to reach step 1.
   - Let `second = 2` represent the number of ways to reach step 2.

3. **Iteration (Bottom-Up)**

   - For each step \(i\) from 3 to \(n\):
     1. The number of ways to reach step \(i\) equals the sum of ways to reach steps \(i-1\) and \(i-2\).
     2. Update:
        ```python
        first, second = second, first + second
        ```
        - After this, `second` holds the number of ways to reach the current step \(i\), and `first` holds the previous value.

4. **Return**
   - After the loop, `second` is the number of ways to reach step \(n\).

## Example Step-by-Step:

Let’s walk through `n = 5`.

1. **Base setup**

   - `first = 1` (ways to reach step 1)
   - `second = 2` (ways to reach step 2)

2. **Iteration**

   - **i = 3**
     - new ways = `first + second = 1 + 2 = 3`
     - update → `first = 2`, `second = 3`
   - **i = 4**
     - new ways = `2 + 3 = 5`
     - update → `first = 3`, `second = 5`
   - **i = 5**
     - new ways = `3 + 5 = 8`
     - update → `first = 5`, `second = 8`

3. **Result**
   - Return `second = 8`.
   - There are 8 distinct ways to climb 5 stairs:
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
