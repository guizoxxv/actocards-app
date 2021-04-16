<template>
  <el-card class="box-card">
    <h2 class="text-center mb-5">Leaderboard</h2>
    <el-table
      class="w-full"
      :data="tableData"
      border
      stripe
    >
      <el-table-column
        prop="position"
        label="#"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
      >
      </el-table-column>
      <el-table-column
        prop="games"
        label="Games"
      >
      </el-table-column>
      <el-table-column
        prop="wins"
        label="Wins"
      >
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      tableData: [
        {
          position: 1,
          name: 'Fulano',
          games: 10,
          wins: 10,
        },
        {
          position: 2,
          name: 'Ciclano',
          games: 10,
          wins: 8,
        },
        {
          position: 1,
          name: 'Beltrano',
          games: 10,
          wins: 7,
        },
      ],
    };
  },
})
export default class Leaderboard extends Vue {}
</script>

<style lang="scss" scoped>
//
</style>
