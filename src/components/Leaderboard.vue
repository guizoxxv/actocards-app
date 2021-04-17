<template>
<el-card class="box-card">
  <h2 class="text-center mb-5">
    <font-awesome-icon icon="trophy" />
    Leaderboard
  </h2>
  <el-table
    class="w-full"
    :data="tableData"
    border
    stripe
  >
    <el-table-column
      prop="position"
      label="#"
      width="50px"
    />
    <el-table-column
      prop="name"
      label="Name"
    />
    <el-table-column
      prop="games"
      label="Games"
    />
    <el-table-column
      prop="wins"
      label="Wins"
    />
    <el-table-column
      prop="losses"
      label="Losses"
    />
    <el-table-column
      prop="ties"
      label="Ties"
    />
  </el-table>
</el-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    tableData() {
      return this.$store.state.tableData;
    },
  },
  mounted() {
    this.$store.dispatch('fetchLeaderboard');
  },
});
</script>
