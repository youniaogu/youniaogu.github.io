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

// function mergeTwoLists(
//   list1: ListNode | null,
//   list2: ListNode | null
// ): ListNode | null {
//   if (list1 === null) {
//     return list2;
//   }
//   if (list2 === null) {
//     return list1;
//   }

//   let i = list1.val < list2.val ? list1 : list2;
//   let n = list1.val < list2.val ? list1.next : list1;
//   let m = list1.val < list2.val ? list2 : list2.next;
//   while (n !== null || m !== null) {
//     if (n === null) {
//       i.next = m;
//       break;
//     }
//     if (m === null) {
//       i.next = n;
//       break;
//     }

//     if (m.val > n.val) {
//       i.next = n;
//       n = n.next;
//       i = i.next;
//     } else {
//       i.next = m;
//       m = m.next;
//       i = i.next;
//     }
//   }

//   return list1.val < list2.val ? list1 : list2;
// }

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  if (list1.val > list2.val) {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  } else {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }
}
