import { User } from "@domain/User";
import { Chat } from "@domain/Chat";
import { Message } from "@domain/Chat";
import { IChatRepository } from "@domain/IChatRepository";
import { useContext } from "react";
/*import SocketContext from "@root/1_application/SocketProvider";

export const SocketIOChatRepository = (): IChatRepository => {
  //const [socket, setSocket] = useRecoilState(socketState);
  const socket = useContext(SocketContext);
  const createChatRoom = (user: User, chat: Chat): void => {
    console.log("nah?");
    console.log(socket);
    socket?.emit("createChatRoom", chat);
  };

  const sendMessage = (user: User, message: Message): void => {
    socket?.emit("group:chat:sendMessage", message);
  };

  const onMessageReceived = (
    chat: Chat,
    callback: (message: Message) => void
  ): void => {
    socket?.on("group:chat:sendMessage", (data: Message) => {
      callback(data);
    });
  };
  return { createChatRoom, sendMessage, onMessageReceived };
};*/
