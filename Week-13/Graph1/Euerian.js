function hasEulerianPathOrCircuit(adjacencyList) {
    const n = Object.keys(adjacencyList).length;
    let startNode = -1;
    let endNode = -1;
    let oddDegreeCount = 0;
  
    // Count in-degrees and out-degrees for each vertex
    const inDegrees = new Array(n).fill(0);
    const outDegrees = new Array(n).fill(0);
  
    for (const node in adjacencyList) {
      for (const neighbor of adjacencyList[node]) {
        outDegrees[node]++;
        inDegrees[neighbor]++;
      }
    }
  
    for (let i = 0; i < n; i++) {
      if (Math.abs(inDegrees[i] - outDegrees[i]) > 1) {
        // If the difference between in-degree and out-degree is greater than 1, it's not possible
        return "Neither";
      } else if (inDegrees[i] !== outDegrees[i]) {
        if (inDegrees[i] > outDegrees[i]) {
          startNode = i;
        } else {
          endNode = i;
        }
        oddDegreeCount++;
      }
    }
  
    if (oddDegreeCount === 0) {
      return "Eulerian Circuit"; // All vertices have even degrees
    } else if (oddDegreeCount === 2) {
      return "Eulerian Path"; // Exactly two vertices have an indegree-outdegree difference of 1
    } else {
      return "Neither"; // Any other case
    }
  }
  
  // Example usage:
  const adjacencyListEulerianPath = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [2, 5],
    5: [0],
  };
  
  const adjacencyListEulerianCircuit = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [2, 5],
    5: [0],
  };
  
  const adjacencyListNeither = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [2],
  };
  
  console.log("Graph 1:", hasEulerianPathOrCircuit(adjacencyListEulerianPath));
  console.log("Graph 2:", hasEulerianPathOrCircuit(adjacencyListEulerianCircuit));
  console.log("Graph 3:", hasEulerianPathOrCircuit(adjacencyListNeither));