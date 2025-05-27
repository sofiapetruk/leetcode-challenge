## Solution Explanation

We use the **sliding window** technique to track the substring where each character occurs at most twice.

- We maintain two pointers, `l` and `r`, representing the left and right boundaries of the window.
- We use a `counter` dictionary to keep track of the frequency of each character in the window.
- We expand the window by moving `r` to the right and adding the current character to the `counter`.
- If any character appears **three times**, we shrink the window from the left (`l`) until that character appears at most twice.
- During each expansion, we update `_max` to store the length of the current valid window.
- Finally, we return `_max`.

This ensures we always have the longest substring where no character appears more than twice.
