/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.trim().split(/\s+/);

  let result = '';

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i !== arr.length - 1) {
      result += ' ';
    }
    result += arr[i];
  }
  return result;
};

var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(' ');
};

console.log(reverseWords('a good   example'));
console.log(reverseWords('the sky is blue'));
