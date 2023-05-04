import GameRepository from "@root/3_infrastructure/GameRepository";
import GlobalSocket from "@root/3_infrastructure/GlobalSocket";

const useGameService = () => {
  const socketRepository = new GameRepository(GlobalSocket.getChatSocket());

  const createGame = (speed: number) => {
    try {
      socketRepository.createGame(speed);
    } catch (e) {
      console.log(e);
    }
  };

  const joinGame = (gameId: number) => {
    try {
      socketRepository.joinGame(gameId);
    } catch (e) {
      console.log(e);
    }
  };

  const watchGame = (gameId: number) => {
    try {
      socketRepository.watchGame(gameId);
    } catch (e) {
      console.log(e);
    }
  };

  const leaveGame = (gameId: number) => {
    try {
      socketRepository.leaveGame(gameId);
    } catch (e) {
      console.log(e);
    }
  };

  const startGame = () => {
    try {
      socketRepository.startGame();
    } catch (e) {
      console.log(e);
    }
  };

  const movePaddle = (keyCode: number) => {
    try {
      socketRepository.leaveGame(keyCode);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    createGame,
    joinGame,
    watchGame,
    leaveGame,
    startGame,
    movePaddle,
  };
};

export default useGameService;
