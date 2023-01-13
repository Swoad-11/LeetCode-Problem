var numIdenticalPairs = function (nums) {
    let i, j;
    let count = 0;
    let n = nums.length;
    for (i = 0; i < n; i++) {
        for (j = n - 1; j >= 0; j--) {
            if (nums[i] == nums[j] && i < j) {
                count++;
            }
        }
    }
    return count;
};