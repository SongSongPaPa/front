import SocketIOChatRepository from "@root/3_infrastructure/SocketIOChatRepository";
import GlobalSocket from "@root/3_infrastructure/GlobalSocket";

const useChatService = () => {
  const socketRepository = new SocketIOChatRepository(GlobalSocket.getChatSocket());

  const createChatRoom = () => {
    //socketRepository.createChatRoom();
  };

  return { createChatRoom };
};

export default useChatService;
