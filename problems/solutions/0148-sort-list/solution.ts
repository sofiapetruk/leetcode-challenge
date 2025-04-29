class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function sortList(head: ListNode | null): ListNode | null {
  // Base case: if the list is empty or has only one node, it's already sorted
  if (!head || !head.next) return head;

  // Helper function to find the middle node of the linked list
  const findMiddle = (head: ListNode): ListNode => {
    let slow: ListNode = head;
    let fast: ListNode | null = head.next;

    // Move 'fast' two steps and 'slow' one step to find the middle
    while (fast && fast.next) {
      slow = slow.next!;
      fast = fast.next.next;
    }
    return slow; // 'slow' will be at the middle
  };

  // Helper function to merge two sorted linked lists
  const mergeTwoLists = (
    l1: ListNode | null,
    l2: ListNode | null
  ): ListNode | null => {
    const dummy = new ListNode(); // Dummy node to simplify merging
    let tail = dummy;

    // Merge nodes in sorted order
    while (l1 && l2) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }

    // Append any remaining nodes
    tail.next = l1 || l2;
    return dummy.next; // Return the head of the merged list
  };

  // Split the list into two halves
  const middle = findMiddle(head);
  const nextToMiddle = middle.next;
  middle.next = null; // Break the list

  // Recursively sort both halves
  const left = sortList(head);
  const right = sortList(nextToMiddle);

  // Merge the sorted halves
  return mergeTwoLists(left, right);
}
