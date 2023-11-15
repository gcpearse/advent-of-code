const fs = require('fs/promises');
const { createArrayOfArrays, findTotals } = require('./utils/01-utils');

function getCalorieData() {
  return fs.readFile(`${__dirname}/data/elf-calories.txt`)
    .then((data) => {
      return data.toString().split('\n');
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
