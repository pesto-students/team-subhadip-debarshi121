function simplifyPath(path) {
    const components = path.split('/');
    const stack = [];
  
    for (const component of components) {
      if (component === "..") {
        stack.pop(); // Move up one directory
      } else if (component && component !== ".") {
        stack.push(component); // Push valid directory names
      }
    }
  
    return '/' + stack.join('/');
  }
  
  // Example usage
  const inputPath = "/a/./b/../../c/";
  const simplifiedPath = simplifyPath(inputPath);
  console.log("Simplified Path:", simplifiedPath);