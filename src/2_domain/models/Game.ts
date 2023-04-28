import { User } from "./User";

export interface GameLog {
  winner: User;
  looser: User;
  score: number;
}
