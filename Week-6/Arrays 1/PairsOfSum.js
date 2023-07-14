const inputArr = [2,4,6,8,10];
const sum = 12;
const pairs = [];

for (let i = 0; i < inputArr.length; i++) {
    for (let j = i+1; j < inputArr.length; j++) {
        if(inputArr[i]+inputArr[j]==sum){
            pairs.push([inputArr[i], inputArr[j]]);
        }
    }
}

console.log(pairs);