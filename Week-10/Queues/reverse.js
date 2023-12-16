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
  
  function reverseQueue() {
    const input = prompt("Enter a series of space-separated integers: ");
    const inputArray = input.split(" ").map(Number);
  
    const originalQueue = new Queue();
    inputArray.forEach(item => originalQueue.enqueue(item));
  
    const stack = [];
    while (!originalQueue.isEmpty()) {
      stack.push(originalQueue.dequeue());
    }
  
    const reversedQueue = new Queue();
    while (stack.length > 0) {
      reversedQueue.enqueue(stack.pop());
    }
  
    console.log("Reversed Queue:", reversedQueue.items);
  }
  
  reverseQueue();