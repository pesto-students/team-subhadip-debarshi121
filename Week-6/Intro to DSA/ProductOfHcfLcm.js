const calculateHCF = (a, b) => {
	a = Math.abs(a);
	b = Math.abs(b);

	let greater = a;
	let lower = b;
	if (a < b) {
		greater = b;
		lower = a;
	}
    
	if (a === 0 && b === 0) {
		return 0;
	}
	if (a === 0) {
		return b;
	}
	if (b === 0) {
		return a;
	}

	let rem = greater;
	while (rem > 0) {
		rem = greater % lower;
		if (rem === 0) {
			return lower;
		} else {
			greater = lower;
			lower = rem;
		}
	}
};

const calculateLCM = (a, b) => (a * b) / calculateHCF(a, b);


console.log(calculateLCM(6, 8));