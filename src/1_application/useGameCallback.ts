import { BallInfo, GameInfo, GameScoreInfo, PlayerInfo } from "@root/2_domain/Game";
import { endGameState, gameRoomListState, gamingState, readyGameState } from "@root/2_domain/recoil/gameAtom";
import { ChatSessionDto } from "@root/3_infrastructure/dto/socket/chat.dto";
import GameSessionDto, { GameBallDto, GamePlayerDto, GamePublicDto } from "@root/3_infrastructure/dto/socket/game.dto";
import { useRecoilCallback, useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userListState } from "@root/2_domain/recoil/userAtom";
import { focusedGameState } from "@root/2_domain/recoil/gameAtom";
import useModal from "./useModal";

const useGameCallbacks = () => {
  const navigate = useNavigate();
  const { showModal } = useModal();

  /* ================================= */
  /*             Broadcast             */
  /* ================================= */

  const onCreateGame = useRecoilCallback(({ set }) => (newChat: GamePublicDto) => {
    set(gameRoomListState, (prev) => {
      return [
        ...prev,
        {
          gameId: newChat.gameId,
          ownerId: newChat.ownerId,
          name: newChat.name,
          speed: newChat.speed,
        },
      ];
    });
  });

  const onBroadDeleteGame = useRecoilCallback(({ set }) => (data: { gameId: number }) => {
    console.log("on broad delete game");
    set(gameRoomListState, (prev) => {
      return prev.filter((e) => e.gameId !== data.gameId);
    });
  });

  /* ============================= */
  /*             Group             */
  /* ============================= */

  const onGroupWatchGame = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    set(gamingState, (prev) => {
      return { ...prev, watcher: [...prev.watcher, data.userId] };
    });
  });

  const onGroupJoinGame = useRecoilCallback(({ set }) => (data: GamePlayerDto) => {
    set(gamingState, (prev) => {
      const player: PlayerInfo = { userId: data.userId, score: data.score, position: data.position };
      return { ...prev, players: [...prev.players, player] };
    });
  });

  // //Todo: 로직 수정되면 작성
  // const onGroupDeleteGame = useRecoilCallback(({ set }) => () => {
  //   console.log("group delete");
  //   set(gamingState, (prev) => {
  //     return prev;
  //   });
  //   navigate("/lobby");
  // });

  const onGroupLeaveGame = useRecoilCallback(({ set }) => (data: { userId: number; breakGame: boolean }) => {
    console.log("group leave");
    set(gamingState, (prev) => {
      return { ...prev, players: prev.players.filter((e) => e.userId !== data.userId), onGame: !data.breakGame };
    });
    // set(gameRoomListState, (prev) => {
    //   prev.players = prev.players.filter((e) => e.userId !== data.userId);
    //   return prev;
    // });
  });

  const onStartGame = useRecoilCallback(({ set }) => () => {
    set(gamingState, (prev) => {
      return { ...prev, onGame: true };
    });
  });

  const onEndGame = useRecoilCallback(({ set }) => (data: { winner: GamePlayerDto; loser: GamePlayerDto }) => {
    console.log("In on EndGame before: ", gamingState);
    set(gamingState, (prev) => {
      return { ...prev, gameId: -1, onGame: false };
    });
    console.log("In on EndGame after: ", gamingState);
    set(endGameState, (prev) => {
      const result: GameScoreInfo = {
        winnerUserId: data.winner.userId,
        winnerScore: data.winner.score,
        winnerPosition: data.winner.position,
        looserUserId: data.loser ? data.loser.userId : 0,
        looserScore: data.loser ? data.loser.score : 0,
        looserPosition: data.loser ? data.loser.position : [0, 0, 0],
      };
      return result;
    });
  });

  const onMovePaddle = useRecoilCallback(
    ({ set }) =>
      (data: {
        userId: number;
        position: number[]; // 데이터 받아보고 테스트해보기~
      }) => {
        set(gamingState, (prev) => {
          // if (prev.players[0].userId === data.userId) {
          //   prev.players[0].position = data.position;
          // } else {
          //   prev.players[1].position = data.position;
          // }
          console.log("data: ", data);
          const player = prev.players.find((e) => e.userId === data.userId)!;
          const newState: PlayerInfo = { userId: data.userId, position: data.position, score: player.score };
          if (prev.players[0].userId === player.userId) {
            return { ...prev, players: [newState, prev.players[1]] };
          } else {
            return { ...prev, players: [prev.players[0], newState] };
          }
          // return { ...prev, players: [] };
        });
      }
  );

  const onInitRound = useRecoilCallback(({ set }) => (data: { players: GamePlayerDto[]; ball: GameBallDto }) => {
    set(gamingState, (prev) => {
      const ball: BallInfo = { speed: data.ball.speed, position: data.ball.position };
      const player1: PlayerInfo = {
        userId: data.players[0].userId,
        score: data.players[0].score,
        position: data.players[0].position,
      };
      const player2: PlayerInfo = {
        userId: data.players[1].userId,
        score: data.players[1].score,
        position: data.players[1].position,
      };
      return { ...prev, players: [player1, player2], ball: ball };
    });
  });

  const onStartRound = useRecoilCallback(({ set }) => () => {
    set(gamingState, (prev) => {
      return { ...prev, onRound: true };
    });
    set(readyGameState, (prev) => {
      return 3;
    });
  });

  const onMoveBall = useRecoilCallback(({ set }) => (data: { position: number }) => {
    set(gamingState, (prev) => {
      return { ...prev, ball: { ...prev.ball, position: data.position } };
    });
  });

  const onEndRound = useRecoilCallback(({ set }) => () => {
    set(gamingState, (prev) => {
      return { ...prev, onRound: false };
    });
  });

  const onCountDownRound = useRecoilCallback(({ set }) => (data: { count: number }) => {
    set(readyGameState, () => {
      console.log("on count do rou callbck", data.count);
      return data.count;
    });
  });

  /* ============================== */
  /*             Single             */
  /* ============================== */

  const onSingleJoinGame = useRecoilCallback(({ set }) => (data: GameSessionDto) => {
    console.log("on single join game");
    console.log("game data", data);

    set(gamingState, () => {
      const newBall: BallInfo = {
        speed: data.private.ball.speed,
        position: data.private.ball.position,
      };

      const game: GameInfo = {
        gameId: data.public.gameId,
        ownerId: data.public.ownerId,
        name: data.public.name,
        speed: data.public.speed,
        players: data.private.players,
        ball: newBall,
        round: data.private.round,
        totalScore: data.private.totalScore,
        watcher: data.private.watcher,
        onGame: data.private.onGame,
        onRound: data.private.onRound,
      };

      return game;
    });
    navigate("/game-wait");
  });

  const onSingleLeaveGame = useRecoilCallback(({ set }) => () => {
    console.log("on SingleLeaveGame");
    set(gamingState, (prev) => {
      return { ...prev, gameId: 0 };
    });
    navigate("/lobby");
  });

  const onSingleInviteGame = useRecoilCallback(
    ({ set }) =>
      (data: { gameId: number; sourceId: number; sourceUsername: string }) => {
        console.log("on single invite game");
        set(focusedGameState, () => {
          const newState: [number, string] = [data.gameId, data.sourceUsername];
          return newState;
        });
        showModal({ modalType: "GameInviteModal" });
      }
  );

  return {
    onCreateGame,
    onBroadDeleteGame,
    onGroupWatchGame,
    onGroupJoinGame,
    // onGroupDeleteGame,
    onGroupLeaveGame,
    onStartGame,
    onEndGame,
    onMovePaddle,

    onInitRound,
    onStartRound,
    onMoveBall,
    onEndRound,
    onCountDownRound,

    onSingleJoinGame,
    onSingleLeaveGame,
    onSingleInviteGame,
  };
};

export default useGameCallbacks;
