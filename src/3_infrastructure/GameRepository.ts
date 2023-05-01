import { IGameRepository } from "@root/2_domain/IGameRepository";
import { Socket } from "socket.io-client";

class GameRepository implements IGameRepository {
  private socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

  public createGame = (speed: number): void => {
    console.log("send createGame, speed: ", speed);
    this.socket.emit("createGame", { speed: speed });
  };

  public joinGame = (gameId: number): void => {
    console.log("send joinGame, gameId: ", gameId);
    this.socket.emit("joinGame", { gameId: gameId });
  };

  public watchGame = (gameId: number): void => {
    console.log("send watchGame, gameId: ", gameId);
    this.socket.emit("watchGame", { gameId: gameId });
  };

  public leaveGame = (gameId: number): void => {
    console.log("send leaveGame, gameId: ", gameId);
    this.socket.emit("leaveGame", { gameId: gameId });
  };

  public startGame = (): void => {
    console.log("send startGame");
    this.socket.emit("startGame");
  };

  public movePaddle = (keyCode: number): void => {
    console.log("send movePaddle, keyCode: ", keyCode);
    this.socket.emit("movePaddle", { keyCode: keyCode });
  };
}

export default GameRepository;
