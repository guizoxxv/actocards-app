<template>
<el-dialog
  title="Game Results"
  :visible="visible"
  :before-close="onClose"
>
  <h3 class="text-center text-lg mb-8 ">
    {{ game.win ? 'YOU WON!' : 'YOU LOST!' }}
  </h3>
  <div class="flex items-center justify-between">
    <span class="font-bold">Username:</span>
    <span class="font-mono">{{ game.player.name }}</span>
  </div>
  <div class="flex items-center justify-between">
    <span class="font-bold">Your hand:</span>
    <span class="font-mono">{{ hands.player }}</span>
  </div>
  <div class="flex items-center justify-between">
    <span class="font-bold">Computer hand:</span>
    <span class="font-mono">{{ hands.computer }}</span>
  </div>
  <h4 class="text-center text-lg underline my-5">Score</h4>
  <div class="flex items-center justify-center text-lg">
    <span class="text-xs mr-3">(You)</span>
    {{ game.player_score }}
    <span class="text-xl font-bold mx-5">X</span>
    {{ game.computer_score }}
    <span class="text-xs ml-3">(Computer)</span>
  </div>
  <h4 class="text-center text-lg underline my-5">Stats</h4>
  <div>
    <div class="flex items-center justify-between">
      <span class="font-bold">Games:</span>
      <span class="font-mono">{{ game.player.games }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="font-bold">Wins:</span>
      <span class="font-mono">{{ game.player.wins }}</span>
    </div>
  </div>
</el-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { GameResultInterface } from '@/interfaces/gameResult.interface';
import { HandsInterface } from '@/interfaces/hands.interface';

export default Vue.extend({
  props: {
    visible: Boolean,
    game: {
      type: Object as () => GameResultInterface,
    },
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
  },
  computed: {
    hands(): HandsInterface {
      const originalHands = JSON.parse(this.game.hands);
      const playerHand = originalHands.player.join(',');
      const computerHand = originalHands.computer.join(',');

      return {
        player: playerHand,
        computer: computerHand,
      };
    },
  },
});
</script>
