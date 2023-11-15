const { getData } = require('./utils/general-utils');
const { createArrayOfArrays, findTotals } = require('./utils/01-utils');

const path = `${__dirname}/data/elf-calories.txt`;

function findHighestTotal(arrayOfTotals) {
  return Math.max(...arrayOfTotals);
}

getData(path)
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
