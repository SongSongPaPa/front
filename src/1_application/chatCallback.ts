import { useRecoilCallback } from "recoil";
import { chatRoomListState } from "@root/2_domain/recoil/chatAtom";
import { PublicChatInfo } from "@root/2_domain/Chat";

const chatCallbacks = {
  onCreateChat: useRecoilCallback(({ set }) => (newChat: PublicChatInfo) => {
    set(chatRoomListState, (prev) => {
      return [...prev, newChat];
    });
  }),
};

export default chatCallbacks;
