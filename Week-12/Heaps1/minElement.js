function findMinElement(heap) {
    if (heap.length === 0) {
      throw new Error("The heap is empty.");
    }
  
    return heap[0];
  }
  
  // Example usage:
  const minHeap = [2, 4, 7, 9, 10, 15];
  const minElement = findMinElement(minHeap);
  console.log("Minimum element in the min heap:", minElement);