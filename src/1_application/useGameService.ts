import GameRepository from "@root/3_infrastructure/GameRepository";

const useGameService = () => {
  const createGame = (speed: number) => {
    try {
      GameRepository.createGame(speed);
    } catch (e) {
      console.log(e);
    }
  };

  const joinGame = (gameId: number) => {
    try {
      GameRepository.joinGame(gameId);
    } catch (e) {
      console.log(e);
    }
  };

  const watchGame = (gameId: number) => {
    try {
      GameRepository.watchGame(gameId);
    } catch (e) {
      console.log(e);
    }
  };

  const leaveGame = (gameId: number) => {
    try {
      GameRepository.leaveGame(gameId);
    } catch (e) {
      console.log(e);
    }
  };

  const startGame = () => {
    try {
      GameRepository.startGame();
    } catch (e) {
      console.log(e);
    }
  };

  const movePaddle = (keyCode: number) => {
    try {
      GameRepository.leaveGame(keyCode);
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
