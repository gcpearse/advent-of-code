const fs = require('fs/promises');

exports.getDataString = (path) => {
  return fs.readFile(path)
    .then((data) => {
      return data.toString();
    });
};
