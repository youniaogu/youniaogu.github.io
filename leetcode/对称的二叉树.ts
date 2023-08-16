/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

// function isSymmetric(root: TreeNode | null): boolean {
//   if (root === null) {
//     return true;
//   }

//   const leftFirst = (root: TreeNode | null, deep = 1) => {
//     if (root === null) {
//       return ["null" + "#" + deep];
//     }
//     return [
//       ...leftFirst(root.left, deep + 1),
//       root.val + "#" + deep,
//       ...leftFirst(root.right, deep + 1),
//     ];
//   };
//   const rightFirst = (root: TreeNode | null, deep = 1) => {
//     if (root === null) {
//       return ["null" + "#" + deep];
//     }
//     return [
//       ...rightFirst(root.right, deep + 1),
//       root.val + "#" + deep,
//       ...rightFirst(root.left, deep + 1),
//     ];
//   };

//   return leftFirst(root.left).join("") === rightFirst(root.right).join("");
// }

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  const fn = (left: TreeNode | null, right: TreeNode | null) => {
    if (left === null && right !== null) {
      return false;
    }
    if (right === null && left !== null) {
      return false;
    }
    if (left === null && right === null) {
      return true;
    }

    return (
      left.val === right.val &&
      fn(left.left, right.right) &&
      fn(left.right, right.left)
    );
  };

  return fn(root.left, root.right);
}
