import React from "react";
import UserInfo from "../components/user/UserInterface";
import GameWaitingRoom from "../components/game/GameWaitingRoom";
import "./GameWaitPage.css";

function GameWaitPage() {
  return (
    <div className="container">
      <div className="horizontal-rectangles">
        <GameWaitingRoom />
      </div>
      <div className="vertical-rectangle">
        <UserInfo />
      </div>
    </div>
  );
}

export default GameWaitPage;
