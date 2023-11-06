function dfs(graph, currentNode, visited, visitCallback) {
    visited.add(currentNode);
  
    // Process or print the visited node
    visitCallback(currentNode);
  
    for (const neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        dfs(graph, neighbor, visited, visitCallback);
      }
    }
  }
  
  // Example usage:
  const adjacencyList = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 5],
    3: [1],
    4: [1],
    5: [2],
  };
  
  console.log("DFS Traversal:");
  const visitedNodes = new Set();
  dfs(adjacencyList, 0, visitedNodes, (node) => {
    console.log(node);
  });