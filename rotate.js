var rotate = function (nums, k) {
  const clone = [...nums];

  let i = 0;

  const l = nums.length;

  while (i < l) {
    let a = 0;
    if (l - 1 <= k + i) {
      a = l - 1;
    }
    nums[i] = clone[l - k + i - a];
    i++;
  }

  console.log(nums);
};

rotate([-1, -100, 3, 99], 2);
