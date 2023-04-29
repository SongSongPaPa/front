import { IChatRepository } from "@root/2_domain/IChatRepository";
import { useContext } from "react";
import SocketContext from "@root/1_application/SocketHandler";

class SocketIOChatRepository implements IChatRepository {
  private socket = useContext(SocketContext);
  public createChatRoom() {
    console.log("nah?");
    //console.log(socket);
    this.socket?.emit("createChat", []);
  }
}

export default SocketIOChatRepository;
