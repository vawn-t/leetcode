/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let i = 0;

  while (i < haystack.length - needle.length + 1) {
    let j = 0;

    while (needle[j] === haystack[i + j]) {
      if (j === needle.length - 1) {
        return i;
      }

      j++;
    }
    i++;
  }
  return -1;
};

var strStr = function (haystack, needle) {
  const needleLength = needle.length;
  let i = 0;
  while (i < haystack.length - needleLength + 1) {
    const s1 = haystack.slice(i, i + needleLength);

    if (s1 === needle) {
      return i;
    }

    i++;
  }

  return -1;
};

console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('leetcode', 'leeto'));
console.log(strStr('a', 'a'));
console.log(strStr('abc', 'c'));
