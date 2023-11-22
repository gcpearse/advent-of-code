const { getDirectories, splitData } = require("./utils/07-utils");
const { getData } = require("./utils/general-utils");

const path = `${__dirname}/data/terminal-output.txt`;

function findDirectoryToDelete(directories) {
  const usedSpace = directories["/root"];
  const requiredSpace = usedSpace - 40000000;
  const sortedValues = Object.values(directories).sort((a, b) => a - b);
  for (let value of sortedValues) {
    if (value > requiredSpace) {
      return value;
    }
  }
}

getData(path)
  .then((data) => {
    return splitData(data);
  })
  .then((result) => {
    return getDirectories(result);
  })
  .then((result) => {
    return findDirectoryToDelete(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
