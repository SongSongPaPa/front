import { Socket } from "socket.io-client";
import { IChatRepository } from "@root/2_domain/IChatRepository";
import GlobalSocket from "./GlobalSocket";

class ChatRepository implements IChatRepository {
  private socket: Socket = GlobalSocket.getSocket();

  /* ================================= */
  /*             Broadcast             */
  /* ================================= */

  public createChat(name: string, type: string, password?: string): void {
    console.log(name, type);
    this.socket.emit("createChat", { chat: { name: name, type: type, password: password } });
  }

  public updateChat(name: string, type: string, password?: string): void {
    this.socket.emit("updateChat", { name: name, type: type, password: password });
  }

  public setAdmin(userId: number): void {
    this.socket.emit("setAdmin", { userId: userId });
  }

  /* ============================= */
  /*             Group             */
  /* ============================= */

  public joinChat(chatId: number, password?: string): void {
    this.socket.emit("joinChat", { chatId: chatId, password: password });
  }

  public leaveChat(): void {
    this.socket.emit("leaveChat");
  }

  public sendMessage(message: string): void {
    this.socket.emit("sendMessage", { message: message });
  }

  public kickUser(userId: number): void {
    this.socket.emit("kickUser", { userId: userId });
  }

  public muteUser(userId: number): void {
    this.socket.emit("muteUser", { userId: userId });
  }

  /* ============================== */
  /*             Single             */
  /* ============================== */

  public sendDirectMessage(userId: number, message: string): void {
    this.socket.emit("sendDirectMessage", { userId: userId, message: message });
  }

  public inviteUser(userId: number): void {
    this.socket.emit("inviteUser", { userId: userId });
  }
}

export default new ChatRepository();
