const repeatString = function (text, number) {
  var textReturn = "";
  if(Math.sign(number)===-1)
  {
    return "ERROR";
  }
  for (let i = 0; i < number; i++) {
    textReturn = textReturn + text;
  }
  return textReturn;
};

// Do not edit below this line
module.exports = repeatString;
