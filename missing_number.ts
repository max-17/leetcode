// function missingNumber(nums: number[]): number {
//   nums.sort((a, b) => a - b);

//   if (nums[0] !== 0) {
//     return 0;
//   }

//   function devide(nums: number[], start: number): number {
//     if (nums.length === 1) {
//       return nums[0] + 1;
//     }
//     const halfLen = Math.floor(nums.length / 2);
//     const half_2 = nums.slice(halfLen);
//     // console.log(" start: ", start, " halfLen: ", halfLen);
//     // console.log("1st half : ", nums.slice(0, halfLen));
//     // console.log("2nd half : ", half_2);

//     if (half_2[0] === start + halfLen) {
//       return devide(half_2, start + halfLen);
//     } else {
//       // console.log(" 1st half : ", nums.slice(0, halfLen));
//       return devide(nums.slice(0, halfLen), start);
//     }
//   }
//   return devide(nums, 0);
// }

function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  if (nums[nums.length - 1] !== nums.length) {
    return nums.length;
  }

  let start = 0;
  while (nums.length !== 1) {
    const halfLen = Math.floor(nums.length / 2);
    if (nums[halfLen - 1] === start + halfLen - 1) {
      // delete
      nums.splice(0, halfLen);
      start += halfLen;
    } else {
      nums.splice(halfLen);
    }
    console.log(nums);
    console.log(start);
  }

  return start;
}

console.log(missingNumber([0, 6, 9, 2, 3, 4, 7, 5, 8])); // 0 1 2 3 4 5 6 7 9
