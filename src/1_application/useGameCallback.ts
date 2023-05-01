import { useRecoilCallback } from "recoil";

const useChatCallbacks = () => {
  /* ================================= */
  /*             Broadcast             */
  /* ================================= */

  const onCreateChat = useRecoilCallback(({ set }) => (newChat: ChatPublicDto) => {
    set(chatRoomListState, (prev) => {
      const data: ChatInfo = {
        chatId: newChat.chatId,
        ownerId: newChat.ownerId,
        adminId: newChat.adminId,
        type: typeConverter(newChat.type),
        name: newChat.name,
      };
      return [...prev, data];
    });
  });
  ㅎ;
  /* ============================= */
  /*             Group             */
  /* ============================= */
  /* ============================== */
  /*             Single             */
  /* ============================== */

  //성수한테 물어봐야함
  // const onInviteUser = useRecoilCallback(({ set }) => (data: { chatId: number; sourceId: number }) => {
  //   set(chatRoomListState, (prev) => {
  //     const message: ChatMessage = { ...data, system: false };
  //     return [...prev, message];
  //   });
  // });

  return {};
};

export default useChatCallbacks;
