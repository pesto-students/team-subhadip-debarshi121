function findArticulationPoints(graph) {
    const n = graph.length;
    const visited = new Array(n).fill(false);
    const parent = new Array(n).fill(-1);
    const low = new Array(n).fill(0);
    const disc = new Array(n).fill(0);
    const isArticulation = new Array(n).fill(false);
    let time = 0;
  
    function dfs(u) {
      let children = 0;
      visited[u] = true;
      disc[u] = time;
      low[u] = time;
      time++;
  
      for (const v of graph[u]) {
        if (!visited[v]) {
          children++;
          parent[v] = u;
          dfs(v);
  
          low[u] = Math.min(low[u], low[v]);
  
          if (low[v] >= disc[u]) {
            isArticulation[u] = true;
          }
        } else if (v !== parent[u]) {
          low[u] = Math.min(low[u], disc[v]);
        }
      }
  
      if (parent[u] === -1 && children >= 2) {
        isArticulation[u] = true;
      }
    }
  
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        dfs(i);
      }
    }
  
    const articulationPoints = [];
    for (let i = 0; i < n; i++) {
      if (isArticulation[i]) {
        articulationPoints.push(i);
      }
    }
  
    return articulationPoints;
  }
  
  // Example usage:
  const adjacencyList = [
    [1, 2],
    [0, 2],
    [0, 1, 3, 5],
    [2, 4],
    [3],
    [2, 6],
    [5],
  ];
  
  const articulationPoints = findArticulationPoints(adjacencyList);
  console.log("Articulation Points:", articulationPoints);