# 148. Sort List - Solution Explanation

## Approach: Merge Sort for Linked Lists

This solution implements the Merge Sort algorithm to sort a linked list. Merge Sort is particularly suitable for linked lists because it can be implemented with O(1) space complexity (not counting the recursive call stack).

## Algorithm Logic:

1. **Base Case**: If the list is empty or has only one node, it's already sorted.

2. **Division**: We split the list into two halves:

   - We find the middle of the list using the "fast and slow runner" technique.
   - We divide the list into two separate lists.

3. **Recursion**: We recursively apply the same sorting process to both halves.

4. **Combination**: We merge the two sorted halves into a single sorted list.

## Helper Functions:

1. **`find_middle(head)`**: Finds the middle node of the list.

   - Uses two pointers: `slow` and `fast`.
   - `fast` moves twice as fast as `slow`.
   - When `fast` reaches the end, `slow` is at the middle.

2. **`merge(l1, l2)`**: Combines two sorted lists into a single sorted list.
   - Uses a `dummy` node to simplify head manipulation.
   - Compares node values and connects them in ascending order.
   - Handles any remaining nodes after one list has been fully traversed.

## Step-by-Step Example:

For the list `4 -> 2 -> 1 -> 3`:

1. **Division**:

   - Middle: node with value 2
   - Left list: `4 -> 2`
   - Right list: `1 -> 3`

2. **Recursion on left list** (`4 -> 2`):

   - Division: Middle is node with value 4
   - Left list: `4`
   - Right list: `2`
   - Recursive sorting: `2 -> 4`

3. **Recursion on right list** (`1 -> 3`):

   - Division: Middle is node with value 1
   - Left list: `1`
   - Right list: `3`
   - Recursive sorting: `1 -> 3`

4. **Final combination**:
   - Merging `2 -> 4` and `1 -> 3`
   - Result: `1 -> 2 -> 3 -> 4`
