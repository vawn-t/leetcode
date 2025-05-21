/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    if (!map.has(key)) {
      map.set(key, []);
    }

    const value = map.get(key);

    map.set(key, [...value, i]);
  }

  for (let a = 0; a < nums.length; a++) {
    const values = map.get(nums[a]);

    if (values.length < 2) {
      continue;
    }

    let i = 0;
    let j = i + 1;
    while (j < values.length) {
      if (Math.abs(values[i] - values[j]) <= k) {
        return true;
      }
      i++;
      j++;
    }
  }

  return false;
};

var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3, 1], 2)); // false
