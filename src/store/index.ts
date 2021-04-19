import Vue from 'vue';
import Vuex from 'vuex';
import { Notification } from 'element-ui';
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
      try {
        const response = await leaderboardRequest();

        this.state.tableData = response.map((player: Player, index: number) => (
          {
            position: index + 1,
            name: player.name,
            games: player.games,
            wins: player.wins,
            losses: player.losses,
            ties: player.ties,
          }
        ));
      } catch (e) {
        Notification.error({
          title: 'ERROR',
          message: 'Failed to fetch leaderboard data',
          duration: 4000,
        });
      }
    },
  },
  modules: {
  },
});
