<template>
<div id="app">
  <el-container>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col class="content">
          <h1 class="text-center mb-5">ACTOCARDS</h1>
          <el-row class="mb-5">
            <el-col>
              <Game />
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <Leaderboard />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import 'tailwindcss/tailwind.css';
import Game from '@/components/Game.vue';
import Leaderboard from '@/components/Leaderboard.vue';
import '@/assets/app.scss';

export default Vue.extend({
  components: {
    Game,
    Leaderboard,
  },
});
</script>

<style lang="scss" scoped>
.content {
  max-width: 960px;
}
</style>
