# Explanation – Longest Common Prefix

To solve the problem of finding the longest common prefix among a list of strings, we need to compare characters across all the strings and identify the maximum prefix shared by all of them.

## What Is a Prefix?

A **prefix** is the beginning portion of a string.  
For example, in the word `"flower"`:

- `"f"` is a prefix
- `"flo"` is a prefix
- `"flower"` is a prefix
- `"l"` or `"lower"` are **not** prefixes (they don’t start the word)

## Problem Understanding

Given an array of strings, the goal is to return the longest prefix that all the strings share.  
If no common prefix exists, return an empty string `""`.

## Examples

- `["flower", "flow", "flight"]` → Common prefix is `"fl"`
- `["dog", "racecar", "car"]` → No common prefix → `""`

## Solution Logic

The algorithm uses the following approach:

1. Assume the **first string** is the initial common prefix.
2. Iterate over the remaining strings:
   - While the current string **does not start** with the current prefix:
     - Remove the last character from the prefix.
     - If the prefix becomes empty, return `""`.
3. Return the resulting prefix after all comparisons.

## Why This Works

By iteratively shrinking the prefix until it matches the beginning of each word, we ensure that the final result is the longest common prefix that applies to **all** strings in the list.
