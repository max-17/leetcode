function rangeBitwiseAnd(left: number, right: number): number {
  if (Number(left).toString(2).length !== Number(right).toString(2).length) {
    return 0;
  }
  let result = left;
  for (let i = right; i > left; i--) {
    result = result & i;
  }
  return result;
}

console.log(rangeBitwiseAnd(5, 1312434345));
