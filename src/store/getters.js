import {
  WHITE,
  BLACK,
  BLANK,
  DIRECTIONS,
  DIRECTIONS_COUNT,
  coordinates,
  cellIndex,
  playableCell,
} from '@/store/commons';

export default {
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
