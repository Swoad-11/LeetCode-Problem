var merge = function (nums1, m, nums2, n) {
    let count = 0;
    nums1.sort((a, b) => a - b);
    for (let i = 0; i < m + n; i++) {
        if (nums1[i] == 0) {
            if (count < n) {
                nums1[i] = nums1[i] + nums2[count];
                count++
            }
        }
    }
    return (nums1.sort((a, b) => a - b));
};