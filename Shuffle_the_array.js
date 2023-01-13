var shuffle = function (nums, n) {
    let ans = [];
    let i;
    for (i = 0; i < n; i++) {
        ans[i * 2] = nums[i];
        ans[i * 2 + 1] = nums[i + n];
    }

    return ans;
};