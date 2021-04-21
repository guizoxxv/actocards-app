<template>
<el-card class="box-card">
  <h2 class="text-center mb-5">
    <font-awesome-icon icon="trophy" />
    Leaderboard
  </h2>
  <el-table
    class="w-full"
    :data="leaderboardData"
    border
    stripe
    fit
  >
    <el-table-column
      prop="position"
      label="#"
      align="center"
      resizable
    />
    <el-table-column
      prop="name"
      label="Name"
      align="center"
      resizable
    />
    <el-table-column
      prop="games"
      label="Games"
      align="center"
      resizable
    />
    <el-table-column
      prop="wins"
      label="Wins"
      align="center"
      resizable
    />
    <el-table-column
      prop="losses"
      label="Losses"
      align="center"
      resizable
    />
    <el-table-column
      prop="ties"
      label="Ties"
      align="center"
      resizable
    />
  </el-table>
</el-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapState(['leaderboardData']),
  },
  mounted() {
    this.$store.dispatch('fetchLeaderboard');
  },
});
</script>
