const fs = require("fs/promises");

exports.getData = async (path) => {
  const data = await fs.readFile(path);
  return data.toString().split("\n");
};
