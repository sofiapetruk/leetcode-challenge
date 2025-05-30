## 🔄 How to Get a Palindrome Without Using Strings?

**Answer:** By reversing the digits.

### Example:
121 can be rewritten as:

```
100 + 20 + 1
= (1 * 10**2) + (2 * 10**1) + (1 * 10**0)
```

- 100 is 1 in the hundreds place
- 20 is 2 in the tens place
- 1 is 1 in the units place 

Reversing:

- 1 from the units becomes hundreds → 100  
- 2 from the tens stays the same → 20  
- 1 from the hundreds becomes units → 1  

➡️ 121 is equal to 121 (it's a palindrome)

Another example:  
122 → 100 + 20 + 2  
Reversing → 200 + 20 + 1 → **122 ≠ 221**

---

### 🔢 Deductions

If we divide by 10, we get the digit place.
Since we go from the end to the beginning, we also need to **multiply by 10** to reverse.

In the code, we use the **original number passed as a function argument**, because **we don’t know how many times the operation will be needed**.  
We use a `while` loop for the operation.

```
121 ÷ 10 → remainder(%) = 1, quotient(//) = 12  
12 ÷ 10 → remainder(%) = 2, quotient(//) = 1  
1 ÷ 10 → remainder(%) = 1, quotient(//) = 0
```

- The remainder represents the beginning of the reverse reading  
- The quotient will be used in the next loop until it reaches zero

---

If we just do:
```python
reverse += x % 10
```
It won’t work, as we’re just summing the digits: `1 + 2 + 1 = 4`

### ✅ Correct Solution:

In each loop, we must add to the next higher digit place and remember that `x` serves as the loop variable:

```text
x = 121, reverse = 0

Loop 1 → reverse = 0 * 10 + 1 → 1  
Loop 2 → reverse = 1 * 10 + 2 → 12  
Loop 3 → reverse = 12 * 10 + 1 → 121
```

**Formula:**

```python
reverse = reverse * 10 + x % 10
x //= 10
```

---

### 💡 Useful Tips:

- To get quotient and remainder at the same time:
```python
q, r = divmod(x, 10)
```

- Use `while x > 0` to avoid negatives
- Every number from 1 to 9 is a palindrome. A single loop will be used. If 1 <= x <= 9, `divmod(x, 10)` → (0, x)  
- `while x` also works, but a conditional check is needed for negative numbers.
