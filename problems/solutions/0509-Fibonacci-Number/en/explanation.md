## 🧠 Logic of the Solution - Fibonacci

This solution solves the Fibonacci number problem using an **iterative approach**, meaning it uses a loop instead of recursion.

### 💡 Main Idea:

The logic is based on the definition of the Fibonacci sequence:  
**each number is the sum of the two preceding ones**.  
So, the algorithm starts with the first two values (0 and 1) and keeps updating the next values until it reaches the desired position.

### 🔄 How it works:

- It begins with the first two numbers of the sequence: `0` and `1`.
- In each loop iteration, it adds the two previous numbers to calculate the next one.
- Then it updates the variables: the latest number becomes the "previous", and the new result becomes the "current".
- This process repeats until it reaches position `n`.

### ✅ Advantages:

- It's efficient: avoids recursive calls and repeated calculations.
- Works well for small and medium values of `n`, especially within the constraint `0 <= n <= 30`.

---

#### Developer

- [Vítor](https://github.com/euvitorti)