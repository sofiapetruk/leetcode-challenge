# 345. Reverse Vowels of a String - Solution Explanation

## Approach: Collection and Substitution of Vowels

This solution reverses only the vowels in a string while keeping all other characters in their original positions. The approach is done in two steps: first we collect all vowels, then we substitute them in reverse order.

## Algorithm Logic:

1. We convert the input string into an array of characters to make modifications easier.
2. We define which characters are vowels (a, e, i, o, u - both uppercase and lowercase).
3. We iterate through the string and collect all vowels found in a separate array.
4. We iterate through the original string again:
   - When we find a vowel, we replace it with the last collected vowel that hasn't been used yet.
   - We decrement the index to point to the next vowel to be used in substitution.

## Step-by-Step Example:

Using the example: `s = "hello"`

1. Initialization:

   - `stringArray = ['h', 'e', 'l', 'l', 'o']`
   - `vowels = ['a', 'e', 'i', 'o', 'u']`

2. Collect vowels:

   - We iterate through `stringArray` and identify 'e' and 'o' as vowels
   - `vowelsInString = ['e', 'o']`

3. Substitute vowels in reverse order:

   - `vowelIndex = 1` (last index of `vowelsInString`)
   - First vowel found: 'e' at position 1
     - We replace it with `vowelsInString[1]`, which is 'o'
     - We decrement `vowelIndex` to 0
   - Second vowel found: 'o' at position 4
     - We replace it with `vowelsInString[0]`, which is 'e'
     - We decrement `vowelIndex` to -1

4. Final result:
   - `stringArray = ['h', 'o', 'l', 'l', 'e']`
   - After join: `"holle"`
