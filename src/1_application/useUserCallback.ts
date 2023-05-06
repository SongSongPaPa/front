import { useRecoilCallback } from "recoil";
import { meState, userListState } from "@root/2_domain/recoil/userAtom";
import { PublicUserInfo, UserStateType } from "@root/2_domain/User";
import { UserInfoDto } from "@root/3_infrastructure/dto/socket/user.dto";
import { ChatPublicDto } from "@root/3_infrastructure/dto/socket/chat.dto";
import { GamePublicDto } from "@root/3_infrastructure/dto/socket/game.dto";
import { gameRoomListState } from "@root/2_domain/recoil/gameAtom";
import { GameRoomInfo } from "@root/2_domain/Game";
import { chatRoomListState } from "@root/2_domain/recoil/chatAtom";
import { ChatInfo, typeConverter } from "@root/2_domain/Chat";

const useUserCallback = () => {
  /* ================================= */
  /*             Broadcast             */
  /* ================================= */

  const onChangeState = useRecoilCallback(
    ({ set }) =>
      (data: { userId: number; username: string; state: UserStateType }) => {
        console.log("int onChangeState callback");
        set(userListState, (prev) => {
          const user = prev.find((e) => e.id === data.userId);
          if (user === undefined) {
            console.log("⛔️ 없는 유저인데요");
            return prev;
          }
          user.state = data.state;
          return prev.map((e) => (e.id === data.userId ? user : e));
        });
      }
  );

  const onUpdateDisplayName = useRecoilCallback(({ set }) => (data: { userId: number; name: string }) => {
    console.log(data);
    console.log("change Name", data.userId, data.name);
    set(meState, (oldMe) => {
      if (oldMe !== undefined && oldMe.id === data.userId) {
        return { ...oldMe, name: data.name };
      } else {
        return oldMe;
      }
    });
  });

  const onUpdateImage = useRecoilCallback(({ set }) => (data: { userId: number; imageUrl: string }) => {
    console.log(data);
    console.log("update image", data.userId, data.imageUrl);
    set(meState, (oldMe) => {
      if (oldMe !== undefined && oldMe.id === data.userId) {
        return { ...oldMe, profile: data.imageUrl };
      } else {
        return oldMe;
      }
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
          return data.chatList.map((e: ChatPublicDto) => {
            const chatInfo: ChatInfo = {
              chatId: e.chatId,
              ownerId: e.ownerId,
              adminId: e.adminId,
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
    set(meState, (oldMe) => ({
      ...oldMe,
      friends: [...oldMe.friends, data.userId],
    }));
  });

  const onUnfollowUser = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    console.log("remove friend", data.userId);
    set(meState, (prevState) => ({
      ...prevState,
      friends: prevState.friends.filter((friendId) => friendId !== data.userId),
    }));
  });

  const onBlockUser = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    console.log("block friend", data.userId);
    set(meState, (oldMe) => ({
      ...oldMe,
      blocks: [...oldMe.blocks, data.userId],
    }));
  });
  return { onConnect, onChangeState, onUpdateDisplayName, onUpdateImage, onFollowUser, onUnfollowUser, onBlockUser };
};

export default useUserCallback;
