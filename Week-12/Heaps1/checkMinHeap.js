function isMinHeap(arr) {
    const n = arr.length;
  
    // Check the min heap property for each node
    for (let i = 0; i < n; i++) {
      // Calculate the indices of the left and right children
      const leftChildIndex = 2 * i + 1;
      const rightChildIndex = 2 * i + 2;
  
      // Check if the left child exists and if it violates the min heap property
      if (leftChildIndex < n && arr[i] > arr[leftChildIndex]) {
        return false;
      }
  
      // Check if the right child exists and if it violates the min heap property
      if (rightChildIndex < n && arr[i] > arr[rightChildIndex]) {
        return false;
      }
    }
  
    return true; // All nodes satisfy the min heap property
  }
  
  // Example usage:
  const minHeapArray = [3, 5, 7, 9, 11, 13];
  const notMinHeapArray = [3, 7, 5, 9, 11, 13];
  
  console.log(isMinHeap(minHeapArray)); // Should print true
  console.log(isMinHeap(notMinHeapArray)); // Should print false