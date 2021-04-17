export interface GameResultInterface {
  id: number;
  player: string;
  hands: string;
  player_score: number;
  computer_score: number;
  win: boolean;
  created_at: Date;
  updated_at: Date;
}