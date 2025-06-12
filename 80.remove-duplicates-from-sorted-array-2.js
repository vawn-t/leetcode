/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let longest = 1;

	let i = 0;
	let j = i + 1;

	let isDuplicate = false;

	while (j < nums.length) {
		if (nums[i] === nums[j] && !isDuplicate) {
			isDuplicate = true;
			longest++;
		} else if (nums[i] !== nums[j]) {
			longest++;
			isDuplicate = false;
			i = j;
		}
		j++;
	}

	return longest;
};

var removeDuplicates = function (nums) {
	let longest = 1;

	let i = 0;
	let j = i + 1;

	let isDuplicate = false;

	while (j < nums.length) {
		if (nums[i] !== nums[j]) {
            i++ 
        } else 
	}

	return longest;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
