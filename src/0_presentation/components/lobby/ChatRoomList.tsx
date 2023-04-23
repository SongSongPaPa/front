import React from "react";
import { useRecoilState } from "recoil";
import { chatRoomsState } from "../../../recoil/test";
import ChatRoom from "./ChatRoom";

const ChatRoomList = () => {
  const [rooms, setRooms] = useRecoilState(chatRoomsState);
  return (
    <div className="room-container">
      {rooms.map((room, index) => (
        <ChatRoom key={index} title={room.title} headCount={room.headCount} />
      ))}
    </div>
  );
};

export default ChatRoomList;
