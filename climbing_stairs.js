var climbStairs = function (n) {
    let step = [];
    step[0] = 0;
    step[1] = 1;
    step[2] = 2;

    for (let i = 3; i <= n; i++) {
        step[i] = step[i - 1] + step[i - 2];
    }

    return step[n];
};