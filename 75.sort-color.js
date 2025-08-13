var sortColors = function (nums) {
  const map = { 0: 0, 1: 0, 2: 0 };

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]]++;
  }

  let idx = 0;
  for (let color = 0; color < 3; color++) {
    let freq = map[color];
    for (let j = 0; j < freq; j++) {
      nums[idx] = color;
      idx++;
    }
  }

  console.log(nums);
};

sortColors([2, 0, 2, 1, 1, 0]);
