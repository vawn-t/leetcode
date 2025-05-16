/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	const map = {};

	for (let i = 0; i < ransomNote.length; i++) {
		if (ransomNote[i] in map) {
			map[ransomNote[i]] = ++map[ransomNote[i]];
		} else {
			map[ransomNote[i]] = 1;
		}
	}

	for (let j = 0; j < magazine.length; j++) {
		if ([magazine[j]] in map) {
			map[magazine[j]] = --map[magazine[j]];
			if (map[magazine[j]] === 0) delete map[magazine[j]];
		}
	}

	return !Object.keys(map).length;
};

console.info(canConstruct('aa', 'aab'));
