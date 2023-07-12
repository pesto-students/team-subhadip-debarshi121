const inputArr = [1,2,3,2,4,2,5];
const oldKey = 2;
const newKey = 6;

for (let i = 0; i < inputArr.length; i++) {
   if(inputArr[i] === oldKey) inputArr[i] = newKey;
}

console.log(inputArr);