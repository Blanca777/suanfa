/*
74. 搜索二维矩阵
编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。
 

示例 1：
输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true
*/

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
