// Maximum points you can obtain from Card
var maxScore = function(cardPoints, k) {
    let n = cardPoints.length;
    let totalSum = cardPoints.slice(0, k).reduce((a, b) => a + b, 0);
    let currentSum = totalSum;
    let maxSum = totalSum;

    for (let i = 0; i < k; i++) {
        currentSum = currentSum - cardPoints[k - 1 - i] + cardPoints[n - 1 - i];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
// two sum

var twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
};
// three sum
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};
// four sum

var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];
    const n = nums.length;

    for (let a = 0; a < n - 3; a++) {
        if (a > 0 && nums[a] === nums[a - 1]) continue;

        for (let b = a + 1; b < n - 2; b++) {
            if (b > a + 1 && nums[b] === nums[b - 1]) continue;

            let c = b + 1;
            let d = n - 1;

            while (c < d) {
                const sum = nums[a] + nums[b] + nums[c] + nums[d];

                if (sum === target) {
                    result.push([nums[a], nums[b], nums[c], nums[d]]);

                    while (c < d && nums[c] === nums[c + 1]) c++;
                    while (c < d && nums[d] === nums[d - 1]) d--;

                    c++;
                    d--;
                } else if (sum < target) {
                    c++;
                } else {
                    d--;
                }
            }
        }
    }

    return result;
};
//Find all duplicates in an Array 
var findDuplicates = function(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        } else {
            result.push(Math.abs(nums[i]));
        }
    }

    return result;
};
