import { BallInfo, GameInfo, GameScoreInfo, PlayerInfo } from "@root/2_domain/Game";
import { endGameState, gameRoomListState, gamingState } from "@root/2_domain/recoil/gameAtom";
import { ChatSessionDto } from "@root/3_infrastructure/dto/socket/chat.dto";
import GameSessionDto, { GamePlayerDto, GamePublicDto } from "@root/3_infrastructure/dto/socket/game.dto";
import { useRecoilCallback } from "recoil";
import { useNavigate } from "react-router-dom";

const useGameCallbacks = () => {
  const navigate = useNavigate();
  /* ================================= */
  /*             Broadcast             */
  /* ================================= */

  const onCreateGame = useRecoilCallback(({ set }) => (newChat: GamePublicDto) => {
    //Todo: 3초 2초 1초 내려주는 소켓 명세 있어야함
  });

  const onBroadDeleteGame = useRecoilCallback(({ set }) => (data: { gameId: number }) => {
    console.log("broad delete game");
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

  //Todo: 로직 수정되면 작성
  const onGroupDeleteGame = useRecoilCallback(({ set }) => () => {
    console.log("group delete");
    set(gamingState, (prev) => {
      return prev;
    });
    navigate("/lobby");
  });

  const onGroupLeaveGame = useRecoilCallback(({ set }) => (data: { userId: number }) => {
    console.log("group leave");
    set(gamingState, (prev) => {
      prev.players = prev.players.filter((e) => e.userId !== data.userId);
      return prev;
    });
    navigate("/lobby");
  });

  const onStartGame = useRecoilCallback(({ set }) => () => {
    //Todo: 게임시작 넘어가는 로직
  });

  const onEndGame = useRecoilCallback(({ set }) => (data: GamePlayerDto[]) => {
    //Todo: 게임 끝 화면 넘어가는 로직 필요
    set(gamingState, (prev) => {
      prev.gameId = -1;
      return prev;
    });
    set(endGameState, (prev) => {
      const result: GameScoreInfo = {
        winnerUserId: data[0].userId,
        winnerScore: data[0].score,
        winnerPosition: data[0].position,
        looserUserId: data[1].userId,
        looserScore: data[1].score,
        looserPosition: data[1].position,
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
          if (prev.players[0].userId === data.userId) {
            prev.players[0].position = data.position;
          } else {
            prev.players[1].position = data.position;
          }
          return prev;
        });
      }
  );

  /* ============================== */
  /*             Single             */
  /* ============================== */

  const onSingleJoinGame = useRecoilCallback(({ set }) => (data: GameSessionDto) => {
    console.log("on single join game");
    console.log("game data", data);
    set(gamingState, (prev) => {
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

  const onSingleWatchGame = useRecoilCallback(({ set }) => (data: GameSessionDto) => {
    set(gamingState, (prev) => {
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
  });

  return {
    onCreateGame,
    onBroadDeleteGame,
    onGroupWatchGame,
    onGroupJoinGame,
    onGroupDeleteGame,
    onGroupLeaveGame,
    onStartGame,
    onEndGame,
    onMovePaddle,
    onSingleJoinGame,
    onSingleWatchGame,
  };
};

export default useGameCallbacks;
