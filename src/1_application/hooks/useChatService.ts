//import { SocketIOChatRepository } from "@infrastructure/SocketIOChatRepository";
import { User } from "@root/2_domain/models/User";
import { Chat } from "@root/2_domain/models/Chat";

const useChatService = () => {
  //const socketRepository = SocketIOChatRepository();

  const createChatRoom = (user: User, chat: Chat) => {
    //socketRepository.createChatRoom(user, chat);
  };

  return { createChatRoom };
};

export default useChatService;
