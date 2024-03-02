// function sortedSquares(nums: number[]): number[] {
//   nums.sort((a, b) => Math.abs(a) - Math.abs(b));

//   return nums.map((num) => Math.pow(num, 2));
// }

// function sortedSquares(nums: number[]): number[] {
//   if (nums.length === 0) {
//     return [];
//   }

//   if (Math.abs(nums[0]) > Math.abs(nums[nums.length - 1])) {
//     return [...sortedSquares(nums.slice(1)), nums[0] ** 2];
//   } else {
//     return [...sortedSquares(nums.slice(0, -1)), nums[nums.length - 1] ** 2];
//   }
// }

// function sortedSquares(nums: number[]): number[] {
//   const result: number[] = new Array(nums.length).fill(0);

//   let left = 0;
//   let right = nums.length - 1;

//   return result
//     .map(() =>
//       nums[right] ** 2 > nums[left] ** 2
//         ? nums[right--] ** 2
//         : nums[left++] ** 2
//     )
//     .reverse();
// }

function sortedSquares(nums: number[]): number[] {
  nums.forEach((num, i, array) => {
    array[i] = num * num;
  });
  const result: number[] = Array(nums.length);

  let left = 0;
  let right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = nums[right] > nums[left] ? nums[right--] : nums[left++];
  }

  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
