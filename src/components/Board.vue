<template>
  <div class="board-container">
    <div class="board">
      <div
        v-for="cell in cells"
        class="cell"
        :key="cell.key"
      >
        <piece
          v-if="cell.value !== 0"
          :color="cell.value"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Piece from '@/components/Piece.vue';

export default {
  components: {
    Piece,
  },
  computed: {
    ...mapState([
      'board',
    ]),
    cells() {
      return this.board.map((cell, index) => ({ key: `cell-${index}`, value: cell }));
    },
  },
};
</script>

<style scoped>
.board-container {
  width: 50vw;
  height: 50vw;
  border: 12px solid #6D5720;
  border-radius: 12px;
  margin: 0 auto;
  min-width: 300px;
  min-height: 300px;
  max-width: 700px;
  max-height: 700px;
}

.board {
  display: grid;
  grid-template-columns: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
  grid-template-rows: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
  width: 100%;
  height: 100%;
  background: #6C9A33;
}
.cell {
  width: 100%;
  height: 100%;
  box-shadow: inset 1px 1px 0 #94C160, inset -1px -1px 0 #477413;
  display: flex;
}
</style>
