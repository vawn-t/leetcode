/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const mapS = {};
  const mapT = {};

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in mapS)) {
      mapS[s[i]] = i;
    }

    if (!(t[i] in mapT)) {
      mapT[t[i]] = i;
    }

    if (mapS[s[i]] !== mapT[t[i]]) {
      return false;
    }
  }

  return true;
};

console.log(isIsomorphic('abc', 'dad')); // false
console.log(isIsomorphic('paper', 'title')); // true
console.log(isIsomorphic('badc', 'baba')); // false
