var removeDuplicates = function (nums) {
  let k = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // 5, nums = [1,1,2,2,3,_]
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); // 7, nums = [0,0,1,1,2,3,3,_,_]
