var kidsWithCandies = function (candies, extraCandies) {
    let max = Math.max(...candies);
    let ans = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies < max) {
            ans[i] = false;
        }
        else {
            ans[i] = true;
        }
    }
    return ans;
};