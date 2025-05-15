## 🔍 Explanation - Longest Substring Without Repeating Characters

We use the **Sliding Window** technique to efficiently find the longest substring without repeating characters.

### 🧠 Intuition

Instead of checking every possible substring (which would be very slow — O(n²)), we keep track of a **window** of characters that are all unique.

As we iterate over the string, we expand the window to include new characters. If we find a duplicate, we shrink the window from the left until all characters are unique again.

This approach ensures that we look at each character only once or twice — making it **linear time**.

---

### 🧰 Algorithm Steps

1. Create a `Set` to keep track of the characters currently in the window.
2. Use two pointers: `left` (start of the window) and `right` (end of the window).
3. Loop through the string with the `right` pointer:
   - If `s[right]` is not in the `Set`, add it and update the max length.
   - If `s[right]` **is** in the `Set`, it means there's a duplicate, so:
     - Remove characters from the `Set` starting from the `left` pointer,
     - Move the `left` pointer forward until the duplicate is removed.
4. Repeat until the end of the string is reached.
5. Return the maximum length found.

---

### 💻 Example in Action: `"pwwkew"`

Let's walk through the string:

- Start with empty window, max = 0.
- Add `p` → no duplicate → window = `"p"`, max = 1.
- Add `w` → no duplicate → window = `"pw"`, max = 2.
- Add `w` again → duplicate → shrink window from left → remove `p`, then `w`.
- Add `w` again → window = `"w"`, max still 2.
- Add `k` → window = `"wk"`, max = 2.
- Add `e` → window = `"wke"`, max = 3.
- Add `w` again → duplicate → remove until duplicate is gone → window becomes `"kew"`.

✅ Final result: max length = **3**.

---

### ⏱️ Complexity

- **Time Complexity:** O(n)
  - Each character is added and removed from the Set at most once.
- **Space Complexity:** O(min(n, m))
  - Where `m` is the size of the character set (e.g., 26 for lowercase letters, or more if symbols are included).

---

### 🧼 Clean and Efficient

This solution avoids brute force and gives a clean and efficient way to solve the problem — it's a great example of how sliding windows and Sets can be powerful in string manipulation problems.

