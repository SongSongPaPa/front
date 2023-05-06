import { ChatInfo } from "../Chat";
import { atom } from "recoil";

export const currentChatRoomState = atom<ChatInfo>({
  key: "currentChatInfo",
  default: undefined,
});

export const chatRoomListState = atom<ChatInfo[]>({
  key: "chatrooms",
  default: [],
});

export const chatState = atom<ChatInfo>({
  key: "invited chat room",
  default: undefined,
});
