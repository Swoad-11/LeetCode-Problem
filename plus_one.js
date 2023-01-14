var plusOne = function (digits) {
    let number = digits.join("");
    let increased = BigInt(number);
    increased++;
    let arr = increased.toString();
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans[i] = parseInt(arr[i]);
    }
    return ans;
};