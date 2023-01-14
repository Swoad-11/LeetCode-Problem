var lengthOfLastWord = function (s) {
    let str = s.trimEnd();
    let ans = [];
    if (str.length == 1) {
        return 1;
    }
    else {
        for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
            if (str[i] == ' ') {
                break;
            }
            ans[j] = str[i];
        }
        return (ans.length);
    }
};