function evalRPN(tokens) {
    const stack = [];
  
    for (const token of tokens) {
      if (!isNaN(token)) {
        stack.push(parseInt(token));
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
  
        switch (token) {
          case "+":
            stack.push(operand1 + operand2);
            break;
          case "-":
            stack.push(operand1 - operand2);
            break;
          case "*":
            stack.push(operand1 * operand2);
            break;
          case "/":
            stack.push(Math.trunc(operand1 / operand2)); // Integer division
            break;
        }
      }
    }
  
    return stack.pop();
  }
  
  // Example usage
  const tokens = ["2", "1", "+", "3", "*"];
  const result = evalRPN(tokens);
  console.log("Result:", result); // Output: 9