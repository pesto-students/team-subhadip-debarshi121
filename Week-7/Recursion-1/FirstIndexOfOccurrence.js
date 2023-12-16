const findIndex = (arr, target, i=0) => {
    if(i == arr.length){
        return -1;
    }
    if(arr[i] == target){
        return i;
    }
    return findIndex(arr, target, i+1);
}


console.log(findIndex([1, 2, 3, 4, 3, 5, 8], 3));
console.log(findIndex([1, 2, 3, 4, 3, 5, 8], 10));