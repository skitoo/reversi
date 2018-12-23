
export default {
  play(context, position) {
    const { currentPlayer } = context.state;
    const reversibleCells = context.getters.reversibleCells(position);
    reversibleCells.forEach((pos) => {
      context.commit('changePiece', { position: pos, color: currentPlayer });
    });
    context.commit('changePlayer');
  },
};
