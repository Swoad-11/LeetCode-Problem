var runningSum = function (nums) {
    let n = nums.length;
    let arr = [];
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum = sum + nums[i];
        arr[i] = sum;
    }
    return arr;
};