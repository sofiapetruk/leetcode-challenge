// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Solution
function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const findMiddle = (head: ListNode): ListNode => {
    let slow: ListNode = head;
    let fast: ListNode | null = head.next;

    while (fast && fast.next) {
      slow = slow.next!;
      fast = fast.next.next;
    }
    return slow;
  };

  const mergeTwoLists = (
    l1: ListNode | null,
    l2: ListNode | null
  ): ListNode | null => {
    const dummy = new ListNode();
    let tail = dummy;

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

    tail.next = l1 || l2;
    return dummy.next;
  };

  const middle = findMiddle(head);
  const nextToMiddle = middle.next;
  middle.next = null;

  const left = sortList(head);
  const right = sortList(nextToMiddle);

  return mergeTwoLists(left, right);
}
