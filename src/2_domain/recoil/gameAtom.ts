import { atom } from "recoil";
import { GameInfo, GameRoomInfo, GameScoreInfo } from "../Game";

// export const waitingGameState = atom<>({});

// 게임 방
export const gameRoomListState = atom<GameRoomInfo[]>({
  key: "waitingGame ready seconds",
  default: [],
});

// 게임 중

export const readyGameState = atom<number>({
  key: "waitingGame ready seconds",
  default: 3,
});

export const gamingState = atom<GameInfo>({
  key: "game seconds",
  default: undefined,
});

export const endGameState = atom<GameScoreInfo>({
  key: "game seconds",
  default: undefined,
});
