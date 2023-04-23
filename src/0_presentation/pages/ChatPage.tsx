import React from "react";
import UserInterface from "../components/user/UserInterface";
import ChattingContainer from "../components/chat/ChattingContainer";

function ChatPage() {
  return (
    <div className="container">
      <div className="horizontal-rectangles">
        <ChattingContainer />
      </div>
      <div className="vertical-rectangle">
        <UserInterface />
      </div>
    </div>
  );
}

export default ChatPage;
