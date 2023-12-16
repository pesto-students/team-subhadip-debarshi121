class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    push(value, listIndex) {
      this.heap.push({ value, listIndex });
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
        if (this.heap[currentIndex].value < this.heap[parentIndex].value) {
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
          this.heap[leftChildIndex].value < this.heap[smallestChildIndex].value
        ) {
          smallestChildIndex = leftChildIndex;
        }
  
        if (
          rightChildIndex < length &&
          this.heap[rightChildIndex].value < this.heap[smallestChildIndex].value
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
  
  function findSmallestRange(kSortedLists) {
    const minHeap = new MinHeap();
    let maxValue = Number.NEGATIVE_INFINITY;
    let minRange = Number.POSITIVE_INFINITY;
    let rangeStart, rangeEnd;
  
    // Initialize the min-heap with the first element from each list
    for (let i = 0; i < kSortedLists.length; i++) {
      const list = kSortedLists[i];
      if (list.length === 0) {
        // If any list is empty, we can't cover all lists, so return immediately
        return null;
      }
      const value = list[0];
      minHeap.push(value, i);
      maxValue = Math.max(maxValue, value);
    }
  
    while (true) {
      const { value, listIndex } = minHeap.pop();
      const list = kSortedLists[listIndex];
      const nextIndex = 1;
  
      if (nextIndex >= list.length) {
        // If any list is exhausted, break the loop
        break;
      }
  
      const nextValue = list[nextIndex];
      minHeap.push(nextValue, listIndex);
      maxValue = Math.max(maxValue, nextValue);
  
      // Calculate the current range
      const currentRange = maxValue - minHeap.heap[0].value;
  
      if (currentRange < minRange) {
        minRange = currentRange;
        rangeStart = minHeap.heap[0].value;
        rangeEnd = maxValue;
      }
    }
  
    return [rangeStart, rangeEnd];
  }
  
  // Example usage:
  const kSortedLists = [
    [4, 10, 15, 24, 26],
    [0, 9, 12, 20],
    [5, 18, 22, 30],
  ];
  
  const [smallestRangeStart, smallestRangeEnd] = findSmallestRange(kSortedLists);
  
  console.log(`Smallest Range: [${smallestRangeStart}, ${smallestRangeEnd}]`);