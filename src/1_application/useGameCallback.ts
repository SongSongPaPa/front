<<<<<<< HEAD
import { PlayerInfo } from "@root/2_domain/Game";
import { gameRoomListState, gamingState } from "@root/2_domain/recoil/gameAtom";
import { GamePlayerDto, GamePublicDto } from "@root/3_infrastructure/dto/socket/game.dto";
=======
>>>>>>> 2cdb8dc82c7637ffe2209f8ade8db043520cac52
import { useRecoilCallback } from "recoil";

const useChatCallbacks = () => {
  /* ================================= */
  /*             Broadcast             */
  /* ================================= */

  const onCreateGame = useRecoilCallback(({ set }) => (newChat: GamePublicDto) => {
    //Todo: 3초 2초 1초 내려주는 소켓 명세 있어야함
  });

  const onDeleteGame = useRecoilCallback(({ set }) => (data: { gameId: number }) => {
    set(gameRoomListState, (prev) => {
      return prev.filter((e) => e.gameId !== data.gameId);
    });
  });

  /* ============================= */
  /*             Group             */
  /* ============================= */

  const onGroupWatchGame = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    set(gamingState, (prev) => {
      prev.watcher.push(data.userId);
      return prev;
    });
  });
  const onGroupJoinGame = useRecoilCallback(({ set }) => (data: GamePlayerDto) => {
    set(gamingState, (prev) => {
      const player: PlayerInfo = { userId: data.userId, score: data.score, position: data.position };
      prev.players.push(player);
      return prev;
    });
  });
  const onGroupDeleteGame = useRecoilCallback(({ set }) => () => {
    set(gamingState, (prev) => {
      const player: PlayerInfo = { userId: data.userId, score: data.score, position: data.position };
      prev.players.push(player);
      return prev;
    });
  });

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
