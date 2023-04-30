import { io, Socket } from "socket.io-client";

class GlobalSocket {
  private static chatSocket = io(process.env.REACT_APP_SOCKET + "/chat");
  private static userSocket = io(process.env.REACT_APP_SOCKET + "/user");
  private static gameSocket = io(process.env.REACT_APP_SOCKET + "/game");

  public static getChatSocket = (): Socket => {
    return this.chatSocket;
  };

  public static getUserSocket = (): Socket => {
    return this.userSocket;
  };

  public static getGameSocket = (): Socket => {
    return this.gameSocket;
  };
}

export default GlobalSocket;
