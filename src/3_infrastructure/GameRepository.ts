import { IGameRepository } from "@root/2_domain/IGameRepository";
import { Socket } from "socket.io-client";
import GlobalSocket from "./GlobalSocket";

class GameRepository implements IGameRepository {
  private socket: Socket = GlobalSocket.getSocket();

  public createGame = (speed: number): void => {
    console.log("GameRepository createGame, speed: ", speed);
    this.socket.emit("createGame", { speed: speed });
  };

  public joinGame = (gameId: number): void => {
    console.log("GameRepository joinGame, gameId: ", gameId);
    this.socket.emit("joinGame", { gameId: gameId });
  };

  public watchGame = (gameId: number): void => {
    console.log("GameRepository watchGame, gameId: ", gameId);
    this.socket.emit("watchGame", { gameId: gameId });
  };

  public leaveGame = (gameId: number): void => {
    console.log("GameRepository leaveGame, gameId: ", gameId);
    this.socket.emit("leaveGame", { gameId: gameId });
  };

  public startGame = (): void => {
    console.log("GameRepository startGame");
    this.socket.emit("startGame");
  };

  public movePaddle = (keyCode: number): void => {
    console.log("GameRepository movePaddle, keyCode: ", keyCode);
    this.socket.emit("movePaddle", { keyCode: keyCode });
  };
}

export default new GameRepository();
