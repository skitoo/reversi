<template>
  <div
    class="piece"
    :class="{ white, black }">
  </div>
</template>

<script>
import { WHITE, BLACK } from '@/store/commons';

export default {
  props: {
    color: {
      required: true,
      type: Number,
    },
  },
  computed: {
    white() {
      return this.color === WHITE;
    },
    black() {
      return this.color === BLACK;
    },
  },
};
</script>

<style scoped>
.piece {
  width: 80%;
  height: 80%;
  border-radius: 50%;
  box-shadow: 3px 3px 0 #555;
  margin: auto;
}
.white {
  background: #fff;
}
.black {
  background: #000;
}
</style>
