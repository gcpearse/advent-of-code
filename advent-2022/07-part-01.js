const { getData } = require("./utils/general-utils");

const path = `${__dirname}/data/terminal-output.txt`;

function splitData(data) {
  return data.map((item) => item.split(' '));
}

function getDirectories(data) {
  let path = "";
  const directories = {
    "/root": 0
  };
  for (let item of data) {
    if (item[1] !== "ls" && item[0] !== "dir") {
      if (item[0] === "$") {
        if (item[1] === "cd") {
          if (item[2] === "..") {
            path = path.slice(0, path.lastIndexOf("/"));
          } else if (item[2] === "/") {
            path = "/root";
          } else {
            path = `${path}/${item[2]}`;
            directories[path] = 0;
          }
        }
      } else {
        if (item[0] !== "dir") {
          let temp = path;
          while (temp !== "") {
            directories[temp] += +item[0];
            temp = temp.slice(0, temp.lastIndexOf("/"));
          }
        }
      }
    }
  }
  return directories;
}

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
