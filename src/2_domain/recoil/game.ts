import { atom } from "recoil";
import { UserItem } from "./user";

interface GameWaitItem {
  playerA: UserItem;
  playerB: UserItem;
}

type GameRoomStatusType = "ONGAME" | "WAITING" | "FULL";

interface GameRoomItem {
  title: string;
  headCount: number;
  option: string;
  status: GameRoomStatusType;
}

export const gameWaitState = atom<GameWaitItem>({
  key: "gamewait",
  default: undefined,
});

export const gameRoomsState = atom<GameRoomItem[]>({
  key: "gamelist",
  default: [],
});
