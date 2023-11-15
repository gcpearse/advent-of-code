const { getDataString } = require('./utils/06-utils');

const path = `${__dirname}/data/datastream-buffer.txt`;

function findMessageMarker(data) {
  for (let i = 0; i < data.length; i++) {
    const messageMarker = [];
    for (let j = 0; j < 14; j++) {
      messageMarker.push(data[i + j]);
    }
    const uniqueChars = new Set(messageMarker);
    if (messageMarker.length === uniqueChars.size) {
      return i + 14;
    }
  }
}

getDataString(path)
  .then((data) => {
    return findMessageMarker(data);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
