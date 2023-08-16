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

function mirrorTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  const fn = (node: TreeNode | null) => {
    if (node === null) {
      return null;
    }

    const left = node.left;
    const right = node.right;
    node.right = fn(left);
    node.left = fn(right);

    return node;
  };

  return fn(root);
}
