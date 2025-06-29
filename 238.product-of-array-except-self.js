function productExceptSelf(nums) {
  const n = nums.length;
  const output = new Array(n).fill(1);

  // Step 1: Tính prefix product
  for (let i = 1; i < n; i++) {
    output[i] = output[i - 1] * nums[i - 1];
  }

  // Step 2: Nhân với suffix product từ phải sang trái
  let R = 1; // R = right product
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= R;
    R *= nums[i];
  }

  return output;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
