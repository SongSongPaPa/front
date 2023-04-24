import { atom } from "recoil";

interface ChatRoomItem {
  title: string;
  headCount: number;
  visible?: string;
  password?: string;
}

interface MessageItem {
  name: string;
  content: string;
}

export const chatRoomsState = atom<ChatRoomItem[]>({
  key: "chatrooms",
  default: [],
});

export const messagesState = atom<MessageItem[]>({
  key: "messages",
  default: [],
});
