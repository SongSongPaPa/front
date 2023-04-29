import SocketIOChatRepository from "@root/3_infrastructure/SocketIOChatRepository";

const useChatService = () => {
  const socketRepository = new SocketIOChatRepository();

  const createChatRoom = () => {
    socketRepository.createChatRoom();
  };

  return { createChatRoom };
};

export default useChatService;
