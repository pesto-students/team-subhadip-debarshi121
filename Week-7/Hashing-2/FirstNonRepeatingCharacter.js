const helper = (str) => {
    const map = new Map();
    for(s of str){
        if(map.has(s)){
            map.set(s, map.get(s) + 1);
        } else {
            map.set(s, 1);
        }
    }

    for(s of str){
        if(map.get(s) === 1){
           return s;
        }
    }

    return "No non-repeating character found!";
}

console.log(helper('aabbcc'));
console.log(helper('aabbccd'));
console.log(helper('abcdabcde'));