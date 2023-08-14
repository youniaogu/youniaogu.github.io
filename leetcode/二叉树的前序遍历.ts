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

// function preorderTraversal(root: TreeNode | null): number[] {
//   if (root === null) {
//     return [];
//   }

//   const fn = (node: TreeNode | null) => {
//     if (node === null) {
//       return [];
//     }
//     return [node.val, ...fn(node.left), ...fn(node.right)];
//   };

//   return fn(root);
// }

function preorderTraversal(root: TreeNode | null): number[] {
  const stack = [root];
  const result: number[] = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (node === null) {
      continue;
    }

    result.push(node.val);
    stack.push(node.right);
    stack.push(node.left);
  }

  return result;
}
