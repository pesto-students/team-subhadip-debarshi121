const rows = prompt("Enter number of rows");
const cols = prompt("Enter number of columns");

const matrix1 = [];
const matrix2 = [];
const sumArray = [];

const getInputArray1 = () => {
    for(let i=0; i<rows; i++){
        matrix1[i] = [];
        for(let j=0; j<cols; j++){
            matrix1[i][j] = parseInt(prompt("Enter a number (Matrix 1):"));
        }
    }
}

const getInputArray2 = () => {
    for(let i=0; i<rows; i++){
        matrix2[i] = [];
        for(let j=0; j<cols; j++){
            matrix2[i][j] = parseInt(prompt("Enter a number (Matrix 2):"));
        }
    }
}

const calculateSumOfArrays = () => {
    for(let i=0; i<rows; i++){
        sumArray[i] = [];
        for(let j=0; j<cols; j++){
            sumArray[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
}

getInputArray1();
getInputArray2();
calculateSumOfArrays();

console.log(matrix1);
console.log(matrix2);

console.log(sumArray);