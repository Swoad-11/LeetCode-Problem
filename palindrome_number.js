var isPalindrome = function (x) {
    let letters = [];
    let number = x.toString();
    let reverse = "";
    for (let i = 0; i < number.length; i++) {
        letters.push(number[i]);
    }

    for (let i = 0; i < number.length; i++) {
        reverse += letters.pop();
    }

    if (number == reverse) {
        return true;
    }
    else return false;
};