<template>
<el-dialog
  title="Game Results"
  :visible="visible"
  :before-close="onClose"
  lock-scroll
  width="80%"
>
  <h3 class="text-center text-lg mb-8 ">
    <el-alert
      :title="gameStatus.text"
      :type="gameStatus.type"
      center
      :closable="false"
    />
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
    <div class="flex items-center justify-between">
      <span class="font-bold">Losses:</span>
      <span class="font-mono">{{ game.player.losses }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="font-bold">Ties:</span>
      <span class="font-mono">{{ game.player.ties }}</span>
    </div>
  </div>
</el-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { Game } from '@/interfaces/game.interface';
import { GameStatus } from '@/interfaces/gameStatus.interface';
import { Hands } from '@/interfaces/hands.interface';

export default Vue.extend({
  props: {
    visible: Boolean,
    game: {
      type: Object as () => Game,
    },
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
  },
  computed: {
    hands(): Hands {
      const originalHands = JSON.parse(this.game.hands);
      const playerHand = originalHands.player.join(',');
      const computerHand = originalHands.computer.join(',');

      return {
        player: playerHand,
        computer: computerHand,
      };
    },
    gameStatus(): GameStatus {
      if (this.game.win) {
        return {
          text: 'YOU WIN!',
          type: 'success',
        };
      }

      if (this.game.lose) {
        return {
          text: 'YOU LOSE!',
          type: 'error',
        };
      }

      return {
        text: "IT'S A TIE!",
        type: 'warning',
      };
    },
  },
});
</script>
