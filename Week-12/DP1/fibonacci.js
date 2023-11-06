function calculateFibonacci(n) {
    if (n <= 1) {
      return n;
    }
  
    const fib = new Array(n + 1);
    fib[0] = 0;
    fib[1] = 1;
  
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return fib[n];
  }
  
  // Example usage:
  const n = 10;
  const result = calculateFibonacci(n);
  console.log(`The ${n}th Fibonacci number is ${result}`);