<template>
  <el-dialog
    title="Game Instructions"
    :visible="visible"
    :before-close="onClose"
  >
    <ul>
      <li class="mb-2">
        <b>1.</b> Enter your username
        <ul class="list-disc list-inside ml-3">
          <li class="text-xs text-red-500">
            Only alphanumeric, dashes and underscores allowed
          </li>
        </ul>
      </li>
      <li class="mb-2">
        <b>2.</b> Enter a list of cards (player's hand)
        <ul class="list-disc list-inside ml-3">
          <li class="text-xs text-red-500">
            1 to 13 cards
          </li>
          <li class="text-xs text-red-500">
            Available cards: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
          </li>
          <li class="text-xs text-red-500">
            List must contain distinct values
          </li>
        </ul>
      </li>
      <li class="mb-2">
        <b>3.</b> The game will generate a random list of cards (computer's hand)
      </li>
      <li>
        <b>4.</b>
        The hands are compared card by card in order.
        The higher card scores a point.
        The hand with more points win!
      </li>
    </ul>
  </el-dialog>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    visible: Boolean,
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
  },
});
</script>
