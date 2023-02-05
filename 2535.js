var differenceOfSum = function (nums) {
    let n, sum = 0, sum2 = 0;
    for (let i = 0; i < nums.length; i++) {
        n = nums[i];
        sum += n;

        while (n > 0) {
            sum2 += n % 10;
            n = Math.floor(n / 10);
        }
    }

    return Math.abs(sum - sum2)
};