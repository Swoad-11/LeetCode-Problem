var twoSum = function (nums, target) {
    let i, j;
    for (i = 0; i < nums.length; i++) {
        for (j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                let arr = [i, j];
                return arr;
            }
        }
    }
};