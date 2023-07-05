var checkStraightLine = function (coordinates) {
  if (coordinates.length === 0 || coordinates.length === 1) return false;
  if (coordinates.length === 2) return true;

  let x1 = coordinates[0][0],
    x2 = coordinates[coordinates.length - 1][0];
  let y1 = coordinates[0][1],
    y2 = coordinates[coordinates.length - 1][1];
  let curv = Math.pow(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2), 1 / 2);

  for (let i = 1; i < coordinates.length - 1; i++) {
    if (
      Math.pow(
        Math.pow(x2 - coordinates[i][0], 2) +
          Math.pow(y2 - coordinates[i][1], 2),
        1 / 2
      ) !== curv
    ) {
      return false;
    }
  }

  return true;
};
