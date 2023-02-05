var findMedianSortedArrays = function (nums1, nums2) {
    let ans = [];
    ans = (nums1.concat(nums2)).sort((a, b) => a - b);
    if (ans.length % 2 == 0) {
        return (ans[Math.floor((ans.length / 2))] + ans[Math.floor((ans.length / 2)) - 1]) / 2
    }
    else {
        return ans[Math.floor((ans.length / 2))];
    }
};