/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	const str = x.toString();

	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			return false;
		}
	}

	return true;
};

var isPalindrome = function (x) {
	// Negative numbers are not palindromes
	// Numbers ending with 0 are only palindromes if they are 0
	if (x < 0 || (x % 10 === 0 && x !== 0)) {
		return false;
	}

	// Reverse half of the number
	let reversed = 0;
	while (x > reversed) {
		reversed = reversed * 10 + (x % 10);
		x = Math.floor(x / 10);
	}

	// When the number has odd digits, we need to remove the middle digit
	// For example, for 12321, at the end of the loop we have x = 12, reversed = 123
	return x === reversed || x === Math.floor(reversed / 10);
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
