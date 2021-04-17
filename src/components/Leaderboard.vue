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
import Vue from 'vue';
import { Player } from '../interfaces/player.interface';
import { leaderboardRequest } from '../services/api';

export default Vue.extend({
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
  async mounted() {
    const response = await leaderboardRequest();

    this.$data.tableData = response.map((player: Player, index: number) => (
      {
        position: index + 1,
        name: player.name,
        games: player.games,
        wins: player.wins,
      }
    ));
  },
});
</script>
