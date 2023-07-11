const arr1 = [1,2,3,4,5];
const arr2 = [4,5,6,7,8];
const intersectionArr = [];

const set = new Set([...arr1]);

arr2.forEach(el => {
    if(set.has(el)){
        intersectionArr.push(el);
        set.delete(el);
    }
});

console.log(intersectionArr);