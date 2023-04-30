import { io, Socket } from "socket.io-client";
import { IChatRepository } from "@root/2_domain/IChatRepository";
import chatCallbacks from "@root/1_application/chatCallback";

class ChatRepository implements IChatRepository {
  private socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

  public setSocket(serverUrl: string) {
    this.socket = io(serverUrl);

    this.socket.on("connect", () => {
      console.log("Connected to server");
    });

    this.socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    ///this.socket.on("single:chat:createChat", (data) => console.log(data));
    this.socket.on("broadcast:chat:createChat", chatCallbacks.onCreateChat);
    this.socket.on("broadcast:chat:updateChat", (data) => console.log(data));

    this.socket.on("single:chat:joinChat", (data) => console.log(data));
    this.socket.on("group:chat:joinChat", (data) => console.log(data));
    this.socket.on("single:chat:leaveChat", (data) => console.log(data));
    this.socket.on("broadcast:chat:deleteChat", (data) => console.log(data));
    this.socket.on("broadcast:chat:setAdmin", (data) => console.log(data));
    this.socket.on("group:chat:leaveChat", (data) => console.log(data));
    this.socket.on("group:chat:sendMessage", (data) => console.log(data));
    this.socket.on("group:chat:kickUser", (data) => console.log(data));
    this.socket.on("group:chat:muteUser", (data) => console.log(data));

    this.socket.on("single:chat:sendMessage", (data) => console.log(data));
    this.socket.on("single:chat:inviteUser", (data) => console.log(data));
  }

  public createChatRoom(): void {
    this.socket.emit("createChat");
  }
}

export default ChatRepository;
