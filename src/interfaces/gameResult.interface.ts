import { Player } from './player.interface';

export interface GameResultInterface {
  id: number;
  player: Player;
  hands: string;
  player_score: number;
  computer_score: number;
  win: boolean;
  created_at: Date;
  updated_at: Date;
}