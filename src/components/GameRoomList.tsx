import React from "react";
import GameRoom, { GameRoomProps } from "./GameRoom";

interface GameRoomListProps {
    rooms: GameRoomProps[];
}

const GameRoomList = ({rooms}: GameRoomListProps) => {
    return (
    <div className="room-container">
      {rooms.map((room) => (
        <GameRoom title={room.title} headCount={room.headCount}/>
      ))}
    </div>
  );
}

export default GameRoomList;