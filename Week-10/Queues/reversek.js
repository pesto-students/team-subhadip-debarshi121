class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  function reverseKElements(queue, K) {
    if (K <= 0 || K > queue.size()) {
      return queue;
    }
  
    const stack = [];
    for (let i = 0; i < K; i++) {
      stack.push(queue.dequeue());
    }
  
    while (stack.length > 0) {
      queue.enqueue(stack.pop());
    }
  
    const remainingCount = queue.size() - K;
    for (let i = 0; i < remainingCount; i++) {
      queue.enqueue(queue.dequeue());
    }
  
    return queue;
  }
  
  // Example usage
  const inputQueue = new Queue();
  inputQueue.enqueue(1);
  inputQueue.enqueue(2);
  inputQueue.enqueue(3);
  inputQueue.enqueue(4);
  inputQueue.enqueue(5);
  
  const K = 3;
  
  console.log("Original Queue:", inputQueue.items);
  
  const reversedQueue = reverseKElements(inputQueue, K);
  
  console.log("Queue after reversing first", K, "elements:", reversedQueue.items);