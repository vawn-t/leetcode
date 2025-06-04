/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	const arr = s.trim().split(' ');

	return arr[arr.length - 1].length;
};

var lengthOfLastWord = function (s) {
	s = s.trim();
	let length = 0;

	// Start from the end and count until we hit a space
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === ' ') {
			break;
		}
		length++;
	}

	return length;
};

console.log(lengthOfLastWord('   fly me   to   the moon  '));
