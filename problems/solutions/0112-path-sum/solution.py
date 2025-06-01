from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if root is None:
            return False

        self.left = root.left
        self.right = root.right
        self.val = root.val

        if not self.left and not self.right:
            return targetSum - self.val == 0

        targetSum -= self.val

        return self.hasPathSum(root.left, targetSum) or self.hasPathSum(root.right, targetSum)

        

        
        