import { ChatInfo } from "../Chat";
import { atom } from "recoil";

export const chatRoomListState = atom<ChatInfo[]>({
  key: "chatrooms",
  default: [],
});

interface MessageItem {
  name: string;
  content: string;
}

export const MessageListState = atom<MessageItem[]>({
  key: "messagelist",
  default: [],
});
