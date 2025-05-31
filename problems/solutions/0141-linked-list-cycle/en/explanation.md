# 141. Linked List Cycle (Easy)

## Problem

Given the `head` of a singly linked list, determine if the list has a cycle in it. Return `True` if there is a cycle; otherwise, return `False`.

## Examples

1. **Input:** `head = [3,2,0,-4]`, where the tail connects to the node at index `1`  
   **Output:** `True`

2. **Input:** `head = [1,2]`, where the tail connects to the node at index `0`  
   **Output:** `True`

3. **Input:** `head = [1]`, with no cycle  
   **Output:** `False`

## Approach

Use two pointers (`slow` and `fast`) to detect a cycle (Floyd’s Tortoise and Hare algorithm):

1. If `head` is `None` or `head.next` is `None`, immediately return `False` (no cycle possible).
2. Initialize:
   - `slow = head`
   - `fast = head.next`
3. Loop while both `fast` and `fast.next` are not `None`:
   - If `slow` is equal to `fast`, a cycle exists; return `True`.
   - Advance `slow` by one step: `slow = slow.next`
   - Advance `fast` by two steps: `fast = fast.next.next`
4. If the loop terminates, `fast` has reached the end; return `False` (no cycle).

## Complexity Analysis

- **Time Complexity:** O(n), where n is the number of nodes; each pointer moves at most n steps.
- **Space Complexity:** O(1), only two pointers are used.
