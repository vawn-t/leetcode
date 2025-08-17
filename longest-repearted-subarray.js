var longestRepeatedSubarray = function (nums) {
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

var longestRepeatedSubarray = function (nums) {
  if (nums.length === 0) return 0;

  let left = 0;
  let max = 1;

  for (let right = 1; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      left = right;
    }
    max = Math.max(max, right - left + 1);
  }

  return max;
};

console.log(longestRepeatedSubarray([0, 0, 1, 1, 1, 1, 2, 2])); // 4
console.log(longestRepeatedSubarray([1, 2, 3, 4])); // 1
console.log(longestRepeatedSubarray([])); // 0
console.log(longestRepeatedSubarray([5])); // 1
