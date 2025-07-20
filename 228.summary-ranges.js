/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const res = [];

  let i = 0;
  while (i < nums.length) {
    let j = i;

    // Tìm đoạn liên tiếp từ i đến j
    while (j + 1 < nums.length && nums[j + 1] === nums[j] + 1) {
      j++;
    }

    // Nếu chỉ có 1 số thì chỉ push số đó
    if (i === j) {
      res.push(nums[i].toString());
    } else {
      res.push(nums[i] + '->' + nums[j]);
    }

    // Di chuyển đến phần tử tiếp theo sau j
    i = j + 1;
  }

  return res;
};
