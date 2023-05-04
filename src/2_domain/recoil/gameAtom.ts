import { atom } from "recoil";
import { GameInfo, GameRoomInfo, GameScoreInfo } from "../Game";

// 게임 방
export const gameRoomListState = atom<GameRoomInfo[]>({
  key: "waitingGame ready seconds",
  default: [],
});

export const gamingState = atom<GameInfo>({
  key: "gaming state",
  default: undefined,
});

export const readyGameState = atom<number>({
  key: "ready game seconds",
  default: 3,
});

export const endGameState = atom<GameScoreInfo>({
  key: "end game",
  default: undefined,
});
