var shuffle = function (nums, n) {
    let x = [];
    let y = [];
    let ans = [];
    let i, j;
    for (i = 0; i < n; i++) {
        ans[i * 2] = nums[i];
        ans[i * 2 + 1] = nums[i + n];
    }

    return ans;
};