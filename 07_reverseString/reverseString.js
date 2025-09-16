const reverseString = function(str) {
    var strSplit = str.split("");
    var reverseArray = strSplit.reverse();
    var joinArray = reverseArray.join("");
    return joinArray
};

// Do not edit below this line
module.exports = reverseString;
