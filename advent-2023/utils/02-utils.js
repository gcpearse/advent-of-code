exports.sliceData = (data) => {
  return data.map((line) => {
    return line.slice(line.indexOf(":") + 2);
  });
};

exports.parseGames = (data) => {
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
};

exports.tallyCubes = (games) => {
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
};
