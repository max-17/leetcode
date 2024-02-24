const start = performance.now();

function generate(numRows: number): number[][] {
  const result: number[][] = [[1]];
  for (let i = 0; i < numRows - 1; i++) {
    const row: number[] = [1];

    for (let y = 0; y < i; y++) {
      row.push(result[i][y] + result[i][y + 1]);
    }
    row.push(1);
    result.push(row);
  }
  return result;
}

generate(1000);
console.log("time 2: ", performance.now() - start);
console.log(generate(5));
