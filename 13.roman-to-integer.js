/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const map = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};

	let integer = 0;

	for (let i = s.length - 1; i >= 0; i--) {
		const previousValue = map[s[i + 1]] || 0;
		const currentValue = map[s[i]];

		if (currentValue < previousValue) {
			integer -= currentValue;
		} else {
			integer += currentValue;
		}
	}

	return integer;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
