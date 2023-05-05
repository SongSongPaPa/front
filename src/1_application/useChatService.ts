import ChatRepository from "@root/3_infrastructure/ChatRepository";

const useChatService = () => {
  const createChat = (name: string, type: string, password?: string) => {
    console.log("send createChat");
    try {
      ChatRepository.createChat(name, type, password);
    } catch (e) {
      console.log(e);
    }
  };

  const updateChat = (name: string, type: string, password?: string) => {
    console.log("send updateChat");
    try {
      ChatRepository.updateChat(name, type, password);
    } catch (e) {
      console.log(e);
    }
  };

  const setAdmin = (userId: number) => {
    console.log("send setAdmin");
    try {
      ChatRepository.setAdmin(userId);
    } catch (e) {
      console.log(e);
    }
  };

  const joinChat = (chatId: number, password?: string) => {
    console.log("send joinChat");
    try {
      ChatRepository.joinChat(chatId, password);
    } catch (e) {
      console.log(e);
    }
  };

  const leaveChat = () => {
    console.log("send leaveChat");
    try {
      ChatRepository.leaveChat();
    } catch (e) {
      console.log(e);
    }
  };

  const sendMessage = (message: string) => {
    console.log("send sendMessage");
    try {
      ChatRepository.sendMessage(message);
    } catch (e) {
      console.log(e);
    }
  };

  const kickUser = (userId: number) => {
    console.log("send kickUser");
    try {
      ChatRepository.kickUser(userId);
    } catch (e) {
      console.log(e);
    }
  };

  const muteUser = (userId: number) => {
    console.log("send muteUser");
    try {
      ChatRepository.muteUser(userId);
    } catch (e) {
      console.log(e);
    }
  };

  const sendDirectMessage = (userId: number, message: string) => {
    console.log("send sendDirectMessage");
    try {
      ChatRepository.sendDirectMessage(userId, message);
    } catch (e) {
      console.log(e);
    }
  };

  const inviteUser = (userId: number) => {
    console.log("send inviteUser");
    try {
      ChatRepository.inviteUser(userId);
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
