# Explanation

The problem asks to reverse each word in a given string, while maintaining the order of the words.

For example:
- Input: `"Let's take LeetCode contest"`
- Output: `"s'teL ekat edoCteeL tsetnoc"`

---

## Solution Overview

Here's what the solution does:

1. Initialize two pointers: `l` and `r` at 0.
2. Initialize an empty string `res` to store the reversed words.
3. Iterate through the string using `r`:
   - If `s[r]` is not a space, increment `r`.
   - If `s[r]` is a space, reverse the word from `l` to `r` (inclusive) and add it to `res`.
   - Move the pointers to the next word: increment `r` and set `l = r`.
4. After the loop, there's still one last word to reverse (since it doesn't end with a space). Reverse the remaining substring and add it to `res`.
5. Add an extra space to `res` to make sure the last word is reversed correctly.
6. Return `res[1:]` to remove the extra space at the beginning.

---

## Key Details

- **Why `res += s[l:r + 1][::-1]`?**
  - We reverse the word (from `l` to `r`) and include the space at the end so that the next word's reversal starts after the space.

- **Handling the last word:**
  - Since the loop ends before the last word is reversed, we handle it separately by reversing `s[l:r + 2]` and adding it to `res`.

---

## Complexity

- **Time Complexity:** O(N), since we iterate through the string once.
- **Space Complexity:** O(N), as we build a new string.

---

## Improvements

Although this solution works, it's slightly messy because of adding an extra space and trimming at the end. An alternative approach could be:
- Split the string by spaces.
- Reverse each word.
- Join them back with spaces.

Example:
```python
def reverseWords(s: str) -> str:
    return " ".join(word[::-1] for word in s.split(" "))
