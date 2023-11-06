function hasCycle(graph) {
    const n = graph.length;
    const visited = new Array(n).fill(false);
    const recStack = new Array(n).fill(false);
  
    function dfs(node) {
      visited[node] = true;
      recStack[node] = true;
  
      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          if (dfs(neighbor)) {
            return true; // Cycle detected
          }
        } else if (recStack[neighbor]) {
          return true; // Cycle detected
        }
      }
  
      recStack[node] = false;
      return false;
    }
  
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        if (dfs(i)) {
          return true; // Cycle detected
        }
      }
    }
  
    return false; // No cycle detected
  }
  
  // Example usage:
  const adjacencyListWithCycle = [
    [1],
    [2],
    [0, 3],
    [4],
    [2],
  ];
  
  const adjacencyListWithoutCycle = [
    [1],
    [2],
    [3],
    [4],
    [],
  ];
  
  console.log("Graph 1 has a cycle:", hasCycle(adjacencyListWithCycle));
  console.log("Graph 2 has a cycle:", hasCycle(adjacencyListWithoutCycle))