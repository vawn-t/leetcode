/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	const set = new Set();

	while (n > 1) {
		if (set.has(n)) return false;
		set.add(n);
		n = getNext(n);
	}

	return true;
};

var getNext = function (n) {
	let total = 0;

	while (n > 0) {
		const digit = n % 10;
		total = total + Math.pow(digit, 2);
		n = Math.floor(n / 10);
	}

	return total;
};

console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
console.log(isHappy(1)); // true
