import { useRecoilCallback, useRecoilState } from "recoil";
import { chatRoomListState, chatState } from "@root/2_domain/recoil/chatAtom";
import { ChatInfo, PublicChatInfo, typeConverter } from "@root/2_domain/Chat";
import { ChatPublicDto, ChatSessionDto } from "@root/3_infrastructure/dto/socket/chat.dto";
import { messageListState } from "@root/2_domain/recoil/messageAtom";
import { ChatMessage } from "@root/2_domain/ChatMessage";
import { useNavigate } from "react-router-dom";

const useChatCallbacks = () => {
  const navigate = useNavigate();
  /* ================================= */
  /*             Broadcast             */
  /* ================================= */

  const onCreateChat = useRecoilCallback(({ set }) => (data: ChatPublicDto) => {
    set(chatRoomListState, (prev) => {
      console.log("in onCreateChat callback");
      const chat: PublicChatInfo = {
        chatId: data.chatId,
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
      const newChat: PublicChatInfo = {
        chatId: data.chatId,
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
    set(chatState, (prev) => {
      console.log("in onSetAdmin callback - chatRoomListState");
      if (prev === undefined || prev.chatId <= 0) {
        console.log("⛔️ 없는 채팅방인뎁쇼");
        return prev;
      }
      return { ...prev, ownerId: data.ownerId || prev.ownerId, adminId: data.adminId || prev.adminId };
    });
    set(messageListState, (prev) => {
      console.log("in onSetAdmin callback - messageListState");
      const message: ChatMessage = {
        message: `방장이 바뀌었다리`,
        sourceId: 0,
        direct: false,
        system: true,
      };
      return [...prev, message];
    });
  });

  const onDeleteChat = useRecoilCallback(({ set }) => (data: { chatId: number }) => {
    console.log("in onDeleteChat callback");
    set(chatRoomListState, (prev) => {
      return prev.filter((element) => element.chatId !== data.chatId);
    });
    set(chatState, (prev) => {
      if (prev !== undefined && prev.chatId === data.chatId) {
        return { ...prev, chatId: 0 };
      }
      return prev;
    });
    set(messageListState, () => {
      return [];
    });
  });

  /* ============================= */
  /*             Group             */
  /* ============================= */

  const onGroupJoinChat = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    set(chatState, (prev) => {
      if (prev === undefined || prev.chatId <= 0) {
        console.log("⛔️ 현재 들어가있는 채팅방 없는뎁쇼");
        return prev;
      }
      return { ...prev, users: [...prev.users, data.userId] };
    });
    //Todo: userAtom이 만들어지면, message에 유저이름을 넣어보자.
    set(messageListState, (prev) => {
      const message: ChatMessage = {
        message: `가 들어왔다`,
        sourceId: data.userId,
        direct: false,
        system: true,
      };
      return [...prev, message];
    });
  });

  const onGroupLeaveChat = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    set(chatState, (prev) => {
      if (prev === undefined || prev.chatId <= 0) {
        console.log("⛔️ 현재 들어가있는 채팅방 없는뎁쇼");
        return prev;
      }
      return { ...prev, users: prev.users.filter((e) => e !== data.userId) };
    });
    //Todo: userAtom이 만들어지면, message에 유저이름을 넣어보자.
    set(messageListState, (prev) => {
      const message: ChatMessage = {
        message: `가 나갔다`,
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
    set(messageListState, (prev) => {
      const message: ChatMessage = {
        message: `가 강퇴당함`,
        sourceId: data.userId,
        direct: false,
        system: true,
      };
      return [...prev, message];
    });
  });

  const onMuteUser = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    set(messageListState, (prev) => {
      const message: ChatMessage = {
        message: `가 채금당함`,
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
    console.log("in onSingleLeaveChat callback");
    set(messageListState, (prev) => {
      return [];
    });
    set(chatState, (prev) => {
      return { ...prev, chatId: 0 };
    });
    navigate("/lobby");
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
        users: newChat.private.users,
      };
      return data;
    });
    set(messageListState, (prev) => {
      return [];
    });
    navigate("/chat");
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
