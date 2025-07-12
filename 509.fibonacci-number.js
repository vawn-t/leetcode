/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) {
    return n;
  }

  let arr = [0, 1];

  for (i = 2; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
};

var fib = function (n) {
  if (n <= 1) {
    return n;
  }

  const arr = [];

  if (arr[n] !== -1) {
    return arr[n];
  }

  arr[n] = fib(n - 1) + fib(n - 2);

  return arr[n];
};

var fib = function (n) {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(4));
