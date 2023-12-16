const checkDuplicates = (arr) => {
    const set = new Set();

    for(let i=0; i<arr.length; i++){
        if(set.has(arr[i])){
           return "There are duplicate elements in the array";
        } else {
            set.add(arr[i])
        }
    }

    return "There are no duplicate elements in the array";
}

console.log(checkDuplicates([1, 2, 3, 4, 5, 1]));
console.log(checkDuplicates([10, 20, 30, 40, 50]));