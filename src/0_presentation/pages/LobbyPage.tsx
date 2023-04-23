import React from "react";
import ChatRoomContainer from "../components/lobby/ChatRoomContainer";
import GameRoomContainer from "../components/lobby/GameRoomContainer";
import UserInfo from "../components/user/UserInfo";
import "./LobbyPage.css";

function LobbyPage() {
  return (
    <div className="container">
      <div className="horizontal-rectangles">
        <GameRoomContainer />
        <ChatRoomContainer />
      </div>
      <div className="vertical-rectangle">
        <UserInfo />
      </div>
    </div>
  );
}

export default LobbyPage;
