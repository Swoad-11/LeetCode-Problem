var isAnagram = function (s, t) {
    let count = 0;
    let S = [];
    let T = [];
    if (s.length != t.length) {
        return false;
    }
    else {
        for (let i = 0; i < s.length; i++) {
            S[i] = s[i];
            T[i] = t[i];
        }
        let sortS = S.sort();
        let sortT = T.sort();
        for (let i = 0; i < s.length; i++) {
            if (sortS[i] == sortT[i]) {
                count++;
            }
        }
        if (count == s.length) {
            return true;
        }
        else
            return false;
    }

};
