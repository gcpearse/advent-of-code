const fs = require('fs/promises');

function getCalorieData() {
  return fs.readFile(`${__dirname}/data/elf-calories.txt`)
    .then((data) => {
      return data.toString().split('\n');
    });
}

function createArrayOfArrays(items) {
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
}

function findTotals(arrayOfArrays) {
  return arrayOfArrays.map(array => {
    return array.reduce((a, b) => a + b);
  });
}

function findHighestTotal(arrayOfTotals) {
  return Math.max(...arrayOfTotals);
}

getCalorieData()
  .then((data) => {
    return createArrayOfArrays(data);
  })
  .then((result) => {
    return findTotals(result);
  })
  .then((result) => {
    return findHighestTotal(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
