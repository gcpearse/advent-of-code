exports.createArrayOfArrays = (items) => {
  const arrayOfArrays = [];
  let tempArray = [];
  for (let item of items) {
    if (item !== '') {
      tempArray.push(+item);
    } else {
      arrayOfArrays.push(tempArray);
      tempArray = [];
    }
  }
  return arrayOfArrays;
};

exports.findTotals = (arrayOfArrays) => {
  return arrayOfArrays.map(array => {
    return array.reduce((a, b) => a + b);
  });
};
