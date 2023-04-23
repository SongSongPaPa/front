import React from "react";
import "./Room.css";
import SocketButton from "../common/SocketButton";

export interface ChatRoomProps {
  title: string;
  headCount: number;
}

const ChatRoom = ({ title, headCount }: ChatRoomProps) => {
  return (
    <div className="room">
      <div className="title">{title}</div>
      <div className="headcount">{headCount}</div>
      <SocketButton className="chat-join-button" text="Join" />
    </div>
  );
};

export default ChatRoom;
