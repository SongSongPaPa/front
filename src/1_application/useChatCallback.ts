import { useRecoilCallback } from "recoil";
import { chatRoomListState } from "@root/2_domain/recoil/chatAtom";
import { ChatInfo, typeConverter } from "@root/2_domain/Chat";
import ChatSessionDto, { ChatPublicDto } from "@root/3_infrastructure/dto/socket/chat.dto";
import { messageListState } from "@root/2_domain/recoil/messageAtom";
import { ChatMessage } from "@root/2_domain/ChatMessage";

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

  const onUpdateChat = useRecoilCallback(({ set }) => (newChat: ChatPublicDto) => {
    set(chatRoomListState, (prev) => {
      const chat = prev.find((e) => e.chatId === newChat.chatId);
      if (chat === undefined) {
        console.log("⛔️ 없는 채팅방인뎁쇼");
        return prev;
      }
      chat.adminId = newChat.adminId;
      chat.ownerId = newChat.ownerId;
      chat.type = typeConverter(newChat.type);
      chat.name = newChat.name;
      return prev.map((element) => (element.chatId === chat.chatId ? chat : element));
    });
    set(messageListState, (prev) => {
      const message: ChatMessage = { message: "방 정보가 바뀌었다리", sourceId: 0, direct: false, system: true };
      return [...prev, message];
    });
  });

  const onSetAdmin = useRecoilCallback(({ set }) => (data: { chatId: number; adminId: number }) => {
    set(chatRoomListState, (prev) => {
      const chat = prev.find((e) => e.chatId === data.chatId);
      if (chat === undefined) {
        console.log("⛔️ 없는 채팅방인뎁쇼");
        return prev;
      }
      chat.adminId = data.adminId;
      return prev.map((element) => (element.chatId === chat.chatId ? chat : element));
    });
    //Todo: userAtom이 만들어지면, message에 유저이름을 넣어보자.
    set(messageListState, (prev) => {
      const message: ChatMessage = {
        message: `방장이 ${data.adminId}바뀌었다리`,
        sourceId: 0,
        direct: false,
        system: true,
      };
      return [...prev, message];
    });
  });

  const onDeleteChat = useRecoilCallback(({ set }) => (data: { chatId: number }) => {
    set(chatRoomListState, (prev) => {
      return prev.filter((element) => element.chatId !== data.chatId);
    });
    set(messageListState, (prev) => {
      return [];
    });
  });

  /* ============================= */
  /*             Group             */
  /* ============================= */

  const onGroupJoinChat = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    set(chatRoomListState, (prev) => {
      const chatRoom = prev.find((e) => !(e.users === null || e.users === undefined));
      if (chatRoom === undefined) {
        console.log("⛔️ 현재 들어가있는 채팅방 없는뎁쇼");
        return prev;
      }
      chatRoom.users!.push(data.userId);
      return prev.map((element) => (element.chatId === chatRoom.chatId ? chatRoom : element));
    });
    //Todo: userAtom이 만들어지면, message에 유저이름을 넣어보자.
    set(messageListState, (prev) => {
      const message: ChatMessage = {
        message: `${data.userId}가 들어왔다`,
        sourceId: data.userId,
        direct: false,
        system: true,
      };
      return [...prev, message];
    });
  });

  const onGroupLeaveChat = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    set(chatRoomListState, (prev) => {
      const chatRoom = prev.find((e) => !(e.users === null || e.users === undefined));
      if (chatRoom === undefined) {
        console.log("⛔️ 현재 들어가있는 채팅방 없는뎁쇼");
        return prev;
      }
      chatRoom.users = chatRoom.users?.filter((ele) => ele !== data.userId);
      return prev.map((element) => (element.chatId === chatRoom.chatId ? chatRoom : element));
    });
    //Todo: userAtom이 만들어지면, message에 유저이름을 넣어보자.
    set(messageListState, (prev) => {
      const message: ChatMessage = {
        message: `${data.userId}가 나갔다`,
        sourceId: data.userId,
        direct: false,
        system: true,
      };
      return [...prev, message];
    });
  });

  const onGroupSendMessage = useRecoilCallback(
    ({ set }) =>
      (data: { sourceId: number; message: string; direct: boolean }) => {
        set(messageListState, (prev) => {
          const message: ChatMessage = { ...data, system: false };
          return [...prev, message];
        });
      }
  );

  const onKickUser = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    set(chatRoomListState, (prev) => {
      const chatRoom = prev.find((e) => !(e.users === null || e.users === undefined));
      if (chatRoom === undefined) {
        console.log("⛔️ 현재 들어가있는 채팅방 없는뎁쇼");
        return prev;
      }
      chatRoom.users = chatRoom.users?.filter((ele) => ele !== data.userId);
      return prev.map((ele) => (ele.chatId === chatRoom.chatId ? chatRoom : ele));
    });
    //Todo: userAtom이 만들어지면, message에 유저이름을 넣어보자.
    set(messageListState, (prev) => {
      const message: ChatMessage = {
        message: `${data.userId}가 강퇴당함`,
        sourceId: data.userId,
        direct: false,
        system: true,
      };
      return [...prev, message];
    });
  });

  const onMuteUser = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    set(chatRoomListState, (prev) => {
      const chatRoom = prev.find((e) => !(e.users === null || e.users === undefined));
      if (chatRoom === undefined) {
        console.log("⛔️ 현재 들어가있는 채팅방 없는뎁쇼");
        return prev;
      }
      chatRoom.users = chatRoom.users?.filter((ele) => ele !== data.userId);
      return prev.map((ele) => (ele.chatId === chatRoom.chatId ? chatRoom : ele));
    });
    //Todo: userAtom이 만들어지면, message에 유저이름을 넣어보자.
    set(messageListState, (prev) => {
      const message: ChatMessage = {
        message: `${data.userId}가 채금당함`,
        sourceId: data.userId,
        direct: false,
        system: true,
      };
      return [...prev, message];
    });
  });

  /* ============================== */
  /*             Single             */
  /* ============================== */

  const onSingleLeaveChat = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    set(chatRoomListState, (prev) => {
      const chatRoom = prev.find((e) => !(e.users === null || e.users === undefined));
      if (chatRoom === undefined) {
        console.log("⛔️ 현재 들어가있는 채팅방 없는뎁쇼");
        return prev;
      }
      chatRoom.room = undefined;
      chatRoom.password = undefined;
      chatRoom.users = undefined;
      chatRoom.kicked = undefined;
      chatRoom.muted = undefined;
      chatRoom.invited = undefined;
      //Todo: 나가는 기능 구현하세요
      return prev.map((element) => (element.chatId === chatRoom.chatId ? chatRoom : element));
    });
  });

  const onSingleJoinChat = useRecoilCallback(({ set }) => (newChat: ChatSessionDto) => {
    set(chatRoomListState, (prev) => {
      const chatRoom = prev.find((e) => !(e.users === null || e.users === undefined));
      const data: ChatInfo = {
        chatId: newChat.public.chatId,
        ownerId: newChat.public.ownerId,
        adminId: newChat.public.adminId,
        type: typeConverter(newChat.public.type),
        name: newChat.public.name,
        room: newChat.private.room,
        password: newChat.private.password,
        users: newChat.private.users,
        kicked: newChat.private.kicked,
        muted: newChat.private.muted,
        invited: newChat.private.invited,
      };
      if (chatRoom === undefined) {
        return [...prev, data];
      }
      return prev.map((ele) => (ele.chatId === chatRoom.chatId ? data : ele));
    });
  });

  const onSingleSendMessage = useRecoilCallback(
    ({ set }) =>
      (data: { sourceId: number; message: string; direct: boolean }) => {
        set(messageListState, (prev) => {
          const message: ChatMessage = { ...data, system: false };
          return [...prev, message];
        });
      }
  );

  //성수한테 물어봐야함
  // const onInviteUser = useRecoilCallback(({ set }) => (data: { chatId: number; sourceId: number }) => {
  //   set(chatRoomListState, (prev) => {
  //     const message: ChatMessage = { ...data, system: false };
  //     return [...prev, message];
  //   });
  // });

  return {
    onCreateChat,
    onUpdateChat,
    onSetAdmin,
    onDeleteChat,
    onGroupJoinChat,
    onGroupLeaveChat,
    onGroupSendMessage,
    onKickUser,
    onMuteUser,
    onSingleJoinChat,
    onSingleLeaveChat,
    onSingleSendMessage,
  };
};

export default useChatCallbacks;
