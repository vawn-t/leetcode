/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = nums[0];
  let total = 0;

  for (const n of nums) {
    if (total < 0) {
      total = 0;
    }

    total += n;

    res = Math.max(res, total);
  }

  return res;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
