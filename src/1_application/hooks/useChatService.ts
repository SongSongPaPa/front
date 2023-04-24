import { SocketIOChatRepository } from "@infrastructure/SocketIOChatRepository";
import { User } from "@root/2_domain/User";
import { Chat } from "@root/2_domain/Chat";

const useChatService = () => {
  const socketRepository = SocketIOChatRepository();

  const createChatRoom = (user: User, chat: Chat) => {
    socketRepository.createChatRoom(user, chat);
  };

  return { createChatRoom };
};

export default useChatService;
