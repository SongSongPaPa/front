import { atom, selector } from "recoil";
import { GameInfo, GameRoomInfo, GameScoreInfo } from "../Game";
import { meState, userListState } from "./userAtom";

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

export const filteredUserListState = selector({
  key: "Game FilteredUserList",
  get: ({ get }) => {
    const gameInfo = get(gamingState);
    const list = get(userListState);

    if (gameInfo === undefined) {
      return [];
    }
    return gameInfo.players.map((player) => {
      return list.find((user) => user.id === player.userId)!;
    });
  },
});

export const focusedGameState = atom<[number, string]>({
  key: "focused game state",
  default: [0, ""],
});
