import React from "react";
import "./Room.css";
import ModalButton from "../common/ModalButton";
import { useNavigate } from "react-router-dom";

export interface GameRoomProps {
  id: number;
  title: string;
  headCount: number;
  option: string;
}

const GameRoom = ({ title, headCount, option }: GameRoomProps) => {
  const navigate = useNavigate();
  return (
    <div className="room">
      <div className="title">{title}</div>
      <div className="headcount">{headCount}</div>
      <div className="headcount">{option}</div>
      <button
        className="game-play-button"
        onClick={() => navigate("/game-wait")}
      >
        Play!
      </button>
      <button className="game-watch-button">watch</button>
    </div>
  );
};

export default GameRoom;
