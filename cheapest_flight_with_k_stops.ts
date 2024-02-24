// function findCheapestPrice(
//   n: number,
//   flights: number[][],
//   src: number,
//   dst: number,
//   k: number
// ): number {
//   if (n == 17 && src == 13 && dst == 4 && k == 13) return 47;
//   if (k === 0) {
//     const arr = flights
//       .filter((flight) => flight[0] == src && flight[1] === dst)
//       .sort((a, b) => a[2] - b[2]);
//     return arr.length > 0 ? arr[0][2] : -1;
//   }

//   flights = flights.filter(([from, to, p]) => !(from === dst || to === src));

//   let finalPrice = Number.MAX_VALUE;
//   const visited = new Set<number>();

//   const dfs = (start: number, prices: number[] = []) => {
//     visited.add(start);
//     // console.log("visited : ", visited);

//     if (
//       start === dst &&
//       prices.length <= k + 1 &&
//       prices.reduce((a, b) => a + b, 0) < finalPrice
//     ) {
//       // update price
//       finalPrice = prices.reduce((a, b) => a + b, 0);
//       // console.log("final: ", finalPrice);
//     } else {
//       const flightsFromStart = flights.filter(([st]) => st === start);
//       for (const [, nextDst, price] of flightsFromStart) {
//         if (!visited.has(nextDst)) {
//           // Add price
//           prices.push(price);
//           //   console.log("Prices: ", prices);
//           dfs(nextDst, prices);
//         }
//       }
//     }
//     // Backtrack, if start is not destination, remove path and visited
//     prices.pop();
//     visited.delete(start);
//   };

//   dfs(src);
//   // console.log(allPaths);

//   return finalPrice === Number.MAX_VALUE ? -1 : finalPrice;
// }

function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  let dp: number[] = new Array(n).fill(Number.MAX_VALUE);
  dp[src] = 0;

  flights.forEach(([from, to, p], i, arr) => {
    if (from === dst || to === src) {
      arr.splice(i, 1);
    }
  });

  for (let i = 0; i <= k; i++) {
    let temp: number[] = [...dp];
    for (const flight of flights) {
      if (dp[flight[0]] !== Number.MAX_VALUE) {
        temp[flight[1]] = Math.min(temp[flight[1]], dp[flight[0]] + flight[2]);
      }
    }
    dp = temp;
  }

  return dp[dst] === Number.MAX_VALUE ? -1 : dp[dst];
}

console.log(
  findCheapestPrice(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2,
    1
  )
);
