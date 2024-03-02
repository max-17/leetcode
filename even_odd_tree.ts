function isEvenOddTree(root: TreeNode | null): boolean {
  const result: number[] = [];
  const isEven = (num: number): boolean => !(num % 2);
  function dfs(root: TreeNode | null, level: number = 0): boolean {
    if (!root) return true;

    if (isEven(root.val) === isEven(level)) return false;

    if (!result[level]) {
      result.push(root.val);
    } else {
      const condition = isEven(level)
        ? result[level] < root.val
        : result[level] > root.val;
      if (condition) {
        result[level] = root.val;
      } else return false;
    }

    return dfs(root.left, level + 1) && dfs(root.right, level + 1);
  }
  return dfs(root);
}
// function isEvenOddTree(root: TreeNode | null): boolean {
//   if (!root) return false;

//   const isEven = (num: number): boolean => !(num % 2);

//   const queue = [{ node: root, level: 0 }];
//   const result = [];

//   while (queue.length) {
//     const { node, level } = queue[0];

//     queue.shift();

//     if (isEven(node.val) === isEven(level)) return false;

//     if (!result[level]) {
//       result.push(node.val);
//     } else {
//       const condition = isEven(level)
//         ? result[level] < node.val
//         : result[level] > node.val;
//       if (condition) {
//         result[level] = node.val;
//       } else return false;
//     }

//     if (node.left) queue.push({ node: node.left, level: level + 1 });
//     if (node.right) queue.push({ node: node.right, level: level + 1 });
//   }

//   return true;
// }
