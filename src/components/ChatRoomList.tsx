import React from "react";
import ChatRoom, { ChatRoomProps } from "./ChatRoom";

interface ChatRoomListProps {
    rooms: ChatRoomProps[];
}

const ChatRoomList = ({rooms}: ChatRoomListProps) => {
    return (
    <div className="room-container">
      {rooms.map((room) => (
        <ChatRoom title={room.title} headCount={room.headCount}/>
      ))}
    </div>
  );
}

export default ChatRoomList;