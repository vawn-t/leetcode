/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const length = nums.length;
  for (let i = length; i < length * 2; i++) {
    nums[i] = nums[i - length];
  }

  return nums;
};

var getConcatenation = function (nums) {
  return [...nums, ...nums];
};

console.log(getConcatenation([1, 2, 1]));
