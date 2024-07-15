// Find the duplicate number-287
var findDuplicate = function(nums) {
    let seenSet = new Set();
    for (let num of nums) {
        if (seenSet.has(num)) {
            return num;
        }
        seenSet.add(num);
    }
    return -1; 
};
// sort colors-75
var sortColors = function(nums) {
   nums.sort(); 
};
// remove duplicates from sorted array
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};
// move zeroes
var moveZeroes = function(nums) {
    let lastNonZeroFoundAt = 0;


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt] = nums[i];
            lastNonZeroFoundAt++;
        }
    }

    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
};
// best time to buy and sell stock-121
const maxProfit = (prices) => {
  let left = 0;
  let right = 1; 
  let max_profit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; 
      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
}
