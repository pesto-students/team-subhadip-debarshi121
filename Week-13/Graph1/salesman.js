function nearestNeighborTSP(graph) {
    const n = graph.length;
    
    // Initialize variables
    const visited = new Array(n).fill(false);
    const path = [0]; // Start from the first city (index 0)
    let totalDistance = 0;
    visited[0] = true;
  
    // Repeatedly find the nearest unvisited neighbor and add it to the path
    for (let i = 0; i < n - 1; i++) {
      let nearestCity = -1;
      let minDistance = Number.MAX_VALUE;
  
      const currentCity = path[path.length - 1];
      for (let j = 0; j < n; j++) {
        if (!visited[j] && graph[currentCity][j] < minDistance) {
          nearestCity = j;
          minDistance = graph[currentCity][j];
        }
      }
  
      path.push(nearestCity);
      visited[nearestCity] = true;
      totalDistance += minDistance;
    }
  
    // Return to the starting city to complete the cycle
    totalDistance += graph[path[path.length - 1]][0];
    path.push(0);
  
    return { path, totalDistance };
  }
  
  // Example usage:
  const cities = [
    [0, 29, 20, 21],
    [29, 0, 15, 18],
    [20, 15, 0, 31],
    [21, 18, 31, 0],
  ];
  
  const { path, totalDistance } = nearestNeighborTSP(cities);
  console.log("Shortest Path:", path);
  console.log("Total Distance:", totalDistance);