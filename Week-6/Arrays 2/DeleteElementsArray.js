const arr = [9,12,15,25,18,21];

const newArr = arr.filter((n) => {
    if(n%2===0 || n%3===0){
        return false;
    }
    return true;
});

console.log(newArr);