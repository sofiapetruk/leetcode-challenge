# 21. Merge Two Sorted Lists – Solution Explanation

## Approach: Iterative with Pointers

This solution merges two already sorted linked lists into a new, single sorted list. It employs an **iterative approach with pointers**, building the new list node by node by comparing the values from the two input lists and always appending the smaller value to the end of the resulting list.

---

## Algorithm Logic:

1.  **Dummy Node (Sentinel)**
    * A **"dummy" node (`new_list`)** is created at the beginning. This node doesn't hold an actual list value but serves as a convenient starting point. This eliminates the need for special handling of the first node of the merged list.
    * A `tail` pointer is initialized to point to this dummy node. This `tail` will always track the last node of our combined list, where the next node will be appended.

2.  **Main Iteration (`while list1 and list2`)**
    * The algorithm enters a `while` loop that continues as long as **both** input lists (`list1` and `list2`) still have nodes to process.
    * **Comparison and Appending**:
        * Inside the loop, the values of the current nodes from `list1` and `list2` are compared (`list1.val` vs. `list2.val`).
        * If `list1.val` is smaller (`list1.val < list2.val`):
            * The current node from `list1` is appended to the end of our combined list (`tail.next = list1`).
            * The `list1` pointer then advances to the next node in its original list (`list1 = list1.next`).
        * Otherwise (if `list2.val` is smaller or equal):
            * The current node from `list2` is appended to the end of our combined list (`tail.next = list2`).
            * The `list2` pointer then advances to the next node in its original list (`list2 = list2.next`).
    * **Updating `tail`**: After appending a node, the `tail` pointer is moved to the node that was just added (`tail = tail.next`). This ensures `tail` is always pointing to the last node of the combined list, ready for the next append.

3.  **Appending Remaining Nodes**
    * Once the main `while` loop finishes, it means one of the lists (`list1` or `list2`) has become empty. The other list (if not empty) still contains remaining nodes that need to be added to the combined list.
    * Since the original lists are already sorted, and all previously processed elements are less than or equal to the remaining ones, we can simply append the rest of the non-empty list.
    * `if list1: tail.next = list1`: If `list1` still has nodes, the rest of `list1` is directly appended to the end of the combined list.
    * `elif list2: tail.next = list2`: If `list2` still has nodes (and `list1` is empty), the rest of `list2` is appended.

4.  **Returning the Result**
    * `return new_list.next`: Finally, the method returns `new_list.next`. Since `new_list` is the initial "dummy" node, `new_list.next` is the actual head of the combined and sorted linked list. If both original lists were empty, `new_list.next` will be `None`, which is the correct result.

---

## Step-by-Step Example:

For `list1 = [1,2,4]` and `list2 = [1,3,4]`:

1.  **Initial Setup**
    * `new_list = ListNode()` (value 0, next=None)
    * `tail = new_list`
    * `list1` points to 1
    * `list2` points to 1

2.  **Iteration**

    * **1st Pass:**
        * `list1.val` (1) is **equal** to `list2.val` (1). The condition `list1.val < list2.val` is false.
        * Append `list2` to `tail.next`: `new_list.next` points to `[1 (from list2)]`.
        * `list2` advances to `3`.
        * `tail` advances to the node `[1 (from list2)]`.
        * Combined list: `[1]`

    * **2nd Pass:**
        * `list1.val` (1) is **less than** `list2.val` (3).
        * Append `list1` to `tail.next`: `tail.next` (which points to 1) now points to `[1 (from list1)]`.
        * `list1` advances to `2`.
        * `tail` advances to the node `[1 (from list1)]`.
        * Combined list: `[1, 1]`

    * **3rd Pass:**
        * `list1.val` (2) is **less than** `list2.val` (3).
        * Append `list1` to `tail.next`: `tail.next` (which points to 1) now points to `[2 (from list1)]`.
        * `list1` advances to `4`.
        * `tail` advances to the node `[2 (from list1)]`.
        * Combined list: `[1, 1, 2]`

    * **4th Pass:**
        * `list1.val` (4) is **greater than** `list2.val` (3).
        * Append `list2` to `tail.next`: `tail.next` (which points to 2) now points to `[3 (from list2)]`.
        * `list2` advances to `4`.
        * `tail` advances to the node `[3 (from list2)]`.
        * Combined list: `[1, 1, 2, 3]`

    * **5th Pass:**
        * `list1.val` (4) is **equal** to `list2.val` (4). The condition `list1.val < list2.val` is false.
        * Append `list2` to `tail.next`: `tail.next` (which points to 3) now points to `[4 (from list2)]`.
        * `list2` advances to `None`.
        * `tail` advances to the node `[4 (from list2)]`.
        * Combined list: `[1, 1, 2, 3, 4]`

    * The `while` loop terminates because `list2` is `None`.

3.  **Appending Remaining**
    * `if list1:` (list1 points to 4, so it's True)
    * `tail.next = list1`: The node `[4 (from list2)]` now points to the node `[4 (from list1)]`.
    * `list1` becomes `None`.

4.  **Result**
    * Returns `new_list.next`, which is the list `[1,1,2,3,4,4]`.

---

### Complexity

* **Time Complexity**: $O(m + n)$, where $m$ is the number of nodes in `list1` and $n$ is the number of nodes in `list2`. This is because each node from both lists is visited and appended to the new list exactly once.
* **Space Complexity**: $O(1)$. The solution uses a constant amount of extra space for pointers, regardless of the input list sizes (apart from the space taken by the new list itself, which is the output). The existing nodes are "spliced" together; no new nodes are created.

---