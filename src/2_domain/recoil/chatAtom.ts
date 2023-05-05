import { ChatInfo } from "../Chat";
import { atom, selector, selectorFamily } from "recoil";

export const chatRoomListState = atom<ChatInfo[]>({
  key: "chatrooms",
  default: [],
});

export const chatState = atom<ChatInfo>({
  key: "invited chat room",
  default: undefined,
});
