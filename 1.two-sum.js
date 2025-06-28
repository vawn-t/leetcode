/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    let sum = a;
    let b = target - sum;
    console.log(map[a], map[b]);

    if (b in map && i !== map[b]) {
      result.push(i, map[b]);
      break;
    }
  }

  return result;
};

var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if the complement exists in our map
    if (complement in map) {
      return [map[complement], i];
    }

    // Add current number to map
    map[nums[i]] = i;
  }

  return []; // No solution found
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
