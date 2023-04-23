import React from "react";
import ChatRoomContainer from "../components/lobby/ChatRoomContainer";
import GameRoomContainer from "../components/lobby/GameRoomContainer";
import UserInterface from "../components/user/UserInterface";
import "./LobbyPage.css";

function LobbyPage() {
  return (
    <div className="container">
      <div className="horizontal-rectangles">
        <GameRoomContainer />
        <ChatRoomContainer />
      </div>
      <div className="vertical-rectangle">
        <UserInterface />
      </div>
    </div>
  );
}

export default LobbyPage;
