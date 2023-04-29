import { PublicChatInfo } from "../Chat";
import { atom } from "recoil";

export const chatRoomListState = atom<PublicChatInfo[]>({
  key: "chatrooms",
  default: [],
});
