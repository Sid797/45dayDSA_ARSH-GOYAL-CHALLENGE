// subarray sum equals to k
var subarraySum = function(nums, k) {
    let sum = 0;
    let count = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let rem = sum - k;

        if (map.has(rem)) {
            count += map.get(rem);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
};

// merge sorted array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n === 0) return;

    let len1 = nums1.length;
    let end_idx = len1 - 1;

    while(n > 0 && m > 0) {
        if(nums2[n-1] >= nums1[m-1]) {
            nums1[end_idx] = nums2[n-1];
            n--;
        } else {
            nums1[end_idx] = nums1[m-1];
            m--;
        }
        end_idx--;
    }

    while (n > 0) {
        nums1[end_idx] = nums2[n-1];
        n--;
        end_idx--;
    }
};
// largest rectangle in histogram
var largestRectangleArea = function(heights) {
    const n = heights.length;
    const nsr = new Array(n).fill(0);
    const nsl = new Array(n).fill(0);

    const stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length !== 0 && heights[i] <= heights[stack[stack.length - 1]]) {
                stack.pop();
        }
        if (stack.length === 0) {
            nsr[i] = n;
        } else {
            nsr[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    while (stack.length !== 0) {
        stack.pop();
    }

    for (let i = 0; i < n; i++) {
        while (stack.length !== 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length === 0) {
            nsl[i] = -1;
        } else {
             nsl[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, heights[i] * (nsr[i] - nsl[i] - 1));
    }

    return ans;
};
// max value of equation
var findMaxValueOfEquation = function(points, k) {
    let result = -Infinity;
    let queue = [];

    for(let point of points) {
        while(queue.length && point[0] - queue[0][1] > k) {
            queue.shift();
        }

        if(queue.length) {
            result = Math.max(result, queue[0][0] + point[1] + point[0]);
        }

        while(queue.length && point[1] - point[0] > queue[queue.length - 1][0]) {
            queue.pop();
        }

        queue.push([point[1] - point[0], point[0]]);
    }

    return result;
};
// insert delete gettrandom
var RandomizedCollection = function() {
  this.data = {};
  this.arr = [];
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedCollection.prototype.insert = function(val) {
  if(!(val in this.data)){
      this.data[val] = [this.arr.length];
      this.arr.push(val);
      return true;
  } else {
      const item = this.data[val];
      item.push(this.arr.length);
      this.data[val] = item;
      this.arr.push(val);
      return false;
  }
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedCollection.prototype.remove = function(val) {
  if(val in this.data){
      const item = this.data[val];
      const arrayIndex = item.pop();
      if(arrayIndex !== this.arr.length-1) {
          const arrayLastItem = this.arr[this.arr.length-1];
          this.arr[arrayIndex] = arrayLastItem;
          const mapLast = this.data[arrayLastItem];
          mapLast[mapLast.length-1] = arrayIndex;
          const soreted = mapLast.sort((a,b)=> a-b);
          this.data[arrayLastItem] = soreted;
      }
      this.arr.pop();
      if(item.length === 0){
          delete this.data[val];
      }
      return true;
  }
  return false;
};

/**
* @return {number}
*/
RandomizedCollection.prototype.getRandom = function() {
  const randomIdx = Math.floor(Math.random() * this.arr.length);
  return this.arr[randomIdx];
};

/** 
* Your RandomizedCollection object will be instantiated and called as such:
* var obj = new RandomizedCollection()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/
