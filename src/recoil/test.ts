import { atom } from "recoil";

interface Item {
  title: string;
  headCount: number;
  option: string;
}

interface ChatRoomItem {
  title: string;
  headCount: number;
  visible?: string;
  password?: string;
}

export const itemsState = atom<Item[]>({
  key: "items",
  default: [],
});

export const chatRoomsState = atom<ChatRoomItem[]>({
  key: "chatitems",
  default: [],
});

export const roomState = atom({
  key: "gameroom",
  default: {
    playerA: "",
    playerB: "",
  },
});
