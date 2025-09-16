const removeFromArray = function (array, ...args) {
      const newArray = [];

  array.forEach((nbr) => {
    if (!args.includes(nbr)) {
      newArray.push(nbr);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
