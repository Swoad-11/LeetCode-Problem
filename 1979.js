/**
 * @param {number[]} nums
 * @return {number}
 */
var gcd = function (a, b) {

    if (a == 0 && b == 0)
        return 0;
    if (a == 0)
        return b;
    if (b == 0)
        return a;
    if (a == b)
        return a;
    if (a > b)
        return gcd(a - b, b);
    return gcd(a, b - a);
}

var findGCD = function (nums) {
    let sorted = nums.sort((a, b) => a - b);
    let a = sorted[0];
    let b = sorted[nums.length - 1]
    return gcd(a, b);
};