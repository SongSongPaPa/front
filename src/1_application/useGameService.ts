import GameRepository from "@root/3_infrastructure/GameRepository";

const useGameService = () => {
  const createGame = (speed: number, title?: string) => {
    try {
      GameRepository.createGame(speed, title);
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

  const leaveGame = () => {
    try {
      GameRepository.leaveGame();
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
      GameRepository.movePaddle(keyCode);
    } catch (e) {
      console.log(e);
    }
  };

  const quickGame = () => {
    try {
      GameRepository.quickGame();
    } catch (e) {
      console.log(e);
    }
  };

  const inviteGame = (userId: number) => {
    try {
      GameRepository.inviteGame(userId);
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
    quickGame,
    inviteGame,
  };
};

export default useGameService;
