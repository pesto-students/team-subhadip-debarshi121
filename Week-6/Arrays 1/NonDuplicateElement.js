const findNonDuplicate = (arr) => {
    const map = new Map();
    arr.forEach(el => {
        if(map.has(el)){
            map.set(el, map.get(el) + 1);
        } else {
            map.set(el, 1);
        }
    });
    arr.forEach(el => {
        if(map.get(el)==1){
            console.log(el);
        }
    });
}

console.log(findNonDuplicate([5, 2, 3, 2, 5]));