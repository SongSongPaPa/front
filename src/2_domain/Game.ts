//게임방과 관련된 모델

export interface GameRoomInfo {
  gameId: number;
  ownerId: number;
  name: string;
  speed: number;
  // onGame: boolean;
  // onRound: boolean;
}

// 게임 중과 관련된 모델

export interface PlayerInfo {
  userId: number;
  score: number;
  position: number[];
}

export interface BallInfo {
  speed: number;
  position: number;
}

export interface GameInfo {
  gameId: number;
  ownerId: number;
  name: string;
  speed: number;
  players: PlayerInfo[];
  ball: BallInfo;
  round: number;
  totalScore: number;
  watcher: number[];
  onGame: boolean;
  onRound: boolean;
}

export interface GameScoreInfo {
  winnerUserId: number;
  winnerScore: number;
  winnerPosition: number[];
  looserUserId: number;
  looserScore: number;
  looserPosition: number[];
}
