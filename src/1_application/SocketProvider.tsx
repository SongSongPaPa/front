import { chatRoomsState } from "@root/2_domain/recoil/test";
import React, { createContext, ReactNode, useEffect, useMemo } from "react";
import * as io from "socket.io-client";
import { useRecoilState } from "recoil";

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
    this.socket = io.connect("localhost:8000", {
      withCredentials: true,
      extraHeaders: { "my-custom-header": "asdf" },
    });
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
  const socketManager = useMemo(() => new SocketManager(), []);
  const [chatRooms, setChatRooms] = useRecoilState(chatRoomsState);
  const handleChatRoomCreate = (data: any) => {
    console.log("ma", data);
    setChatRooms((prev) => [...prev, data]);
    console.log(chatRooms.length);
  };
  useEffect(() => {
    socketManager.on("broadcast:chat:createChatRoom", handleChatRoomCreate);
  }, []);
  return (
    <SocketContext.Provider value={socketManager}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
