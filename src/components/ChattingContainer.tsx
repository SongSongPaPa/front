import React from "react";
import MessageInput from "./MessageForm";
import MessageList from "./MessageList";
import "./ChattingContainer.css";

const ChattingContainer = () => {
  return (
    <div className="chatting-container">
      <MessageList></MessageList>
      <MessageInput></MessageInput>
    </div>
  );
};

export default ChattingContainer;
