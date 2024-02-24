const startTime = performance.now();
function factorial(n: number): number {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function pascalsTriangle(n: number): number[] {
  const row: number[] = [];
  for (let r = 0; r <= n; r++) {
    row.push(factorial(n) / (factorial(r) * factorial(n - r)));
  }
  return row;
}

console.log(pascalsTriangle(5));

console.log("time : ", performance.now() - startTime);
