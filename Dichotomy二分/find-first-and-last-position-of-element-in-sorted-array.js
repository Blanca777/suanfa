/*
34. 在排序数组中查找元素的第一个和最后一个位置

给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

示例 1：
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
*/
var searchRange = function (nums, target) {
  if(nums.length < 2 && nums[0]=== target) return [0,0]
  if(nums.length < 2 && nums[0]!== target) return [-1,-1]
  let left = 0, right = nums.length - 1, mid, ans = [-1, -1]
  while (left <= right) {
      mid = Math.floor((left + right) / 2)
      if (target < nums[mid]) {
          right = mid - 1
      } else if (target > nums[mid]) {
          left = mid + 1
      } else {
          ans = [mid, mid]
          let temp = mid
          while (nums[temp-1] === target) {
              temp -= 1
          }
          
          while (nums[mid+1] === target) {
              mid += 1
          }
          ans = [temp, mid]
          return ans
      }
  }
  return ans
};