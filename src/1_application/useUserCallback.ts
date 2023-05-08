import { useRecoilCallback, useRecoilValue } from "recoil";
import { meState, userListState } from "@root/2_domain/recoil/userAtom";
import { PublicUserInfo, UserStateType } from "@root/2_domain/User";
import { UserInfoDto } from "@root/3_infrastructure/dto/socket/user.dto";
import { ChatPublicDto } from "@infrastructure/dto/socket/chat.dto";
import { GamePublicDto } from "@root/3_infrastructure/dto/socket/game.dto";
import { gameRoomListState } from "@root/2_domain/recoil/gameAtom";
import { GameRoomInfo } from "@root/2_domain/Game";
import { chatRoomListState } from "@root/2_domain/recoil/chatAtom";
import { ChatInfo, PublicChatInfo, typeConverter } from "@root/2_domain/Chat";

const useUserCallback = () => {
  /* ================================= */
  /*             Broadcast             */
  /* ================================= */

  const onChangeState = useRecoilCallback(
    ({ set }) =>
      (data: { userId: number; username: string; state: UserStateType; profile: string }) => {
        set(userListState, (prev) => {
          console.log("int onChangeState callback, userId: ", data.userId, "   state: ", data.state);
          const user = prev.find((e) => e.id === data.userId);
          if (user === undefined) {
            // console.log("⛔️ 없는 유저인데요");

            return [...prev, { id: data.userId, nickname: data.username, state: data.state, profile: data.profile }];
          }
          //user.state = data.state;
          return prev.map((e) => (e.id === data.userId ? { ...user, state: data.state } : e));
        });
      }
  );

  const onUpdateDisplayName = useRecoilCallback(({ set }) => (data: { userId: number; name: string }) => {
    console.log("change Name", data.userId, data.name);
    set(userListState, (prev) => {
      return prev.map((e) => (e.id === data.userId ? { ...e, nickname: data.name } : e));
    });
    set(meState, (prev) => {
      if (prev.id !== data.userId) {
        return prev;
      }
      return { ...prev, nickname: data.name };
    });
  });

  const onUpdateImage = useRecoilCallback(({ set }) => (data: { userId: number; imageUrl: string }) => {
    console.log(data);
    console.log("update image", data.userId, data.imageUrl);

    set(userListState, (prev) => {
      return prev.map((e) => (e.id === data.userId ? { ...e, profile: data.imageUrl } : e));
    });
    set(meState, (prev) => {
      if (prev.id !== data.userId) {
        return prev;
      }
      return { ...prev, profile: data.imageUrl };
    });
  });

  /* ============================= */
  /*             Single            */
  /* ============================= */

  const onConnect = useRecoilCallback(
    ({ set }) =>
      (data: { userList: UserInfoDto[]; chatList: ChatPublicDto[]; gameList: GamePublicDto[] }) => {
        console.log("onConnect, data: ", data);
        set(gameRoomListState, (prev) => {
          return data.gameList.map((e) => {
            const gameInfo: GameRoomInfo = {
              gameId: e.gameId,
              ownerId: e.ownerId,
              name: e.name,
              speed: e.speed,
            };
            return gameInfo;
          });
        });
        //Todo : 성수야 profile 날려줘
        set(userListState, (prev) => {
          return data.userList.map((e) => {
            const userInfo: PublicUserInfo = {
              id: e.userId,
              nickname: e.username,
              state: e.state as UserStateType,
              profile: e.profile,
            };
            return userInfo;
          });
        });
        set(chatRoomListState, (prev) => {
          return data.chatList.map((e) => {
            const chatInfo: PublicChatInfo = {
              chatId: e.chatId,
              type: typeConverter(e.type),
              name: e.name,
            };
            return chatInfo;
          });
        });
      }
  );

  const onFollowUser = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    console.log("add friend", data.userId);
    set(meState, (prev) => {
      const friends = prev.friends.find((item) => item.id === data.userId)!;
      return { ...prev, friends: [...prev.friends, { ...friends, id: data.userId }] };
    });
  });

  const onUnfollowUser = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    console.log("remove friend", data.userId);
    set(meState, (prev) => {
      const friends = prev.friends.filter((item) => item.id !== data.userId)!;
      return { ...prev, friends: friends };
    });
  });

  const onBlockUser = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    console.log("block friend", data.userId);
    set(meState, (prev) => {
      const blocks = prev.blocks.find((item) => item.id === data.userId)!;
      return { ...prev, blocks: [...prev.blocks, { ...blocks, id: data.userId }] };
    });
  });

  const onUnBlockUser = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    console.log("unBlock friend", data.userId);
    set(meState, (prev) => {
      const blocks = prev.blocks.filter((item) => item.id !== data.userId)!;
      return { ...prev, blocks: blocks };
    });
  });

  const onError = useRecoilCallback(({ set }) => (data: { status: number; message: string }) => {
    console.log(data);
    alert(data.message);
  });
  return {
    onConnect,
    onChangeState,
    onUpdateDisplayName,
    onUpdateImage,
    onFollowUser,
    onUnfollowUser,
    onBlockUser,
    onUnBlockUser,
    onError,
  };
};

export default useUserCallback;
