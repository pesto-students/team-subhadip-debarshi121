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
  }
  
  function rearrangeQueue(queue) {
    const evenQueue = new Queue();
    const oddQueue = new Queue();
  
    while (!queue.isEmpty()) {
      const item = queue.dequeue();
      if (item % 2 === 0) {
        evenQueue.enqueue(item);
      } else {
        oddQueue.enqueue(item);
      }
    }
  
    while (!oddQueue.isEmpty()) {
      queue.enqueue(oddQueue.dequeue());
    }
  
    while (!evenQueue.isEmpty()) {
      queue.enqueue(evenQueue.dequeue());
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
  inputQueue.enqueue(6);
  
  console.log("Original Queue:", inputQueue.items);
  
  const rearrangedQueue = rearrangeQueue(inputQueue);
  
  console.log("Rearranged Queue:", rearrangedQueue.items);