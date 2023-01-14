var smallerNumbersThanCurrent = function (nums) {
    let count = 0;
    let ans = [];
    let i, j;
    for (i = 0; i < nums.length; i++) {
        for (j = nums.length - 1; j >= 0; j--) {
            if (nums[j] < nums[i]) {
                count++;
            }
        }
        ans[i] = count;
        count = 0;
    }
    return ans;
};