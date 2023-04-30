export interface GamePlayerDto {
  userId: number;
  score: number;
  position: number[];
}

export interface GameBallDto {
  speed: number;
  position: number;
  deltaX: number;
  deltaY: number;
}

export interface GamePublicDto {
  gameId: number;
  ownerId: number;
  name: string;
  speed: number;
}

export interface GamePrivateDto {
  room: string;
  players: GamePlayerDto[];
  watcher: number[];
  ball: GameBallDto;
  totalScore: number;
  round: number;
  pause: boolean;
  onGame: boolean;
  onRound: boolean;
}

interface GameSessionDto {
  public: GamePublicDto;
  private: GamePrivateDto;
}

export default GameSessionDto;
