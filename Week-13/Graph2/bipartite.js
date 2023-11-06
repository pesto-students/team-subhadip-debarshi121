function isBipartite(graph) {
    const n = graph.length;
    const colors = new Array(n).fill(-1); // Initialize colors with -1 (unvisited)
  
    for (let i = 0; i < n; i++) {
      if (colors[i] === -1) {
        if (!bfs(i, colors, graph)) {
          return false; // Conflict found, not bipartite
        }
      }
    }
  
    return true; // No conflicts found, bipartite
  }
  
  function bfs(start, colors, graph) {
    const queue = [start];
    colors[start] = 0; // Color the starting node as 0
  
    while (queue.length > 0) {
      const node = queue.shift();
      const currentColor = colors[node];
  
      for (const neighbor of graph[node]) {
        if (colors[neighbor] === -1) {
          // Color the neighbor with the opposite color of the current node
          colors[neighbor] = 1 - currentColor;
          queue.push(neighbor);
        } else if (colors[neighbor] === currentColor) {
          // Conflict: neighbor has the same color as the current node
          return false; // Not bipartite
        }
      }
    }
  
    return true; // No conflicts in this connected component
  }
  
  // Example usage:
  const adjacencyListBipartite = [
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
  ];
  
  const adjacencyListNotBipartite = [
    [1, 2, 3],
    [0, 2],
    [1, 3],
    [0, 2],
  ];
  
  console.log("Graph 1 is bipartite:", isBipartite(adjacencyListBipartite));
  console.log("Graph 2 is bipartite:", isBipartite(adjacencyListNotBipartite));