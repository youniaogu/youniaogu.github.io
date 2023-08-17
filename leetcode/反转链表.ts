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

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let last = null;
  const fn = (node: ListNode | null) => {
    if (node.next === null) {
      last = node;
      return node;
    }

    const prev = fn(node.next);

    prev.next = node;
    node.next = null;

    return prev.next;
  };

  fn(head);

  return last;
}
