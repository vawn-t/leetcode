/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let longest = 0;
  const set = new Set(nums);

  for (const num of set) {
    if (!set.has(num - 1)) {
      let length = 1;

      while (set.has(num + length)) {
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
