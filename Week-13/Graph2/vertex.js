function greedyMinimumVertexCover(graph) {
    const vertices = Object.keys(graph);
    const cover = new Set();
  
    while (vertices.length > 0) {
      // Find a vertex with the maximum degree
      let maxDegreeVertex = vertices[0];
      let maxDegree = graph[maxDegreeVertex].length;
  
      for (const vertex of vertices) {
        const degree = graph[vertex].length;
        if (degree > maxDegree) {
          maxDegree = degree;
          maxDegreeVertex = vertex;
        }
      }
  
      // Add the vertex with the maximum degree to the cover
      cover.add(maxDegreeVertex);
  
      // Remove the chosen vertex and its neighbors from the remaining vertices
      vertices.splice(vertices.indexOf(maxDegreeVertex), 1);
      for (const neighbor of graph[maxDegreeVertex]) {
        vertices.splice(vertices.indexOf(neighbor), 1);
        delete graph[neighbor][graph[neighbor].indexOf(maxDegreeVertex)];
      }
    }
  
    return Array.from(cover);
  }
  
  // Example usage:
  const adjacencyList = {
    A: ['B', 'C'],
    B: ['A', 'C', 'D'],
    C: ['A', 'B', 'D', 'E'],
    D: ['B', 'C', 'E', 'F'],
    E: ['C', 'D', 'F'],
    F: ['D', 'E'],
  };
  
  const minimumVertexCover = greedyMinimumVertexCover(adjacencyList);
  console.log("Minimum Vertex Cover:", minimumVertexCover);