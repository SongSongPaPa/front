import { io, Socket } from "socket.io-client";
import { IChatRepository } from "@root/2_domain/IChatRepository";
import chatCallbacks from "@root/1_application/useChatCallback";
import useChatCallbacks from "@root/1_application/useChatCallback";

class ChatRepository implements IChatRepository {
  private socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

  /*public setSocket(serverUrl: string) {
    this.socket = io(serverUrl);
  }*/

  /* ================================= */
  /*             Broadcast             */
  /* ================================= */

  public createChatRoom(name: string, type: string, password?: string): void {
    this.socket.emit("createChat", { name: name, type: type, password: password });
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

  public joinChat(userId: number, password?: string): void {
    this.socket.emit("joinChat", { userId: userId, password: password });
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

export default ChatRepository;
