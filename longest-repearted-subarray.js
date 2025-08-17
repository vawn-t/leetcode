const longestRepeatedSubarray = (nums) => {
  if (nums.length === 0) return 0;

  let maxLength = 1;
  let currentLength = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 1;
    }
  }

  return maxLength;
};

console.log(longestRepeatedSubarray([0, 0, 1, 1, 1, 1, 2, 2])); // 4
console.log(longestRepeatedSubarray([1, 2, 3, 4])); // 1
console.log(longestRepeatedSubarray([])); // 0
console.log(longestRepeatedSubarray([5])); // 1
