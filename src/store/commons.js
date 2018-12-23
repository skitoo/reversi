
export const INITIAL_BOARD = [
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 2, 0, 0, 0,
  0, 0, 0, 2, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

export const BLANK = 0;
export const BLACK = 1;
export const WHITE = 2;

export const WIDTH = 8;
export const HEIGHT = 8;

export const DIRECTIONS = [
  [-1, -1], // NO
  [0, -1], // N
  [1, -1], // NE
  [-1, 0], // O
  [1, 0], // E
  [-1, 1], // SO
  [0, 1], // S
  [1, 1], // SE
];
export const DIRECTIONS_COUNT = DIRECTIONS.length;


export const coordinates = index => [index % WIDTH, Math.floor(index / WIDTH)];

export const cellIndex = (x, y) => x + y * WIDTH;


export const playableCell = (board, [x, y], [xDir, yDir], opponent, player) => {
  let curX = x;
  let curY = y;
  let hasOpponent = true;
  let prevIsOpponent = false;
  let currentCell;
  while (curX > 0 && curX < WIDTH && curY > 0 && curY < HEIGHT && hasOpponent) {
    curX += xDir;
    curY += yDir;
    currentCell = board[cellIndex(curX, curY)];
    hasOpponent = currentCell === opponent;
    if (hasOpponent) {
      prevIsOpponent = hasOpponent;
    }
  }
  return prevIsOpponent && currentCell === player;
};

export const reversibleCellsByDirection = (board, [x, y], [xDir, yDir], player) => {
  let curX = x + xDir;
  let curY = y + yDir;
  let result = [];
  let playerFound = false;
  let blankFound = false;
  let currentCell;
  while (curX > 0 && curX < WIDTH && curY > 0 && curY < HEIGHT && !playerFound && !blankFound) {
    currentCell = board[cellIndex(curX, curY)];
    playerFound = currentCell === player;
    blankFound = currentCell === BLANK;
    if (!playerFound && !blankFound) {
      result.push([curX, curY]);
    }
    curX += xDir;
    curY += yDir;
  }
  if (blankFound) {
    result = [];
  }
  return result;
};
