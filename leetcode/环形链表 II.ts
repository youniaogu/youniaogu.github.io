/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

function detectCycle(head: ListNode | null): ListNode | null {
  const map = new Map();

  while (true) {
    if (head === null) {
      break;
    }

    if (map.has(head)) {
      return head;
    }

    map.set(head, true);
    head = head.next;
  }

  return null;
}
