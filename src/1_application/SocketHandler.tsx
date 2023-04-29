import React, { createContext, ReactNode, useEffect, useMemo } from "react";
import * as io from "socket.io-client";
import { useRecoilState } from "recoil";
import { chatRoomListState } from "@domain/recoil/chatAtom";
import { PublicChatInfo } from "@root/2_domain/Chat";

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
    console.log(process.env.REACT_APP_SOCKET_URL);
    this.socket = io.connect(process.env.REACT_APP_SOCKET_URL as string, {
      path: "/chat",
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
  const [chatRooms, setChatRooms] = useRecoilState(chatRoomListState);
  const handleChatRoomCreate = (data: any) => {
    console.log("ma", data);
    let asdf = 0;
    const newRoom: PublicChatInfo = {
      id: asdf++,
      title: "asdf",
      mode: "PUBLIC",
    };
    setChatRooms((prev) => [...prev, newRoom]);
    //console.log(chatRooms.length);
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
