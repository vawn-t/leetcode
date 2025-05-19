/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	const startTime = performance.now();

	const mapS = {};
	const mapT = {};

	// 1. Return early if length of them are not match
	if (s.length !== t.length) {
		return false;
	}

	// 2. Mapping count the chars occur times
	for (let i = 0; i < s.length; i++) {
		if (!(s[i] in mapS)) {
			mapS[s[i]] = 0;
		}

		if (!(t[i] in mapT)) {
			mapT[t[i]] = 0;
		}

		mapS[s[i]]++;
		mapT[t[i]]++;
	}

	// 3. Check if any chars are not match
	for (const [key, value] of Object.entries(mapS)) {
		if (value !== mapT[key]) {
			return false;
		}
	}

	const endTime = performance.now();

	console.log(`Took ${endTime - startTime} milliseconds`);

	return true;
};

var isAnagramCharCode = function (s, t) {
	const startTime = performance.now();

	if (s.length !== t.length) {
		return false;
	}

	const keyS = new Array(26).fill(0);
	const keyT = new Array(26).fill(0);

	for (let i = 0; i < s.length; i++) {
		keyS[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
		keyT[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
	}

	const result = keyS.toString() === keyT.toString();

	const endTime = performance.now();

	console.log(`Took ${endTime - startTime} milliseconds`);

	return result;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagramCharCode('anagram', 'nagaram')); // true
