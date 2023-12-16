function topologicalSort(adjMatrix) {
	const numVertices = adjMatrix.length;
	const inDegrees = new Array(numVertices).fill(0);
	const result = [];

	for (let u = 0; u < numVertices; u++) {
		for (let v = 0; v < numVertices; v++) {
			if (adjMatrix[u][v] === 1) {
				inDegrees[v]++;
			}
		}
	}

	const queue = [];
	for (let i = 0; i < numVertices; i++) {
		if (inDegrees[i] === 0) {
			queue.push(i);
		}
	}

	while (queue.length > 0) {
		const u = queue.shift();
		result.push(u);

		for (let v = 0; v < numVertices; v++) {
			if (adjMatrix[u][v] === 1) {
				inDegrees[v]--;

				if (inDegrees[v] === 0) {
					queue.push(v);
				}
			}
		}
	}

	if (result.length !== numVertices) {
		return [];
	}

	return result;
}

const adjacencyMatrix = [
	[0, 1, 1, 0, 0],
	[0, 0, 0, 1, 0],
	[0, 0, 0, 1, 1],
	[0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0],
];

console.log(topologicalSort(adjacencyMatrix));
