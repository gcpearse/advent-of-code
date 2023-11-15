const fs = require('fs/promises');
const path = `${__dirname}/data/datastream-buffer.txt`;

function getDataString(path) {
  return fs.readFile(path)
    .then((data) => {
      return data.toString();
    });
}

function findMarker(data) {
  for (let i = 0; i < data.length; i++) {
    const marker = Array(data[i], data[i + 1], data[i + 2], data[i + 3]);
    const uniqueChars = new Set(marker);
    if (marker.length === uniqueChars.size) {
      return i + 4;
    }
  }
}

getDataString(path)
  .then((data) => {
    return findMarker(data);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
