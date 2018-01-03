/**
 * @param {number[]} nums
 * @return {number}
 Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 */
var maxSubArray = function(nums) {
    var len=nums.length;
    var max=nums[0];
    var min=[];
    min[0]=nums[0];
    for(var i=1;i<len;i++){
    min[i]=Math.max(nums[i],min[i-1]+nums[i]);
    max=Math.max(max,min[i]);
    }
    return max;
};
