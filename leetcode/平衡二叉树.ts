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

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  const deep = (node: TreeNode | null) => {
    if (node === null) {
      return 0;
    }

    return 1 + Math.max(deep(node.left), deep(node.right));
  };

  const fn = (node: TreeNode | null) => {
    if (node === null) {
      return true;
    }

    if (!fn(node.left)) {
      return false;
    }
    if (!fn(node.right)) {
      return false;
    }

    return Math.abs(deep(node.left) - deep(node.right)) <= 1;
  };

  return fn(root);
}
