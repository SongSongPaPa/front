import { io, Socket } from "socket.io-client";

class GlobalSocket {
  private static socket = io(`${process.env.REACT_APP_SOCKET_URL as string}`, {
    withCredentials: true,
    autoConnect: false,
  });

  public static getSocket = (): Socket => {
    return this.socket;
  };
}

export default GlobalSocket;
