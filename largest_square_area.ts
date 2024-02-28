function largestSquareArea(
  bottomLeft: number[][],
  topRight: number[][]
): number {
  const arr = [];
  for (let i = 0; i < bottomLeft.length; i++) {
    for (let y = 0; y < bottomLeft.length; y++) {
      if (i === y) continue;
      const a =
        Math.min(topRight[i][1], topRight[y][1]) -
        Math.max(bottomLeft[i][1], bottomLeft[y][1]);
      const b =
        Math.min(topRight[i][0], topRight[y][0]) -
        Math.max(bottomLeft[i][0], bottomLeft[y][0]);

      console.log(a, b);

      const s = Math.min(Math.max(0, a), Math.max(0, b));
      arr.push(s ** 2);
    }
  }

  console.log(arr);

  return Math.max(...arr);
}

console.log(
  largestSquareArea(
    [
      [1, 1],
      [2, 2],
      [3, 1],
    ],
    [
      [3, 3],
      [4, 4],
      [6, 6],
    ]
  )
);
