function isPossibleToSplit(nums: number[]): boolean {
  const numsSet = new Set(nums);

  for (const n of numsSet) {
    if (nums.filter((num) => num == n).length > 2) return false;
  }
  return true;
}
