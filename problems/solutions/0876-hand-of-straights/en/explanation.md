# 876. Middle of the Linked List (Easy)

## Problem
Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.

## Examples
1. **Input:** `head = [1,2,3,4,5]`  
   **Output:** `[3,4,5]`  

2. **Input:** `head = [1,2,3,4,5,6]`  
   **Output:** `[4,5,6]`  

## Approach
Use two pointers, fast and slow:
1. Initialize `fast = head` and `slow = head`.  
2. While `fast` and `fast.next` are not null:  
   - `fast = fast.next.next`  
   - `slow = slow.next`  
3. When the loop ends, `slow` points to the middle node. Return `slow`.

## Complexity Analysis
- **Time Complexity:** O(n), where n is the number of nodes (single pass).  
- **Space Complexity:** O(1), only two pointers used.
