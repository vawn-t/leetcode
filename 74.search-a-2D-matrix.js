/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].length === 1) {
      if (matrix[i][0] === target) {
        return true;
      } else {
        continue;
      }
    }

    let l = 0;
    let r = matrix[i].length - 1;

    while (r > l) {
      let m = Math.floor(l + (r - l) / 2);

      if (matrix[i][m] === target) return true;
      else if (matrix[i][m] > target) r = m - 1;
      else l = m + 1;
    }

    if (matrix[i][r] === target) return true;
  }

  return false;
};

var searchMatrix = function (matrix, target) {
  const arr = [].concat(...matrix);

  let l = 0;
  let r = arr.length - 1;

  while (r >= l) {
    let m = Math.floor(l + (r - l) / 2);

    if (arr[m] === target) return true;
    else if (arr[m] > target) r = m - 1;
    else l = m + 1;
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
); // true
console.log(searchMatrix([[1]], 1)); //true
console.log(searchMatrix([[1, 3]], 3)); //true
