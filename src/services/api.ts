import axios from 'axios';
import { Game } from '../interfaces/game.interface';
import { Player } from '../interfaces/player.interface';
import { PlayRequest } from '../interfaces/playRequest.interface';

const apiBaseUrl = process.env.VUE_APP_API_BASE_URL;

export async function playRequest({ name, cards }: PlayRequest): Promise<Game> {
  const response = await axios.post<Game>(`${apiBaseUrl}/game/play`, {
    name: name.trim(),
    cards: cards.trim(),
  });

  return response.data;
}

export async function leaderboardRequest(): Promise<Player[]> {
  const response = await axios.get<Player[]>(`${apiBaseUrl}/player/leaderboard`);

  return response.data;
}
