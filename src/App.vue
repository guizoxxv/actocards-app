<template>
  <div id="app" class="h-full flex items-center justify-center">
    <main>
      <h1>ACTOCARDS</h1>
      <Game />
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
