import { Player } from './player.interface';

export interface Game {
  id: number;
  player: Player;
  hands: string;
  player_score: number;
  computer_score: number;
  win: boolean;
  lose: boolean;
  tie: boolean;
  created_at: Date;
  updated_at: Date;
}