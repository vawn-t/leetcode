/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	if (!s) {
		return 0;
	}

	let subtr = s[0];
	let max = 1;

	for (let i = 0; i < s.length - 1; i++) {
		let j = subtr.length + i;

		while (j < s.length) {
			if (subtr.includes(s[j])) {
				subtr = subtr.substring(1);

				continue;
			}

			subtr += s[j];

			if (subtr.length > max) {
				max++;
			}

			j++;
		}
	}

	return max;
};

var lengthOfLongestSubstring = function (s) {
	let left = 0;
	let maxLength = 0;
	let charSet = new Set();

	for (let right = 0; right < s.length; right++) {
		while (charSet.has(s[right])) {
			charSet.delete(s[left]);
			left++;
		}

		charSet.add(s[right]);
		maxLength = Math.max(maxLength, right - left + 1);
	}

	console.log(maxLength);

	return maxLength;
};

lengthOfLongestSubstring('gaaqfeqlqky');
