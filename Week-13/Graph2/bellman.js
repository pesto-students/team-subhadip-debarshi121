function bellmanFord(graph, source) {
    const n = graph.length;
    const distance = new Array(n).fill(Number.POSITIVE_INFINITY);
    const predecessor = new Array(n).fill(null);
  
    // Initialize the distance from the source node to itself as 0
    distance[source] = 0;
  
    // Relax edges repeatedly (n-1 times, where n is the number of nodes)
    for (let i = 0; i < n - 1; i++) {
      for (let u = 0; u < n; u++) {
        for (const edge of graph[u]) {
          const v = edge.to;
          const weight = edge.weight;
          if (distance[u] !== Number.POSITIVE_INFINITY && distance[u] + weight < distance[v]) {
            distance[v] = distance[u] + weight;
            predecessor[v] = u;
          }
        }
      }
    }
  
    // Check for negative weight cycles
    for (let u = 0; u < n; u++) {
      for (const edge of graph[u]) {
        const v = edge.to;
        const weight = edge.weight;
        if (distance[u] !== Number.POSITIVE_INFINITY && distance[u] + weight < distance[v]) {
          // Negative weight cycle detected
          return null;
        }
      }
    }
  
    return { distance, predecessor };
  }
  
  // Example usage:
  const adjacencyList = [
    [{ to: 1, weight: 6 }, { to: 2, weight: 7 }],
    [{ to: 2, weight: 8 }, { to: 3, weight: 5 }, { to: 4, weight: -4 }],
    [{ to: 1, weight: -2 }, { to: 3, weight: 9 }],
    [{ to: 0, weight: 2 }, { to: 4, weight: 7 }],
    [{ to: 3, weight: 7 }],
  ];
  
  const sourceNode = 0; // Change this to the desired source node
  const result = bellmanFord(adjacencyList, sourceNode);
  
  if (result === null) {
    console.log("Negative weight cycle detected.");
  } else {
    console.log(`Shortest distances from node ${sourceNode}:`, result.distance);
    console.log("Predecessors:", result.predecessor);
  }