import React from "react";
import UserInfo from "../components/UserInfo";
import ChattingContainer from "../components/ChattingContainer";

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
