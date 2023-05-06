import { io, Socket } from "socket.io-client";

class GlobalSocket {
  private static socket = io(`${process.env.REACT_APP_SOCKET_URL as string}`, {
    withCredentials: true,
  });

  public static getSocket = (): Socket => {
    console.log(`${process.env.REACT_APP_SOCKET_URL as string}`);
    return this.socket;
  };
}

export default GlobalSocket;
