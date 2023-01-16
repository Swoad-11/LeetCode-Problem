var isAnagram = function (s, t) {
    let count = 0;
    let S = [];
    let T = [];
    if (s.length != t.length) {
        return false;
    }
    else if (s == t) {
        return true;
    }
    else {
        for (let i = 0; i < s.length; i++) {
            S[i] = s[i];
            T[i] = t[i];
        }

        if (S == T) {
            console.log(1);
        }
        else
            console.log(2);
    }

};

let s = "anagram", t = "nagaram";

isAnagram(s, t);