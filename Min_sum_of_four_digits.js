var minimumSum = function (num) {
    const x = num.toString().split('').sort();
    return (parseInt(x[0] + x[2]) + parseInt(x[1] + x[3]));
};