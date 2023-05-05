export interface IGameRepository {
  /* ================================= */
  /*             Broadcast             */
  /* ================================= */

  createGame(speed: number): void;

  /* ============================= */
  /*             Group             */
  /* ============================= */

  joinGame(gameId: number): void;
  watchGame(gameId: number): void;
  leaveGame(): void;
  startGame(): void;
  movePaddle(keyCode: number): void;

  /* ============================== */
  /*             Single             */
  /* ============================== */
}