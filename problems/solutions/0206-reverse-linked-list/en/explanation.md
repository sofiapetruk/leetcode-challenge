## Problem
Given the `head` of a singly linked list, reverse the list and return the new head of the reversed list.

## Examples
1. **Input:** `head = [1,2,3,4,5]`  
   **Output:** `[5,4,3,2,1]`

2. **Input:** `head = [1,2]`  
   **Output:** `[2,1]`

3. **Input:** `head = []`  
   **Output:** `[]`

## Approach
We use three pointers to reverse the list in-place:

1. Initialize:
   - `prev = None`
   - `curr = head`
2. Iterate while `curr` is not `None`:
   - `nextTemp = curr.next`      # Save next node
   - `curr.next = prev`          # Reverse pointer
   - `prev = curr`               # Move prev forward
   - `curr = nextTemp`           # Move curr forward
3. When the loop ends, `prev` points to the new head of the reversed list. Return `prev`.

## Step-by-Step Example
For the list `1 → 2 → 3`:

```plaintext
Initial: prev=None, curr=Node(1)

Iteration 1:
 nextTemp = Node(2)
 curr.next = None        # 1 → None
 prev = Node(1)
 curr = Node(2)

Iteration 2:
 nextTemp = Node(3)
 curr.next = Node(1)     # 2 → 1 → None
 prev = Node(2)
 curr = Node(3)

Iteration 3:
 nextTemp = None
 curr.next = Node(2)     # 3 → 2 → 1 → None
 prev = Node(3)
 curr = None

Loop ends, return prev (Node(3)), list is now 3 → 2 → 1
