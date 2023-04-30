import React from "react";
import { useRecoilValue } from "recoil";
import { chatRoomListState } from "@root/2_domain/recoil/chatAtom";
import useChatService from "@root/1_application/useChatSocket";

const TestSocket = () => {
  const { createChatRoom } = useChatService();
  const rooms = useRecoilValue(chatRoomListState);
  return (
    <div>
      <button onClick={createChatRoom}>gogo</button>
      <div className="room-container">
        {rooms.map((room, index) => (
          <p key={index}>{room.title}asdf</p>
        ))}
      </div>
    </div>
  );
};

export default TestSocket;
