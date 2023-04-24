import React, { createContext, ReactNode } from "react";
import * as io from "socket.io-client";

interface ISocketManager {
  socket: io.Socket;
  connect(user: string): void;
  disconnect(user: string): void;
  on(event: string, callback: (...args: any[]) => void): void;
  off(event: string, callback?: (...args: any[]) => void): void;
  emit(event: string, data: any, callback?: (...args: any[]) => void): void;
}

const SocketContext = createContext<ISocketManager | null>(null);

class SocketManager implements ISocketManager {
  socket: io.Socket;

  constructor() {
    this.socket = io.connect("ws://43.200.11.197:4000");
  }

  connect(user: string) {
    this.socket.emit("connectUser", user);
  }

  disconnect(user: string) {
    this.socket.emit("disconnectUser", user);
  }

  on(event: string, callback: (...args: any[]) => void) {
    this.socket.on(event, callback);
  }

  off(event: string, callback?: (...args: any[]) => void) {
    if (callback) {
      this.socket.off(event, callback);
    } else {
      this.socket.off(event);
    }
  }

  emit(event: string, data: any, callback?: (...args: any[]) => void) {
    if (callback) {
      this.socket.emit(event, data, callback);
    } else {
      this.socket.emit(event, data);
    }
  }
}

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const socketManager = new SocketManager();

  return (
    <SocketContext.Provider value={socketManager}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
