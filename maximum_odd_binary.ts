function maximumOddBinaryNumber(s: string): string {
  let result: string = "";
  for (const char of s) {
    if (char === "0") result = result + char;
    else result = char + result;
  }

  return result.slice(1) + result.slice(0, 1);
}

console.log(maximumOddBinaryNumber("010111010101001"));

//"0101"
