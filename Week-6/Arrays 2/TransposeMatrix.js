const rows = prompt("Enter number of rows");
const cols = prompt("Enter number of columns");

const matrix = [];
const transpose = new Array(cols);

for(var i = 0; i < cols; i++) {
    transpose[i] = new Array(rows);
}

const getInputArray = () => {
    for(let i=0; i<rows; i++){
        matrix[i] = [];
        for(let j=0; j<cols; j++){
            matrix[i][j] = parseInt(prompt("Enter a number:"));
        }
    }
}

const calculateTranspose = () => {
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            transpose[j][i] = matrix[i][j];
        }
    }
}

getInputArray();
calculateTranspose();

console.log(matrix);
console.log(transpose);