/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const mapA = new Map();
  const mapB = new Map();

  const array = s.split(' ');

  const length = Math.max(pattern.length, array.length);

  for (let i = 0; i < length; i++) {
    if (!mapA.has(pattern[i])) {
      mapA.set(pattern[i], i);
    }

    if (!mapB.has(array[i])) {
      mapB.set(array[i], i);
    }

    if (!pattern[i] || !array[i]) {
      return false;
    }

    if (mapA.get(pattern[i]) !== mapB.get(array[i])) {
      return false;
    }
  }

  return true;
};

var wordPattern = function (pattern, s) {
  const words = s.split(' ');

  // Early return if lengths don't match
  if (pattern.length !== words.length) {
    return false;
  }

  const patternToWord = new Map();
  const wordToPattern = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    // Check for bijection (one-to-one mapping)
    if (!patternToWord.has(char) && !wordToPattern.has(word)) {
      patternToWord.set(char, word);
      wordToPattern.set(word, char);
    } else if (
      patternToWord.get(char) !== word ||
      wordToPattern.get(word) !== char
    ) {
      return false;
    }
  }

  return true;
};

console.log(wordPattern('jquery', 'jquery')); // false
console.log(wordPattern('aaa', 'aa aa aa aa')); // false
console.log(wordPattern('he', 'unit')); // false
console.log(wordPattern('abba', 'dog cat cat dog')); // true
console.log(wordPattern('abba', 'dog cat cat fish')); // false
console.log(wordPattern('abba', 'dog constructor constructor dog')); // true
