function isValidParentheses(str) {
    const stack = [];
    const openingBrackets = "({[";
    const closingBrackets = ")}]";
  
    for (const char of str) {
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        const correspondingOpening = openingBrackets[closingBrackets.indexOf(char)];
        if (stack.pop() !== correspondingOpening) {
          return false; // Mismatched closing bracket
        }
      }
    }
  
    return stack.length === 0; // True if stack is empty
  }
  
  // Example usage
  const inputString = prompt("Enter a string containing parentheses: ");
  const isValid = isValidParentheses(inputString);
  
  if (isValid) {
    console.log("The parentheses are valid and balanced.");
  } else {
    console.log("The parentheses are not valid and balanced.");
  }