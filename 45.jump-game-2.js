/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length <= 1) return 0;

  let farthest = nums[0];
  let currentEnd = 0;
  let jump = 0;

  for (let i = 0; i <= nums.length - 1; i++) {
    farthest = Math.max(farthest, nums[i] + i);

    if (i === currentEnd) {
      currentEnd = farthest;
      jump++;
    }

    if (currentEnd >= nums.length - 1) {
      return jump;
    }
  }

  return 0;
};
