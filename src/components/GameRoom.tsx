import React from "react";
import "./Room.css"
import SocketButton from "./SocketButton";

export interface GameRoomProps {
    title: string;
    headCount: number;
}

const GameRoom = ({title, headCount}: GameRoomProps) => {
    return (
        <div className="room">
            <div className="title">{title}</div>
            <div className="headcount">{headCount}</div>
            <SocketButton className="game-play-button" text="Play!"/>
            <SocketButton className="game-watch-button" text="watch"/>
        </div>
    );
}

export default GameRoom;