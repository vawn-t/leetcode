/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  if (target > nums[r]) return r + 1;
  if (target < nums[l]) return l - 1;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2); // (l + r) / 2

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return l;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 2));
