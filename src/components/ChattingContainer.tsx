import React from "react";
import MessageInput from "./MessageForm";
import MessageList from "./MessageList";
import ChatRoomHeader from "./ChatRoomHeader";
import "./ChattingContainer.css";

const ChattingContainer = () => {
  return (
    <div className="chatting-container">
      <ChatRoomHeader></ChatRoomHeader>
      <MessageList></MessageList>
      <MessageInput></MessageInput>
    </div>
  );
};

export default ChattingContainer;
