var countDigits = function (num) {
    let count = 0;
    if (num < 10) {
        return 1;
    }
    else {
        let str = num.toString();
        for (let i = 0; i < str.length; i++) {
            if (num % parseInt(str[i]) == 0) {
                count++;
            }
        }
        return count;
    }

};