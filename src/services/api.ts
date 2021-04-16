import axios from 'axios';
import { PlayRequest } from '../interfaces/playRequest.interface';

const apiBaseUrl = process.env.VUE_APP_API_BASE_URL;

export async function playRequest({ name, cards }: PlayRequest) {
  const response = await axios.post(`${apiBaseUrl}/game/play`, {
    name: name.trim(),
    cards: cards.trim(),
  });

  return response.data;
}
