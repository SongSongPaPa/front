import React from "react";
import UserInfo from "../components/user/UserInfo";
import ChattingContainer from "../components/chat/ChattingContainer";

function ChatPage() {
  return (
    <div className="container">
      <div className="horizontal-rectangles">
        <ChattingContainer />
      </div>
      <div className="vertical-rectangle">
        <UserInfo />
      </div>
    </div>
  );
}

export default ChatPage;
