var countPairs = function (nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j >= 0; j--) {
            if (nums[i] == nums[j]) {
                if (i < j && ((i * j) % k == 0)) {
                    count++;
                }
            }
        }
    }
    return count;
};