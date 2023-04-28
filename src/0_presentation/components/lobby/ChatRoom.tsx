import React from "react";
import "./Room.css";
import SocketButton from "../common/SocketButton";
import { useNavigate } from "react-router-dom";

export interface ChatRoomProps {
  title: string;
  headCount: number;
}

const ChatRoom = ({ title, headCount }: ChatRoomProps) => {
  const navigate = useNavigate();
  return (
    <div className="room">
      <div className="title">{title}</div>
      <div className="headcount">{headCount}</div>
      <button className="chat-join-button" onClick={() => navigate("/chat")}>
        join
      </button>
    </div>
  );
};

export default ChatRoom;
