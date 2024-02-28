/**
 * TreeNode is defined in same_tree.ts/{@link TreeNode}
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;
  function maxPath(root: TreeNode | null) {
    if (root) {
      const path = maxDepth(root.left) + maxDepth(root.right);
      if (path > diameter) diameter = path;
      maxDepth(root.left);
      maxDepth(root.right);
    }
  }
  function maxDepth(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  }
  maxPath(root);

  return diameter;
}
