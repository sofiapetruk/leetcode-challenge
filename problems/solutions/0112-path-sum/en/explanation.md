# 112. Path Sum (Easy)

## Problem
Given the `root` of a binary tree and an integer `targetSum`, return `True` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`. A leaf is a node with no children.

## Examples
1. **Input:**  
root = [5,4,8,11,null,13,4,7,2,null,null,null,1],
targetSum = 22

Copiar
Editar
**Output:** `True`  
**Explanation:** The path 5 → 4 → 11 → 2 sums to 22.  

2. **Input:**  
root = [1,2,3],
targetSum = 5

pgsql
Copiar
Editar
**Output:** `False`  
**Explanation:** No root-to-leaf path sums to 5.  

3. **Input:**  
root = [],
targetSum = 0

Copiar
Editar
**Output:** `False`  
**Explanation:** Empty tree has no paths.

## Approach
1. If `root` is `None`, return `False` (no path).  
2. Store `val = root.val`, `left = root.left`, `right = root.right`.  
3. If both `left` and `right` are `None` (leaf), check if `targetSum - val == 0`.  
4. Otherwise, subtract `val` from `targetSum` and recursively check:  
- `hasPathSum(root.left, targetSum - val)`  
- OR `hasPathSum(root.right, targetSum - val)`.  
5. Return `True` if either subtree returns `True`; else `False`.

## Complexity Analysis
- **Time Complexity:** O(n), where n is the number of nodes; each node is visited once.  
- **Space Complexity:** O(h), where h is the tree height due to recursion stack (worst-case O(n) if unbalanced, O(log n) if balanced).