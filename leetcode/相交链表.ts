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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === null || headB === null) {
    return null;
  }

  const map = new Map();
  let i = headA;
  let l = headB;
  while (i !== null || l !== null) {
    if (i !== null) {
      if (map.has(i)) {
        return i;
      } else {
        map.set(i, true);
        i = i.next;
      }
    }

    if (l !== null) {
      if (map.has(l)) {
        return l;
      } else {
        map.set(l, true);
        l = l.next;
      }
    }
  }

  return null;
}
