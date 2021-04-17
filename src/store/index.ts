import Vue from 'vue';
import Vuex from 'vuex';
import { Player } from '../interfaces/player.interface';
import { leaderboardRequest } from '../services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tableData: [],
  },
  mutations: {
  },
  actions: {
    async fetchLeaderboard() {
      const response = await leaderboardRequest();

      this.state.tableData = response.map((player: Player, index: number) => (
        {
          position: index + 1,
          name: player.name,
          games: player.games,
          wins: player.wins,
        }
      ));
    },
  },
  modules: {
  },
});
