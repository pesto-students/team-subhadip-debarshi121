function findBridges(graph) {
    const n = graph.length;
    const visited = new Array(n).fill(false);
    const discoveryTime = new Array(n).fill(0);
    const lowTime = new Array(n).fill(0);
    const parent = new Array(n).fill(-1);
    const bridges = [];
  
    let time = 0;
  
    function dfs(u) {
      visited[u] = true;
      discoveryTime[u] = lowTime[u] = time;
      time++;
  
      for (const v of graph[u]) {
        if (!visited[v]) {
          parent[v] = u;
          dfs(v);
  
          lowTime[u] = Math.min(lowTime[u], lowTime[v]);
  
          if (lowTime[v] > discoveryTime[u]) {
            bridges.push([u, v]);
          }
        } else if (v !== parent[u]) {
          lowTime[u] = Math.min(lowTime[u], discoveryTime[v]);
        }
      }
    }
  
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        dfs(i);
      }
    }
  
    return bridges;
  }
  
  // Example usage:
  const adjacencyList = [
    [1, 2],
    [0, 2, 3],
    [0, 1],
    [1, 4],
    [3],
  ];
  
  const bridges = findBridges(adjacencyList);
  console.log("Bridges in the graph:", bridges);