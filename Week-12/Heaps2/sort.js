class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    push(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      const minValue = this.heap[0];
      const lastValue = this.heap.pop();
      if (!this.isEmpty()) {
        this.heap[0] = lastValue;
        this.heapifyDown();
      }
      return minValue;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.heap[currentIndex] < this.heap[parentIndex]) {
          this.swap(currentIndex, parentIndex);
          currentIndex = parentIndex;
        } else {
          break;
        }
      }
    }
  
    heapifyDown() {
      let currentIndex = 0;
      const length = this.heap.length;
  
      while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let smallestChildIndex = currentIndex;
  
        if (
          leftChildIndex < length &&
          this.heap[leftChildIndex] < this.heap[smallestChildIndex]
        ) {
          smallestChildIndex = leftChildIndex;
        }
  
        if (
          rightChildIndex < length &&
          this.heap[rightChildIndex] < this.heap[smallestChildIndex]
        ) {
          smallestChildIndex = rightChildIndex;
        }
  
        if (currentIndex === smallestChildIndex) {
          break;
        }
  
        this.swap(currentIndex, smallestChildIndex);
        currentIndex = smallestChildIndex;
      }
    }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  }
  
  function heapSort(arr) {
    const minHeap = new MinHeap();
    const sortedArray = [];
  
    // Build the min-heap
    for (const num of arr) {
      minHeap.push(num);
    }
  
    // Extract the minimum elements and add them to the sorted array
    while (!minHeap.isEmpty()) {
      const minValue = minHeap.pop();
      sortedArray.push(minValue);
    }
  
    return sortedArray;
  }
  
  // Example usage:
  const unsortedArray = [9, -2, 6, 0, 4, 3, -7, 8];
  const sortedArray = heapSort(unsortedArray);
  
  console.log("Sorted Array:", sortedArray);