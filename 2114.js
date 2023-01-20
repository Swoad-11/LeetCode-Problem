var mostWordsFound = function (sentences) {
    let n = sentences.length;
    let ans = 0;
    let temp = 0;
    for (let i = 0; i < n; i++) {
        temp = sentences[i].split(" ").length;
        if (temp > ans) {
            ans = temp;
        }
    }
    return ans;
};