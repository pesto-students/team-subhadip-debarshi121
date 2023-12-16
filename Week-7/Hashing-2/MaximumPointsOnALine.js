/* JavaScript program to find maximum number of point
which lie on same line */

// Function to find gcd of two numbers
let gcd = function (a, b) {
	if (!b) {
		return a;
	}
	return gcd(b, a % b);
};

// method to find maximum collinear point
function maxPointOnSameLine(points) {
	let N = points.length;
	if (N < 2) {
		return N;
	}

	let maxPoint = 0;
	let curMax, overlapPoints, verticalPoints;

	// Creating a map for storing the data.
	let slopeMap = new Map();

	// looping for each point
	for (let i = 0; i < N; i++) {
		curMax = 0;
		overlapPoints = 0;
		verticalPoints = 0;

		// looping from i + 1 to ignore same pair again
		for (let j = i + 1; j < N; j++) {
			// If both point are equal then just
			// increase overlapPoint count
			if (points[i] === points[j]) {
				overlapPoints++;
			}

			// If x co-ordinate is same, then both
			// point are vertical to each other
			else if (points[i][0] === points[j][0]) {
				verticalPoints++;
			} else {
				let yDif = points[j][1] - points[i][1];
				let xDif = points[j][0] - points[i][0];
				let g = gcd(xDif, yDif);

				// reducing the difference by their gcd
				yDif = Math.floor(yDif / g);
				xDif = Math.floor(xDif / g);

				// increasing the frequency of current slope.
				let tmp = [yDif, xDif];
				if (slopeMap.has(tmp.join(""))) {
					slopeMap.set(tmp.join(""), slopeMap.get(tmp.join("")) + 1);
				} else {
					slopeMap.set(tmp.join(""), 1);
				}

				curMax = Math.max(curMax, slopeMap.get(tmp.join("")));
			}

			curMax = Math.max(curMax, verticalPoints);
		}

		// updating global maximum by current point's maximum
		maxPoint = Math.max(maxPoint, curMax + overlapPoints + 1);

		// printf("maximum collinear point
		// which contains current point
		// are : %d\n", curMax + overlapPoints + 1);
		slopeMap.clear();
	}

	return maxPoint;
}

// Driver code
{
	let N = 6;
	let arr = [
		[-1, 1],
		[0, 0],
		[1, 1],
		[2, 2],
		[3, 3],
		[3, 4],
	];

	console.log(maxPointOnSameLine(arr));
}
