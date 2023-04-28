import React from "react";
import GameRoom, { GameRoomProps } from "./GameRoom";

interface GameRoomListProps {
  rooms: GameRoomProps[];
}

const GameRoomList = ({ rooms }: GameRoomListProps) => {
  return (
    <div className="room-container">
      {rooms.map((room) => (
        <GameRoom
          key={room.id}
          id={room.id}
          title={room.title}
          headCount={room.headCount}
          option={room.option}
        />
      ))}
    </div>
  );
};

export default GameRoomList;
