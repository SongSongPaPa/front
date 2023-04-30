import { io, Manager, Socket } from "socket.io-client";

class GlobalSocket {
  //private static chatSocket = io("localhost:8000", { path: "/chat" });
  // private static chatSocket = io(process.env.REACT_APP_SOCKET_TEST as string, { path: "/chat" });
  // private static manager = new Manager(process.env.REACT_APP_SOCKET_URL);
  // private static chatSocket = this.manager.socket("/chat", { extraHeaders });
  private static chatSocket = io(`${process.env.REACT_APP_SOCKET_URL as string}/chat`, {
    withCredentials: true,
  });
  private static userSocket = io(`${process.env.REACT_APP_SOCKET_URL as string}/user`, {
    withCredentials: true,
  });
  //private static gameSocket = io(process.env.REACT_APP_SOCKET_URL as string, { path: "/game" });

  public static getChatSocket = (): Socket => {
    console.log(`${process.env.REACT_APP_SOCKET_URL as string}/chat`);
    return this.chatSocket;
  };

  public static getUserSocket = (): Socket => {
    return this.userSocket;
  };

  /*public static getGameSocket = (): Socket => {
    return this.gameSocket;
  };*/
}

export default GlobalSocket;
