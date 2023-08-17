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

function reversePrint(head: ListNode | null): number[] {
  const result: number[] = [];

  while (head !== null) {
    result.unshift(head.val);
    head = head.next;
  }

  return result;
}
