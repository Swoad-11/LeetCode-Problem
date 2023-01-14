var isPalindrome = function (s) {
    let str = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let letter = [];
    let reverse = "";

    for (let i = 0; i < str.length; i++) {
        letter.push(str[i]);
    }
    for (let i = 0; i < str.length; i++) {
        reverse += letter.pop();
    }

    if (str == reverse) {
        return true;
    }
    else return false;

};