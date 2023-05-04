import { PublicUserInfo } from "./User";
import { ChatInfo } from "./Chat";

export interface IChatRepository {
  /* ================================= */
  /*             Broadcast             */
  /* ================================= */

  createChat(name: string, type: string, password?: string): void;
  updateChat(name: string, type: string, password?: string): void;
  setAdmin(userId: number): void;

  /* ============================= */
  /*             Group             */
  /* ============================= */

  joinChat(chatId: number, password?: string): void;
  leaveChat(): void;
  sendMessage(message: string): void;
  kickUser(userId: number): void;
  muteUser(userId: number): void;

  /* ============================== */
  /*             Single             */
  /* ============================== */

  sendDirectMessage(userId: number, message: string): void;
  inviteUser(userId: number): void;
}
