const { getDirectories, splitData } = require("./utils/07-utils");
const { getData } = require("./utils/general-utils");

const path = `${__dirname}/data/terminal-output.txt`;

function filterDirectories(directories) {
  for (let key in directories) {
    if (directories[key] > 100000) delete directories[key];
  }
  return directories;
}

function sumSizes(filteredDirectories) {
  const allValues = Object.values(filteredDirectories);
  return allValues.reduce((a, b) => a + b);
}

getData(path)
  .then((data) => {
    return splitData(data);
  })
  .then((result) => {
    return getDirectories(result);
  })
  .then((result) => {
    return filterDirectories(result);
  })
  .then((result) => {
    return sumSizes(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
