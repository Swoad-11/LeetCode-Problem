var targetIndices = function (nums, target) {
    let ans = [];
    let sorted = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            ans.push(i);
        }
    }
    return ans;
};