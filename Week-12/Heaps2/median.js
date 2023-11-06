class Heap {
    constructor(compare) {
      this.heap = [];
      this.compare = compare;
    }
  
    size() {
      return this.heap.length;
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    insert(val) {
      this.heap.push(val);
      this.heapifyUp();
    }
  
    extract() {
      if (this.isEmpty()) return null;
      if (this.size() === 1) return this.heap.pop();
  
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return root;
    }
  
    peek() {
      return this.isEmpty() ? null : this.heap[0];
    }
  
    heapifyUp() {
      let currentIdx = this.size() - 1;
      while (currentIdx > 0) {
        const parentIdx = Math.floor((currentIdx - 1) / 2);
        if (this.compare(this.heap[currentIdx], this.heap[parentIdx]) < 0) {
          this.swap(currentIdx, parentIdx);
          currentIdx = parentIdx;
        } else {
          break;
        }
      }
    }
  
    heapifyDown() {
      let currentIdx = 0;
      while (true) {
        const leftChildIdx = 2 * currentIdx + 1;
        const rightChildIdx = 2 * currentIdx + 2;
        let smallestChildIdx = currentIdx;
  
        if (
          leftChildIdx < this.size() &&
          this.compare(this.heap[leftChildIdx], this.heap[smallestChildIdx]) < 0
        ) {
          smallestChildIdx = leftChildIdx;
        }
  
        if (
          rightChildIdx < this.size() &&
          this.compare(this.heap[rightChildIdx], this.heap[smallestChildIdx]) < 0
        ) {
          smallestChildIdx = rightChildIdx;
        }
  
        if (currentIdx === smallestChildIdx) break;
  
        this.swap(currentIdx, smallestChildIdx);
        currentIdx = smallestChildIdx;
      }
    }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  }
  
  function calculateMedian(stream) {
    const maxHeap = new Heap((a, b) => b - a);
    const minHeap = new Heap((a, b) => a - b);
  
    const medianValues = [];
  
    for (const num of stream) {
      if (maxHeap.isEmpty() || num < maxHeap.peek()) {
        maxHeap.insert(num);
      } else {
        minHeap.insert(num);
      }
  
      // Balance the heaps
      if (maxHeap.size() > minHeap.size() + 1) {
        minHeap.insert(maxHeap.extract());
      } else if (minHeap.size() > maxHeap.size()) {
        maxHeap.insert(minHeap.extract());
      }
  
      // Calculate median
      if (maxHeap.size() === minHeap.size()) {
        const median = (maxHeap.peek() + minHeap.peek()) / 2;
        medianValues.push(median);
      } else {
        medianValues.push(maxHeap.peek());
      }
    }
  
    return medianValues;
  }
  
  // Input
  const input = prompt("Enter a stream of integers separated by spaces: ");
  const stream = input.split(" ").map(Number);
  
  const medians = calculateMedian(stream);
  console.log("Medians of the stream: ", medians);