import React, { createContext, ReactNode, useEffect, useMemo } from "react";
import * as io from "socket.io-client";
import { useRecoilState } from "recoil";
import { chatRoomListState } from "@domain/recoil/chatAtom";
import { PublicChatInfo } from "@root/2_domain/Chat";
import GlobalSocket from "@root/3_infrastructure/GlobalSocket";
import ChatRepository from "@root/3_infrastructure/SocketIOChatRepository";

import { useRecoilCallback } from "recoil";

import useChatEvent from "./useChat";

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketHandler = ({ children }: SocketProviderProps) => {
  const socket = GlobalSocket.getChatSocket();

  useChatEvent();
  return <>{children}</>;
};

export default SocketHandler;
