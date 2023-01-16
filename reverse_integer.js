var reverse = function (x) {

    let s = Math.abs(x).toString();
    let reverse = [];
    let ans = 0;
    for (let i = s.length - 1, j = 0; i >= 0; i--, j++) {
        reverse[i] = s[j];
    }
    for (let i = 0; i <= s.length; i++) {
        ans += reverse[i];
    }

    if (parseInt(ans) > (2 ** 31 - 1) || parseInt(ans) > (2 ** 31)) {
        return 0;
    }
    else {
        if (x > 0)
            return parseInt(ans);
        else
            return (parseInt(ans) * -1);
    }
};