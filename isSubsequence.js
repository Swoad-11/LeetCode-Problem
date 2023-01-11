var isSubsequence = function (s, t) {
    if (s.length > t.length) { return false }

    let count = 0;
    let i = 0;
    let j = 0;
    while (j < t.length) {
        if (t[j] == s[i]) {
            i++;
            j++;
            count++;
        }
        else {
            j++;
        }
    }
    if (count == s.length) {
        return true
    }
    else {
        return false
    }
};