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

function kthLargest(root: TreeNode | null, k: number): number {
  let ary = [];

  const fn = (node: TreeNode | null) => {
    if (node === null) {
      return;
    }
    ary.push(node.val);
    fn(node.left);
    fn(node.right);
  };

  fn(root);

  return ary.sort((a, b) => b - a)[k - 1];
}
