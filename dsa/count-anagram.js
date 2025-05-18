// You are developing a document processing system that needs to analyze text structure. Given a string that represents a document, implement a function that counts the frequency of each word but with a special requirement: words that are anagrams of each other should be counted together. For example, 'listen' and 'silent' are anagrams and should be counted as the same word. The function should return a map/dictionary where the key is the lexicographically smallest anagram and the value is the total count of all its anagrams in the document. Words in the document are separated by spaces, and you should ignore case treat uppercase and lowercase letters as the same). Punctuation marks should be considered as part of the words they are attached to.

function countAnagramFrequencies(document) {
  const words = document.toLowerCase().split(/\s+/);
  const anagramMap = new Map(); // canonical => count
  const canonicalToActual = new Map(); // canonical => lex smallest word

  for (const word of words) {
    const canonical = [...word].sort().join('');

    if (!canonicalToActual.has(canonical)) {
      canonicalToActual.set(canonical, word);
    } else {
      const existing = canonicalToActual.get(canonical);
      if (word < existing) {
        canonicalToActual.set(canonical, word);
      }
    }

    anagramMap.set(canonical, (anagramMap.get(canonical) || 0) + 1);
  }

  // Build the final result
  const result = {};
  for (const [canonical, count] of anagramMap.entries()) {
    const key = canonicalToActual.get(canonical);
    result[key] = count;
  }

  return result;
}

function countAnagramFrequencies(document) {
  const map = {};
  const result = {};
  const words = document.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    let key = new Array(26).fill(0);

    for (let j = 0; j < words[i].length; j++) {
      key[words[i][j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    if (!(key in map)) {
      map[key] = {
        word: words[i],
        count: 0,
      };
    }

    map[key] = {
      ...map[key],
      count: map[key].count + 1,
    };
  }

  for (const [key, value] of Object.entries(map)) {
    result[value.word] = value.count;
  }

  return result;
}

console.log(countAnagramFrequencies('hello ohlel'));
console.log(countAnagramFrequencies('isten silent enlist triangle integral'));
console.log(countAnagramFrequencies('post stop tops pots opts'));
console.log(
  countAnagramFrequencies(
    'The quick brown fox jumps over the lazy dog. A man, a plan, a canal: Panama! Was it a car or a cat I saw? Madam, in Eden, Im Adam. A Toyotas a Toyota.',
  ),
);
