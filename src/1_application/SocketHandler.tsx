import React, { createContext, ReactNode, useEffect, useMemo } from "react";
import * as io from "socket.io-client";
import { useRecoilState } from "recoil";
import { chatRoomListState } from "@domain/recoil/chatAtom";
import { ChatInfo } from "@root/2_domain/Chat";
import GlobalSocket from "@root/3_infrastructure/GlobalSocket";
import ChatRepository from "@root/3_infrastructure/ChatRepository";

import { useRecoilCallback } from "recoil";

import useChatEvent from "./useChat";
import useUserEvent from "./useUser";

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketHandler = ({ children }: SocketProviderProps) => {
  //const socket = GlobalSocket.getChatSocket();

  useChatEvent();
  useUserEvent();
  return <>{children}</>;
};

export default SocketHandler;
