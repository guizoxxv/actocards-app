<template>
  <div id="app">
    <main class="p-3 flex flex-col items-center justify-center">
      <div class="content">
        <h1 class="text-center mb-5">ACTOCARDS</h1>
        <Game class="mb-5" />
        <Leaderboard />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'tailwindcss/tailwind.css';
import Game from '@/components/Game.vue';
import Leaderboard from '@/components/Leaderboard.vue';
import '@/assets/app.scss';

@Component({
  components: {
    Game,
    Leaderboard,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.content {
  max-width: 960px;
}
</style>
