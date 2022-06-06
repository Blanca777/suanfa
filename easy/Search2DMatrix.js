var searchMatrix = function (matrix, target) {
  let m = matrix.length,
    n = matrix[0].length;
  let left = 0,
    right = n - 1,
    row = 0;
  while (!(target >= matrix[row][left] && target <= matrix[row][right])) {
    row++;
    if (row > m - 1) return false;
  }
  if(n === 1) return matrix[row][0] === target
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (target === matrix[row][mid]) {
      return true;
    } else if (target < matrix[row][mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
searchMatrix([[1,3]], 3);
