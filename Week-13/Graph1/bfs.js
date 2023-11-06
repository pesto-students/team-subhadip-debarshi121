function bfs(graph, startNode, visitCallback) {
    const visited = new Set();
    const queue = [startNode];
  
    while (queue.length > 0) {
      const currentNode = queue.shift();
      visited.add(currentNode);
      
      // Process or print the visited node
      visitCallback(currentNode);
  
      for (const neighbor of graph[currentNode]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
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
  
  console.log("BFS Traversal:");
  bfs(adjacencyList, 0, (node) => {
    console.log(node);
  });