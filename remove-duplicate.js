var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;

  if (nums.length < 2) return nums.length;

  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      nums[i + 1] = nums[j];
      nums[j] = '_';
      i++;
    }

    j++;
  }

  return i + 1;
};
