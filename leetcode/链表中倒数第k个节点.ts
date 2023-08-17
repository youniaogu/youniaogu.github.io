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

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let node = null;
  const fn = (head: ListNode | null) => {
    if (head === null) {
      return 0;
    }

    const index = fn(head.next) + 1;
    if (k === index) {
      node = head;
    }

    return index;
  };

  fn(head);

  return node;
}
