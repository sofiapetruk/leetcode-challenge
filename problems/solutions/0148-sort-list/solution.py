from typing import Optional

class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Base case: if the list is empty or has only one node, it's already sorted
        if not head or not head.next:
            return head

        # Helper function to find the middle of the linked list
        def find_middle(head: ListNode) -> ListNode:
            slow = head
            fast = head.next

            # Move 'fast' two steps and 'slow' one step to find the middle
            while fast and fast.next:
                slow = slow.next
                fast = fast.next.next
            return slow  # 'slow' will be at the middle

        # Helper function to merge two sorted linked lists
        def merge(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
            dummy = ListNode()
            tail = dummy

            # Merge nodes in sorted order
            while l1 and l2:
                if l1.val < l2.val:
                    tail.next = l1
                    l1 = l1.next
                else:
                    tail.next = l2
                    l2 = l2.next
                tail = tail.next

            # Append any remaining nodes
            tail.next = l1 or l2
            return dummy.next  # Return the head of the merged list

        # Split the list into two halves
        middle = find_middle(head)
        right_head = middle.next
        middle.next = None  # Break the list into two halves

        # Recursively sort both halves
        left = self.sortList(head)
        right = self.sortList(right_head)

        # Merge the sorted halves
        return merge(left, right)
