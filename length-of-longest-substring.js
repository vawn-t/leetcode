var lengthOfLongestSubstring = function (s) {
  let max = 0;
  const set = new Set();
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    max = Math.max(max, r - l + 1);
  }

  return max;
};

lengthOfLongestSubstring('pwwkew');

function solution(A) {
  // Implement your solution here
  // x > 0
  const set = new Set(A);
  let ans = 1;
  while (set.has(ans)) {
    ans++;
  }

  console.log(set);

  console.log(ans);

  return ans;
}

solution([1, 3, 6, 4, 1, 2]);
