var reverseString = function (s) {

    for (let i = 0, j = s.length - 1; i < j; i++, j--) {

        [s[i], s[j]] = [s[j], s[i]]; //destructuring, value swapped

    }
    return s;
};