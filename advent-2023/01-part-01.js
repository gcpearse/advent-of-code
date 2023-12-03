const { getData } = require("./utils/general-utils");

const path = `${__dirname}/data/calibration.txt`;

function splitData(data) {
  return data.map((line) => line.split(''));
}

function sumCalibrationValues(data) {
  const firstAndLast = [];
  for (let line of data) {
    firstAndLast.push((line.find((char) => {
      return char.match(/\d/);
    })) + (line.findLast((char) => {
      return char.match(/\d/);
    })));
  }
  return firstAndLast.reduce((a, b) => +a + +b);
}

getData(path)
  .then((data) => {
    return splitData(data);
  })
  .then((data) => {
    return sumCalibrationValues(data);
  })
  .then((result) => {
    console.log(result);
  });
