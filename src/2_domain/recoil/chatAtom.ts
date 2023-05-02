import { ChatInfo } from "../Chat";
import { atom } from "recoil";

export const chatRoomListState = atom<ChatInfo[]>({
  key: "chatrooms",
  default: [
    {
      chatId: 1,
      ownerId: 1,
      adminId: 1,
      type: "PUBLIC",
      name: "test1",
    },
    {
      chatId: 1,
      ownerId: 1,
      adminId: 1,
      type: "PUBLIC",
      name: "test2",
    },
    {
      chatId: 1,
      ownerId: 1,
      adminId: 1,
      type: "PUBLIC",
      name: "test3",
    },
  ],
});

interface MessageItem {
  name: string;
  content: string;
}

export const MessageListState = atom<MessageItem[]>({
  key: "messagelist",
  default: [],
});
