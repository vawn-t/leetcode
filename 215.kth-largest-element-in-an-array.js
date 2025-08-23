class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex] < this.heap[index]) {
        this.swap(parentIndex, index);

        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return max;
  }

  heapifyDown(index) {
    let largest = index;

    let left = this.getLeftChildIndex(index);
    let right = this.getRightChildIndex(index);

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest != index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  peek() {
    return this.heap.length === 0 ? null : this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new MaxHeap();

  nums.forEach((num) => {
    heap.insert(num);
  });

  for (let i = 0; i < k - 1; i++) {
    heap.extractMax();
  }

  return heap.peek();
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
console.log(findKthLargest([], 0)); //
console.log(findKthLargest([], 2)); //
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); //
