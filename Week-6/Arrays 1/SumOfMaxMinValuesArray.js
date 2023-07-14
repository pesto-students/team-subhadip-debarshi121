const sumOfMaxMin = (arr) => {
    let max = arr[0];
    let min = arr[0];

    arr.forEach(el => {
        if(el > max){
            max = el;
        } 
        if(el < min){
            min = el;
        } 
    });

    return max+min;
}

console.log(sumOfMaxMin([ -10, 0, 100, -50, 20]));