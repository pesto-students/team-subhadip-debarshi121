function findStartingPetrolPump(petrol, distance) {
    const n = petrol.length;
    let start = 0; // Starting petrol pump
    let total = 0; // Total petrol in the tank
  
    for (let i = 0; i < n; i++) {
      total += petrol[i] - distance[i];
  
      if (total < 0) {
        start = i + 1;
        total = 0;
      }
    }
  
    return start;
  }
  
  // Example input
  const petrol = [4, 6, 7, 4];
  const distance = [6, 5, 3, 5];
  
  const startingPump = findStartingPetrolPump(petrol, distance);
  console.log(`The starting petrol pump is at index ${startingPump}`);