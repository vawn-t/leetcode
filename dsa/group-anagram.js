/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};
  const result = [];

  for (let i = 0; i < strs.length; i++) {
    const words = strs[i].toLowerCase();

    const key = new Array(26).fill(0);

    for (let j = 0; j < words.length; j++) {
      key[words[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    if (!(key in map)) {
      map[key] = [];
    }

    map[key].push(words);
  }

  for (const [key, value] of Object.entries(map)) {
    result.push(value);
  }

  return result;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));
console.log(
  groupAnagrams([
    'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
  ]),
);
