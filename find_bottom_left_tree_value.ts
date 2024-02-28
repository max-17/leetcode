/**
 * TreeNode is defined in same_tree.js/{@link TreeNode}
 */

function findBottomLeftValue(root: TreeNode | null): number {
  let maxDepth = 0;
  let left = root?.left?.val || root?.val;
  function bottomLeft(root: TreeNode | null, depth = 0) {
    if (!root) {
      return;
    }
    if (depth > maxDepth) {
      maxDepth = depth;
      if (root.left) {
        left = root.left.val;
      }
    }
    bottomLeft(root.left, depth + 1);
    bottomLeft(root.right, depth + 1);
  }
  bottomLeft(root);
  return left || 0;
}
