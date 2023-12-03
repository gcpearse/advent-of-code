const { getData } = require("./utils/general-utils");

const path = `${__dirname}/data/game-record.txt`;

function sliceData(data) {
  return data.map((line) => {
    return line.slice(line.indexOf(":") + 2);
  });
}

function parseGames(data) {
  const parsedData = data.map((line) => {
    return line
      .replaceAll(";", ",");
  });
  const games = parsedData.map((line) => {
    return line.split(", ");
  });
  return games.map((game) => {
    return game.map((move) => {
      return move.split(" ");
    });
  });
}

function tallyCubes(games) {
  const result = [];
  for (let game of games) {
    const tally = {
      red: 0,
      green: 0,
      blue: 0
    };
    for (let i = 0; i < game.length; i++) {
      if (+game[i][0] > tally[game[i][1]]) {
        tally[game[i][1]] = +game[i][0];
      }
    }
    result.push(tally);
  }
  return result;
}

function findPossibleGames(tallies) {
  let result = 0;
  for (let tally of tallies) {
    if (tally.red <= 12 && tally.green <= 13 && tally.blue <= 14) {
      result += tallies.indexOf(tally) + 1;
    }
  }
  return result;
}

getData(path)
  .then((data) => {
    return sliceData(data);
  })
  .then((data) => {
    return parseGames(data);
  })
  .then((data) => {
    return tallyCubes(data);
  })
  .then((result) => {
    return findPossibleGames(result);
  })
  .then((result) => {
    console.log(result);
  });
