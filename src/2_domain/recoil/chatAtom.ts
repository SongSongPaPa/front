import { ChatInfo } from "../Chat";
import { atom } from "recoil";

export const chatRoomListState = atom<ChatInfo[]>({
  key: "chatrooms",
  default: [],
});
