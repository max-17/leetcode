function isPowerOfTwo(n: number): boolean {
  const logN = Math.log2(n);
  return n > 0 ? logN === Math.floor(logN) : false;
}

// for (let i=n; i>2; i/=2){
//     if ((i/2)%2>0) {
//     return false
//     }
// };
// return n<=0? false: true}

// if(n>1 && n%2===0){
// return isPowerOfTwo(n/2)
// }
//  return (n===1)
// }
