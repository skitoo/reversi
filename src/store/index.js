import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const INITIAL_BOARD = [
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
const DIRECTIONS = [
  [-1, -1], // NO
  [0, -1], // N
  [1, -1], // NE
  [-1, 0], // O
  [1, 0], // E
  [-1, 1], // SO
  [0, 1], // S
  [1, 1], // SE
];
const DIRECTIONS_COUNT = DIRECTIONS.length;


export const state = {
  board: INITIAL_BOARD,
  currentPlayer: BLACK,
};

export const mutations = {
};

export const actions = {
};


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

export const getters = {
  playableCells(state) {
    const { board, currentPlayer } = state;
    const opponent = currentPlayer === WHITE ? BLACK : WHITE;
    const cells = [];
    board.forEach((value, index) => {
      if (value === BLANK) {
        const coord = coordinates(index);

        let curDirection = 0;
        let isPlayable = false;
        while (!isPlayable && curDirection < DIRECTIONS_COUNT) {
          const direction = DIRECTIONS[curDirection];
          curDirection += 1;
          isPlayable = playableCell(board, coord, direction, opponent, currentPlayer);
        }
        if (isPlayable) {
          cells.push(cellIndex(coord[0], coord[1]));
        }
      }
    });
    return cells;
  },
};


export const createStore = (options = {
  actions: {},
  mutations: {},
  getters: {},
  state: {},
}) => (
  new Vuex.Store({
    state: {
      ...state,
      ...options.state,
    },
    mutations: {
      ...mutations,
      ...options.mutations,
    },
    actions: {
      ...actions,
      ...options.actions,
    },
    getters: {
      ...getters,
      ...options.getters,
    },
  })
);
