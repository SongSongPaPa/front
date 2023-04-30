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

  public createChatRoom(): void {
    console.log("hey");
    this.socket.emit("createChat", { name: "asdf", type: "public" });
  }
}

export default ChatRepository;
