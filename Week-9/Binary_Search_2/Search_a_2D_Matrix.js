var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let left = 0, right = m * n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let mid_val = matrix[Math.floor(mid / n)][mid % n];

        if (mid_val === target)
            return true;
        else if (mid_val < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))