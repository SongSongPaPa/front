import React from "react";
import "./Room.css";
import SocketButton from "./SocketButton";

export interface GameRoomProps {
  title: string;
  headCount: number;
  option: string;
}

const GameRoom = ({ title, headCount, option }: GameRoomProps) => {
  return (
    <div className="room">
      <div className="title">{title}</div>
      <div className="headcount">{headCount}</div>
      <div className="headcount">{option}</div>
      <SocketButton className="game-play-button" text="Play!" />
      <SocketButton className="game-watch-button" text="watch" />
    </div>
  );
};

export default GameRoom;
