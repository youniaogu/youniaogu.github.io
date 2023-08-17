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

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
  if (node === null) {
    return null;
  }

  const next = node.next;
  node.val = next.val;
  if (next.next !== null) {
    node.next = next.next;
  } else {
    node.next = null;
  }
}
