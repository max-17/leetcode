function earliestSecondToMarkIndices(
  nums: number[],
  changeIndices: number[]
): number {
  const marked = new Set();
  const len = nums.length;
  let s = 1;
  for (const i of changeIndices) {
    s++;
    if (nums[i - 1] === 0 && !marked.has(i - 1)) {
      marked.add(i - 1);
    } else nums[i - 1] -= 1;
    if (nums.length === marked.size) {
      console.log(marked);
      return s;
    }
  }
  console.log(marked);

  return -1;
}

console.log(earliestSecondToMarkIndices([2, 2, 0], [2, 2, 2, 2, 3, 2, 2, 1]));
