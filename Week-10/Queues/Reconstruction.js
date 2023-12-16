function reconstructQueue(people) {
    // Sort the people by height in descending order
    people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  
    const result = [];
  
    // Insert people at the correct index based on the number of people in front of them
    for (const person of people) {
      result.splice(person[1], 0, person);
    }
  
    return result;
  }
  
  // Example usage
  const inputPeople = [
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2]
  ];
  
  const reconstructedQueue = reconstructQueue(inputPeople);
  console.log(reconstructedQueue);