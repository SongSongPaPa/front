import React from "react";
import GamePlayerBox from "./GamePlayerBox";
import "./GameWaitingRoom.css";

const GameWaitingRoom = () => {
  return (
    <div className="containerr">
      <GamePlayerBox />
      <GamePlayerBox />
    </div>
  );
};

export default GameWaitingRoom;
