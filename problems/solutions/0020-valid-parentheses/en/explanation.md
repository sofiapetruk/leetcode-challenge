# 20. Valid Parentheses - Solution Explanation

## Approach: Using Stack Data Structure

This solution uses a stack data structure to verify if a string containing only parentheses, brackets, and braces is valid, meaning each opening character has its corresponding closing character in the correct order.

## Algorithm Logic:

1. We create an empty stack to store the opening characters.
2. We define a map that associates each closing character with its corresponding opening character.
3. We iterate through each character in the string:
   - If it's an opening character ('(', '{', '['), we push it onto the stack.
   - If it's a closing character (')', '}', ']'):
     - We check if the stack is empty (no pending opening characters).
     - We pop the last opening character and check if it corresponds to the current closing character.
     - If either of these checks fails, the string is not valid.
4. At the end, the string is only valid if the stack is empty (all opening characters have been closed).

## Step-by-Step Example:

Using the example: `s = "({[]})"`.

1. Initialization:

   - `stack = []`
   - `bracketMap = { ")": "(", "}": "{", "]": "[" }`

2. Iteration:

   - `char = '('`: It's an opening character, push to stack. `stack = ['(']`
   - `char = '{'`: It's an opening character, push to stack. `stack = ['(', '{']`
   - `char = '['`: It's an opening character, push to stack. `stack = ['(', '{', '[']`
   - `char = ']'`: It's a closing character:
     - Pop the last character: `'['`
     - Check if `bracketMap[']'] === '['` (true)
     - `stack = ['(', '{']`
   - `char = '}'`: It's a closing character:
     - Pop the last character: `'{'`
     - Check if `bracketMap['}'] === '{'` (true)
     - `stack = ['(']`
   - `char = ')'`: It's a closing character:
     - Pop the last character: `'('`
     - Check if `bracketMap[')'] === '('` (true)
     - `stack = []`

3. At the end, we check if `stack.length === 0` (true), so the string is valid.
