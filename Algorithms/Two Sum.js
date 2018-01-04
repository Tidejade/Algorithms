
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

 */
var twoSum = function(nums, target) {
    if(nums.length<=1){
      return null;
    }
    var res=[];

    for(var k=0;k<nums.length;k++){
      for(var j=k+1;j<nums.length;j++){
        if((nums[k]+nums[j])==target){
          res.push(k);
          res.push(j);
          return res;
        }
      }
    }
