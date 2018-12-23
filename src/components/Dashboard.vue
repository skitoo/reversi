<template>
  <div class="dashboard">
    <div class="score">
      <h2>Scores</h2>
      <div class="scores-container">
        <div>
          <h3 :class="{ currentPlayer: isBlackPlayerTurn }">
            Black
          </h3>
          <div class="score-value">{{blackPlayerScore}}</div>
        </div>
        <div>
          <h3 :class="{ currentPlayer: isWhitePlayerTurn }">
            White
          </h3>
          <div class="score-value">{{whitePlayerScore}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { BLACK, WHITE } from '@/store/commons';

export default {
  computed: {
    ...mapGetters([
      'blackPlayerScore',
      'whitePlayerScore',
    ]),
    isBlackPlayerTurn() {
      return this.$store.state.currentPlayer === BLACK;
    },
    isWhitePlayerTurn() {
      return this.$store.state.currentPlayer === WHITE;
    },
  },
};
</script>

<style scoped>
.dashboard {
  width: 50vw;
  margin: auto;
}

h2 {
  text-align: center;
  margin-bottom: 0;
}

@keyframes blink {
  0% { background: #fff; }
  100% { background: #C4E79A; }
}

h3 {
  padding: 6px 5px 3px;
  border: 1px solid #94C160;
  border-radius: 3px;
}

.scores-container {
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.currentPlayer {
  font-weight: bold;
  animation: blink 1s linear infinite;
}

.score-value {
  font-size: 1.5em;
}

</style>
