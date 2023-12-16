class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    push(val, row, col) {
      this.heap.push({ val, row, col });
      this.heapifyUp();
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return root;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
      let parentIndex;
  
      while (currentIndex > 0) {
        parentIndex = Math.floor((currentIndex - 1) / 2);
  
        if (this.heap[currentIndex].val >= this.heap[parentIndex].val) {
          break;
        }
  
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
        currentIndex = parentIndex;
      }
    }
  
    heapifyDown() {
      let currentIndex = 0;
      let leftChildIndex, rightChildIndex, smallestChildIndex;
  
      while (currentIndex < this.heap.length) {
        leftChildIndex = 2 * currentIndex + 1;
        rightChildIndex = 2 * currentIndex + 2;
        smallestChildIndex = currentIndex;
  
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].val < this.heap[smallestChildIndex].val) {
          smallestChildIndex = leftChildIndex;
        }
  
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].val < this.heap[smallestChildIndex].val) {
          smallestChildIndex = rightChildIndex;
        }
  
        if (smallestChildIndex === currentIndex) {
          break;
        }
  
        [this.heap[currentIndex], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[currentIndex]];
        currentIndex = smallestChildIndex;
      }
    }
  }
  
  function findKthSmallest(matrix, k) {
    const minHeap = new MinHeap();
  
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    // Add the first element (top-left) to the min-heap
    minHeap.push(matrix[0][0], 0, 0);
  
    for (let i = 0; i < k - 1; i++) {
      const { val, row, col } = minHeap.pop();
  
      // If the current element is not in the last column, push the element from the same row to the right
      if (col < cols - 1) {
        minHeap.push(matrix[row][col + 1], row, col + 1);
      }
  
      // If the current element is not in the last row, push the element from the same column below
      if (row < rows - 1) {
        minHeap.push(matrix[row + 1][col], row + 1, col);
      }
    }
  
    return minHeap.pop().val;
  }
  
  // Example usage:
  const matrix = [
    [1, 3, 5],
    [2, 4, 8],
    [6, 7, 9]
  ];
  const k = 3;
  
  const kthSmallest = findKthSmallest(matrix, k);
  console.log(`The ${k}th smallest element is:`, kthSmallest);