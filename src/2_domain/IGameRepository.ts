export interface IGameRepository {
  /* ================================= */
  /*             Broadcast             */
  /* ================================= */

  createGame(speed: number, title?: string): void;

  /* ============================= */
  /*             Group             */
  /* ============================= */

  joinGame(gameId: number): void;
  watchGame(gameId: number): void;
  leaveGame(): void;
  startGame(): void;
  movePaddle(keyCode: number): void;
  quickGame(): void;

  /* ============================== */
  /*             Single             */
  /* ============================== */
  inviteGame(userId: number): void;
}
