import SocketIOChatRepository from "@root/3_infrastructure/ChatRepository";
import GlobalSocket from "@root/3_infrastructure/GlobalSocket";

const useChatService = () => {
  const socketRepository = new SocketIOChatRepository(GlobalSocket.getChatSocket());

  const createChat = (name: string, type: string, password?: string) => {
    console.log("send createChat");
    try {
      socketRepository.createChat(name, type, password);
    } catch (e) {
      console.log(e);
    }
  };

  const updateChat = (name: string, type: string, password?: string) => {
    console.log("send updateChat");
    try {
      socketRepository.updateChat(name, type, password);
    } catch (e) {
      console.log(e);
    }
  };

  const setAdmin = (userId: number) => {
    console.log("send setAdmin");
    try {
      socketRepository.setAdmin(userId);
    } catch (e) {
      console.log(e);
    }
  };

  const joinChat = (chatId: number, password?: string) => {
    console.log("send joinChat");
    try {
      socketRepository.joinChat(chatId, password);
    } catch (e) {
      console.log(e);
    }
  };

  const leaveChat = () => {
    console.log("send leaveChat");
    try {
      socketRepository.leaveChat();
    } catch (e) {
      console.log(e);
    }
  };

  const sendMessage = (message: string) => {
    console.log("send sendMessage");
    try {
      socketRepository.sendMessage(message);
    } catch (e) {
      console.log(e);
    }
  };

  const kickUser = (userId: number) => {
    console.log("send kickUser");
    try {
      socketRepository.kickUser(userId);
    } catch (e) {
      console.log(e);
    }
  };

  const muteUser = (userId: number) => {
    console.log("send muteUser");
    try {
      socketRepository.muteUser(userId);
    } catch (e) {
      console.log(e);
    }
  };

  const sendDirectMessage = (userId: number, message: string) => {
    console.log("send sendDirectMessage");
    try {
      socketRepository.sendDirectMessage(userId, message);
    } catch (e) {
      console.log(e);
    }
  };

  const inviteUser = (userId: number) => {
    console.log("send inviteUser");
    try {
      socketRepository.inviteUser(userId);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    createChat,
    updateChat,
    setAdmin,
    joinChat,
    leaveChat,
    sendMessage,
    kickUser,
    muteUser,
    sendDirectMessage,
    inviteUser,
  };
};

export default useChatService;
