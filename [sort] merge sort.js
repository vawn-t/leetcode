/**
 * @param {number[]} nums
 * @return {number[]}
 */

// var sortArray = function (nums) {
//     if (nums.length <= 1) return nums

//     let pivot = nums[nums.length - 1]
//     const left = []
//     const right = []

//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] < pivot) {
//             left.push(nums[i])
//         } else {
//             right.push(nums[i])
//         }
//     }

//     return [...sortArray(left), pivot, ...sortArray(right)]
// };

var sortArray = function (nums) {
  // Create a copy to avoid modifying the original array
  const arr = [...nums];
  quickSortInPlace(arr, 0, arr.length - 1);
  return arr;
};

function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;

  const pivotIndex = partition(arr, left, right);

  quickSortInPlace(arr, left, pivotIndex - 1);
  quickSortInPlace(arr, pivotIndex + 1, right);
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

console.log(sortArray([5, 2, 3, 1])); // [1, 2, 3, 5]
console.log(sortArray([5, 1, 1, 2, 0, 0])); // [0, 0, 1, 1, 2, 5]
