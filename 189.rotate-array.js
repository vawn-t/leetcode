/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = (nums, k) => {
	let i = 0;
	const cloned = [...nums];

	const l = nums.length;

	const h = k % l;

	while (i < l) {
		cloned[(i + h) % l] = nums[i];
		i++;
	}

	nums = [...cloned];
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
