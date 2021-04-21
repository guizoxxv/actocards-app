import Vue from 'vue';
import Vuex from 'vuex';
import { Notification } from 'element-ui';
import { Player } from '../interfaces/player.interface';
import { leaderboardRequest } from '../services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leaderboardData: [] as Player[],
  },
  mutations: {
    setLeaderboardData(state, players: Player[]): void {
      state.leaderboardData = players.map((player: Player, index: number) => (
        {
          position: index + 1,
          name: player.name,
          games: player.games,
          wins: player.wins,
          losses: player.losses,
          ties: player.ties,
        }
      ));
    },
  },
  actions: {
    async fetchLeaderboard(): Promise<void> {
      try {
        const response = await leaderboardRequest();

        this.commit('setLeaderboardData', response);
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
