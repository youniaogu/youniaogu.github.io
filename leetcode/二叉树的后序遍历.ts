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

// function postorderTraversal(root: TreeNode | null): number[] {
//   const fn = (node: TreeNode | null) => {
//     if (node === null) {
//       return [];
//     }

//     return [...fn(node.left), ...fn(node.right), node.val];
//   };

//   return fn(root);
// }

function postorderTraversal(root: TreeNode | null): number[] {
  const stack: (TreeNode | null | number)[] = [root];
  const result: number[] = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (node === null) {
      continue;
    }
    if (typeof node === "number") {
      result.push(node);
      continue;
    }

    stack.push(node.val);
    stack.push(node.right);
    stack.push(node.left);
  }

  return result;
}
