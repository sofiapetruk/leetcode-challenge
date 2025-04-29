# Explanation – Roman to Integer

To solve the problem of converting a Roman numeral to an integer, we must understand the Roman numeral system and apply the correct logic based on its rules.

## Roman Numeral Values

Roman numerals are made up of letters with corresponding integer values:

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

## How Roman Numerals Work

Normally, values are **added from left to right**.  
For example:

- `"III"` = 1 + 1 + 1 = **3**
- `"XII"` = 10 + 1 + 1 = **12**
- `"XXVII"` = 10 + 10 + 5 + 1 + 1 = **27**

However, if a smaller value appears **before** a larger one, we **subtract** it.  
This rule applies to:

- `I` before `V` (5) or `X` (10) → 4 and 9
- `X` before `L` (50) or `C` (100) → 40 and 90
- `C` before `D` (500) or `M` (1000) → 400 and 900

For example:

- `"IV"` = 5 - 1 = **4**
- `"IX"` = 10 - 1 = **9**
- `"XL"` = 50 - 10 = **40**
- `"MCMXCIV"` = 1000 + (1000 - 100) + (100 - 10) + (5 - 1) = **1994**

## Solution Logic

The algorithm uses the following approach:

1. Map all Roman symbols to their integer values.
2. Loop through the string comparing each character with the next one:
   - If the current value is **less than** the next, subtract it.
   - Otherwise, add it.
3. Add the value of the **last character** (it’s never subtracted).
