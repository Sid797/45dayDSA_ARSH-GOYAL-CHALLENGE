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