class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    push(point) {
      this.heap.push(point);
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
  
        if (this.distance(this.heap[currentIndex]) <= this.distance(this.heap[parentIndex])) {
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
  
        if (leftChildIndex < this.heap.length && this.distance(this.heap[leftChildIndex]) > this.distance(this.heap[largestChildIndex])) {
          largestChildIndex = leftChildIndex;
        }
  
        if (rightChildIndex < this.heap.length && this.distance(this.heap[rightChildIndex]) > this.distance(this.heap[largestChildIndex])) {
          largestChildIndex = rightChildIndex;
        }
  
        if (largestChildIndex === currentIndex) {
          break;
        }
  
        [this.heap[currentIndex], this.heap[largestChildIndex]] = [this.heap[largestChildIndex], this.heap[currentIndex]];
        currentIndex = largestChildIndex;
      }
    }
  
    distance(point) {
      return Math.sqrt(point[0] ** 2 + point[1] ** 2);
    }
  }
  
  function findClosestPointsToOrigin(points, k) {
    const maxHeap = new MaxHeap();
  
    for (const point of points) {
      maxHeap.push(point);
  
      if (maxHeap.heap.length > k) {
        maxHeap.pop();
      }
    }
  
    const closestPoints = [];
  
    while (!maxHeap.isEmpty()) {
      closestPoints.push(maxHeap.pop());
    }
  
    return closestPoints.reverse();
  }
  
  // Example usage:
  const k = parseInt(prompt("Enter the value of k:"));
  const pointsInput = prompt("Enter points (x,y) separated by spaces:");
  
  const points = pointsInput.split(" ").map(pointStr => {
    const [x, y] = pointStr.split(",").map(Number);
    return [x, y];
  });
  
  const closestPoints = findClosestPointsToOrigin(points, k);
  console.log(`The ${k} closest points to the origin are:`, closestPoints);