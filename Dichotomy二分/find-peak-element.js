/*
162. 寻找峰值
峰值元素是指其值严格大于左右相邻值的元素。

给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞ 。

你必须实现时间复杂度为 O(log n) 的算法来解决此问题。

 

示例 1：

输入：nums = [1,2,3,1]
输出：2
解释：3 是峰值元素，你的函数应该返回其索引 2。
*/
var findPeakElement = function(nums) {
  let left = 0, right = nums.length - 1, mid, ans = -1;
  while(left <= right){
      mid = Math.floor((left+right)/2)
      if(compare(nums, mid-1, mid) < 0 && compare(nums, mid, mid+1) > 0){
          ans = mid;
          break;
      }
      if(compare(nums,mid, mid+1) < 0){
          left = mid + 1
      }else{
          right = mid - 1
      }
  }
  return ans
  function get(nums,idx){
      if(idx===-1||idx===nums.length){
          return [0,0]
      }
      return [1, nums[idx]]
  }
  function compare(nums,idx1,idx2){
      const v1 = get(nums, idx1);
      const v2 = get(nums, idx2);
      if(v1[0] !== v2[0]){
          return v1[0] > v2[0] ? 1 : -1
      }
      if(v1[1] === v1[2]){
          return 0;
      }
      return v1[1] > v2[1] ? 1 : -1
  }
};