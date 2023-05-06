import { useRecoilCallback, useRecoilState } from "recoil";
import { chatRoomListState, chatState } from "@root/2_domain/recoil/chatAtom";
import { ChatInfo, typeConverter } from "@root/2_domain/Chat";
import { ChatPublicDto, ChatSessionDto } from "@root/3_infrastructure/dto/socket/chat.dto";
import { messageListState } from "@root/2_domain/recoil/messageAtom";
import { ChatMessage } from "@root/2_domain/ChatMessage";

const useChatCallbacks = () => {
  /* ================================= */
  /*             Broadcast             */
  /* ================================= */

  const onCreateChat = useRecoilCallback(({ set }) => (data: ChatPublicDto) => {
    set(chatRoomListState, (prev) => {
      console.log("in onCreateChat callback");
      const chat: ChatInfo = {
        chatId: data.chatId,
        ownerId: data.ownerId,
        adminId: data.adminId,
        type: typeConverter(data.type),
        name: data.name,
      };
      return [...prev, chat];
    });
  });

  const onUpdateChat = useRecoilCallback(({ set }) => (data: ChatPublicDto) => {
    set(chatRoomListState, (prev) => {
      console.log("in onUpdateChat callback");
      const chat = prev.find((e) => e.chatId === data.chatId);
      if (chat === undefined) {
        console.log("⛔️ 없는 채팅방인뎁쇼");
        return prev;
      }
      const newChat: ChatInfo = {
        chatId: chat.chatId,
        adminId: data.adminId,
        ownerId: data.ownerId,
        type: typeConverter(data.type),
        name: data.name,
      };
      return prev.map((element) => (element.chatId === newChat.chatId ? newChat : element));
    });
    set(messageListState, (prev) => {
      console.log("in messageListState callback");
      const message: ChatMessage = { message: "방 정보가 바뀌었다리", sourceId: 0, direct: false, system: true };
      return [...prev, message];
    });
  });

  const onSetAdmin = useRecoilCallback(({ set }) => (data: { chatId: number; ownerId: number; adminId: number }) => {
    set(chatRoomListState, (prev) => {
      console.log("in onSetAdmin callback - chatRoomListState");
      const chat = prev.find((e) => e.chatId === data.chatId);
      if (chat === undefined) {
        console.log("⛔️ 없는 채팅방인뎁쇼");
        return prev;
      }
      const newChat: ChatInfo = {
        chatId: data.chatId,
        ownerId: data.ownerId || chat.ownerId,
        adminId: data.adminId || chat.adminId,
        type: chat.type,
        name: chat.name,
      };
      return prev.map((element) => (element.chatId === chat.chatId ? newChat : element));
    });

    //Todo: userAtom이 만들어지면, message에 유저이름을 넣어보자.

    set(messageListState, (prev) => {
      console.log("in onSetAdmin callback - messageListState");
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
      // if (chatState.chatId !== undefined){

      // }
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
    set(messageListState, (prev) => {
      return [];
    });
    set(chatState, (prev) => {
      return { ...prev, chatId: 0 };
    });
  });

  //Todo: 채팅방 페이지로 넘어가는 로직 필요
  const onSingleJoinChat = useRecoilCallback(({ set }) => (newChat: ChatSessionDto) => {
    set(chatState, (prev) => {
      console.log("in onSingleJoinChat callback");
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
      return data;
    });
    set(messageListState, (prev) => {
      return [];
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
