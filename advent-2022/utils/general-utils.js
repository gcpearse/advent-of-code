const fs = require('fs/promises')

exports.getData = (path) => {
  return fs.readFile(path)
    .then((data) => {
      return data.toString().split('\n');
    });
};
