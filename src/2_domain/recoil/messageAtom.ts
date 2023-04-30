import { atom } from "recoil";
import { ChatMessage } from "../ChatMessage";

export const messageListState = atom<ChatMessage[]>({
  key: "messages",
  default: [],
});
