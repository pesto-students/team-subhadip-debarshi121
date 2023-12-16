class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    push(val, arrayIndex) {
      this.heap.push({ val, arrayIndex });
      this.bubbleUp();
    }
  
    pop() {
      if (this.isEmpty()) return null;
      if (this.heap.length === 1) return this.heap.pop();
  
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return root;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    bubbleUp() {
      let currentIdx = this.heap.length - 1;
      while (currentIdx > 0) {
        const parentIdx = Math.floor((currentIdx - 1) / 2);
        if (this.heap[currentIdx].val < this.heap[parentIdx].val) {
          [this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]];
          currentIdx = parentIdx;
        } else {
          break;
        }
      }
    }
  
    bubbleDown() {
      let currentIdx = 0;
      while (currentIdx < this.heap.length) {
        const leftIdx = 2 * currentIdx + 1;
        const rightIdx = 2 * currentIdx + 2;
        let smallestIdx = currentIdx;
  
        if (leftIdx < this.heap.length && this.heap[leftIdx].val < this.heap[smallestIdx].val) {
          smallestIdx = leftIdx;
        }
  
        if (rightIdx < this.heap.length && this.heap[rightIdx].val < this.heap[smallestIdx].val) {
          smallestIdx = rightIdx;
        }
  
        if (smallestIdx === currentIdx) {
          break;
        }
  
        [this.heap[currentIdx], this.heap[smallestIdx]] = [this.heap[smallestIdx], this.heap[currentIdx]];
        currentIdx = smallestIdx;
      }
    }
  }
  
  function mergeSortedArrays(arrays) {
    const k = arrays.length;
    const minHeap = new MinHeap();
  
    // Initialize the min-heap with the first element from each array
    for (let i = 0; i < k; i++) {
      if (arrays[i].length > 0) {
        minHeap.push(arrays[i][0], i);
      }
    }
  
    const mergedArray = [];
  
    while (!minHeap.isEmpty()) {
      const { val, arrayIndex } = minHeap.pop();
      mergedArray.push(val);
  
      // Add the next element from the same array to the min-heap
      if (arrays[arrayIndex].length > 1) {
        minHeap.push(arrays[arrayIndex][1], arrayIndex);
        arrays[arrayIndex].shift(); // Remove the processed element
      }
    }
  
    return mergedArray;
  }
  
  // Example usage:
  const k = parseInt(prompt("Enter the number of sorted arrays:"));
  const arrays = [];
  
  for (let i = 0; i < k; i++) {
    const input = prompt(`Enter elements for array ${i + 1} (comma-separated):`);
    const array = input.split(",").map(Number);
    arrays.push(array);
  }
  
  const mergedArray = mergeSortedArrays(arrays);
  console.log("Merged and sorted array:", mergedArray);