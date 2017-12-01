/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let targetArr = new Array(...nums).sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  while(nums[start] === targetArr[start] && start < nums.length) {
    ++start;
  }
  if (start === nums.length) return 0;
  while (end >= start && nums[end] === targetArr[end] ) {
    --end;
  }
  if (end === start) return 0;
  return end - start + 1;
};
