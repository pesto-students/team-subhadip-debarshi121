class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    push(val) {
      this.heap.push(val);
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
  
        if (this.heap[currentIndex] <= this.heap[parentIndex]) {
          break;
        }
  
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
        currentIndex = parentIndex;
      }
    }
  
    heapifyDown() {
      let currentIndex = 0;
      let leftChildIndex, rightChildIndex, largestChildIndex;
  
      while (currentIndex < this.heap.length) {
        leftChildIndex = 2 * currentIndex + 1;
        rightChildIndex = 2 * currentIndex + 2;
        largestChildIndex = currentIndex;
  
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestChildIndex]) {
          largestChildIndex = leftChildIndex;
        }
  
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestChildIndex]) {
          largestChildIndex = rightChildIndex;
        }
  
        if (largestChildIndex === currentIndex) {
          break;
        }
  
        [this.heap[currentIndex], this.heap[largestChildIndex]] = [this.heap[largestChildIndex], this.heap[currentIndex]];
        currentIndex = largestChildIndex;
      }
    }
  }
  
  function findKthLargest(nums, k) {
    const maxHeap = new MaxHeap();
  
    for (const num of nums) {
      maxHeap.push(num);
  
      if (maxHeap.heap.length > k) {
        maxHeap.pop();
      }
    }
  
    return maxHeap.pop();
  }
  
  // Example usage:
  const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
  const k = 4;
  
  const kthLargest = findKthLargest(unsortedArray, k);
  console.log(`The ${k}th largest element is:`, kthLargest);