import { ChatInfo, PublicChatInfo } from "../Chat";
import { atom } from "recoil";

export const chatRoomListState = atom<PublicChatInfo[]>({
  key: "chatrooms",
  default: [],
});

export const chatState = atom<ChatInfo>({
  key: "invited chat room",
  default: undefined,
});

export const focusedChatState = atom<number>({
  key: "focused chat id",
  default: 0,
});
