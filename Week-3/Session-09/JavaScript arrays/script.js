// Put your solution here
const divideArray = (numbers) => {
    let evenNums = [];
    let oddNums = [];
    numbers.forEach(element => {
        if(element % 2 == 0){
            evenNums.push(element)
        } else {
            oddNums.push(element)
        }
    });
    evenNums = evenNums.sort();
    oddNums = oddNums.sort();

    console.log('Even numbers:');
    if(evenNums.length){
        evenNums.forEach(num => console.log(num))
    } else {
        console.log("None")
    }

    console.log('Odd numbers:');
    if(oddNums.length){
        oddNums.forEach(num => console.log(num))
    } else {
        console.log("None")
    }
}